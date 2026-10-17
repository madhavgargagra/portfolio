/**
 * Lightweight In-Memory Rate Limiter Middleware
 * 
 * Protects public endpoints (like contact message submissions) from automated spam/abuse.
 * Limits client IPs to a maximum number of requests per sliding time window.
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes window
const MAX_REQUESTS = 30;           // Max 30 submissions per 15 minutes per IP

const requestMap = new Map();

// Periodic cleanup of stale tracking records every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of requestMap.entries()) {
    const validTimestamps = timestamps.filter(time => now - time < WINDOW_MS);
    if (validTimestamps.length === 0) {
      requestMap.delete(ip);
    } else {
      requestMap.set(ip, validTimestamps);
    }
  }
}, 5 * 60 * 1000).unref(); // unref avoids holding Node process open

export const contactRateLimiter = (req, res, next) => {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  const timestamps = requestMap.get(clientIp) || [];
  const validTimestamps = timestamps.filter(time => now - time < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      error: 'Too Many Requests',
      message: 'Rate limit exceeded for contact submissions. Please wait a few minutes before submitting again.',
    });
  }

  validTimestamps.push(now);
  requestMap.set(clientIp, validTimestamps);
  next();
};

export default contactRateLimiter;
