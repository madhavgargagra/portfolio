import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';
import apiRoutes from './routes/index.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security and CORS configuration with multi-origin production support
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, postman, same-origin monolithic deployments)
    if (!origin) {
      return callback(null, true);
    }

    const isAllowed = 
      config.allowedOrigins.includes(origin) ||
      origin === config.clientUrl ||
      origin.startsWith('http://localhost:');

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error(`Blocked by CORS policy: Origin ${origin} not whitelisted.`));
    }
  },
  credentials: true,
}));

// Body parsers with sensible size restrictions to mitigate payload abuse
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// Serve static backend assets (resumes, public downloads)
const publicDir = path.join(__dirname, '../public');
app.use('/public', express.static(publicDir));

// Serve production client build if compiled
const clientDistDir = path.join(__dirname, '../../client/dist');
const hasClientBuild = fs.existsSync(clientDistDir);

if (hasClientBuild) {
  app.use(express.static(clientDistDir));
}

// API Health / documentation info route (available if no frontend or accessed directly)
app.get('/api/info', (req, res) => {
  res.status(200).json({
    service: 'Madhav Portfolio REST API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
      resume: 'GET /public/resumes/madhav-garg-resume.pdf',
    },
  });
});

// Mount modular API routes
app.use('/api', apiRoutes);

// Fallback for SPA routing in unified production deployments
if (hasClientBuild) {
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/public')) {
      return next();
    }
    res.sendFile(path.join(clientDistDir, 'index.html'));
  });
} else {
  // If client is not compiled, root route serves API info
  app.get('/', (req, res) => {
    res.status(200).json({
      service: 'Madhav Portfolio REST API',
      status: 'active',
      health: '/api/health',
    });
  });
}

// Fallback 404 handler for unmatched API routes
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

// Connect to MongoDB and start listening
connectDB();

const server = app.listen(config.port, () => {
  console.log(`[API Server] Running on port ${config.port} (Environment: ${config.nodeEnv})`);
  console.log(`[API Server] Health Check: http://localhost:${config.port}/api/health`);
});

// Graceful termination
const shutdown = async () => {
  console.log('\n[API Server] Gracefully shutting down...');
  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close(false);
      console.log('[MongoDB] Connection closed safely.');
    }
  } catch (err) {
    console.error('[MongoDB] Error during disconnect:', err.message);
  }

  server.close(() => {
    console.log('[API Server] Closed active connections.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default app;
