import mongoose from 'mongoose';
import { config } from './env.js';

/**
 * MongoDB Connection Manager
 * 
 * Manages the Mongoose database connection lifecycle.
 * Ensures the Express API remains resilient and accessible
 * even if MongoDB is temporarily offline or in transition.
 */

let isConnected = false;

export const connectDB = async () => {
  if (!config.mongoUri) {
    console.warn('[MongoDB] Warning: MONGODB_URI is not set. Contact form persistence will remain offline.');
    return false;
  }

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 4000, // Fail quickly (4s) so request doesn't hang
    });

    isConnected = true;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host} / ${conn.connection.name}`);
    return true;
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB] Connection notice: Unable to reach MongoDB (${error.message}).`);
    console.warn('[MongoDB] The Express API remains fully operational. Contact submissions will return a clean 503 until MongoDB is active.');
    return false;
  }
};

// Monitor connection lifecycle events
mongoose.connection.on('connected', () => {
  isConnected = true;
  console.log('[MongoDB] Connection state: CONNECTED');
});

mongoose.connection.on('error', (err) => {
  isConnected = false;
  console.error('[MongoDB] Connection error event:', err.message);
});

mongoose.connection.on('disconnected', () => {
  isConnected = false;
  console.warn('[MongoDB] Connection state: DISCONNECTED');
});

/**
 * Helper to check whether database is currently ready to persist documents
 * readyState: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
 */
export const isDbConnected = () => {
  return mongoose.connection.readyState === 1;
};

export default connectDB;
