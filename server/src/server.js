import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config/env.js';
import apiRoutes from './routes/index.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security and CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, postman) or matching dev client
    if (!origin || origin.startsWith('http://localhost') || origin === config.clientUrl) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true,
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets (e.g., resumes, uploads)
const publicDir = path.join(__dirname, '../public');
app.use('/public', express.static(publicDir));

// Root info route
app.get('/', (req, res) => {
  res.status(200).json({
    service: 'Madhav Portfolio REST API',
    version: '1.0.0',
    documentation: '/api/health',
  });
});

// Mount modular API routes
app.use('/api', apiRoutes);

// Fallback 404 handler
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

// Start server
const server = app.listen(config.port, () => {
  console.log(`[API Server] Running on http://localhost:${config.port} (Environment: ${config.nodeEnv})`);
  console.log(`[API Server] Health Check: http://localhost:${config.port}/api/health`);
});

// Graceful termination
const shutdown = () => {
  console.log('\n[API Server] Gracefully shutting down...');
  server.close(() => {
    console.log('[API Server] Closed active connections.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default app;
