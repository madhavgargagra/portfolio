import { Contact } from '../models/Contact.js';
import { isDbConnected } from '../config/db.js';

/**
 * Contact Controller
 * Handles receiving, persisting, and responding to contact form submissions.
 */

export const submitContact = async (req, res, next) => {
  try {
    // 1. Verify that MongoDB is currently connected and ready to write
    if (!isDbConnected()) {
      return res.status(503).json({
        success: false,
        error: 'Database Service Unavailable',
        message: 'The message service is temporarily offline because the database is currently unreachable. Your message was not saved. Please try again shortly or contact Madhav directly via email.',
        code: 'DB_UNAVAILABLE',
      });
    }

    const { name, email, message } = req.body;

    // 2. Instantiate and persist the contact document
    const contactDoc = new Contact({
      name,
      email,
      message,
    });

    const savedRecord = await contactDoc.save();

    // 3. Log operational confirmation (excluding raw message contents for privacy)
    console.log(`[Contact API] Stored inquiry from: ${savedRecord.email} (Record ID: ${savedRecord._id})`);

    // 4. Return structured 201 Created response
    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received and saved successfully.',
      data: {
        id: savedRecord._id,
        name: savedRecord.name,
        email: savedRecord.email,
        createdAt: savedRecord.createdAt,
      },
    });
  } catch (err) {
    // Handle Mongoose validation errors if any bypassed middleware
    if (err.name === 'ValidationError') {
      const fieldErrors = {};
      for (const field in err.errors) {
        fieldErrors[field] = err.errors[field].message;
      }
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Database schema validation failed.',
        errors: fieldErrors,
      });
    }

    // Pass generic errors to global error handler without exposing internals
    console.error('[Contact API] Persistence error occurred:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to process your message due to an unexpected server condition.',
    });
  }
};
