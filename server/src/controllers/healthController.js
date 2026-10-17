import { config } from '../config/env.js';
import { isDbConnected } from '../config/db.js';

/**
 * Health check controller
 * GET /api/health
 */
export const getHealthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    service: 'madhav-portfolio-api',
    message: 'Backend server is active and responding',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    environment: config.nodeEnv,
    database: {
      status: isDbConnected() ? 'connected' : 'disconnected',
      configured: Boolean(config.mongoUri),
    },
  });
};
