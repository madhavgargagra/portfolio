import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validateContact.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

/**
 * @route   POST /api/contact
 * @desc    Submit a portfolio contact message with validation, rate limiting, and MongoDB persistence
 * @access  Public
 */
router.post('/', contactRateLimiter, validateContact, submitContact);

export default router;
