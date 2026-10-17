/**
 * Contact Form Request Validation and Sanitization Middleware
 * 
 * Enforces robust server-side validation on name, email, and message.
 * Normalizes input, strips dangerous control characters, and returns
 * structured, field-specific error messages.
 */

// Standard RFC 5322-compliant email pattern
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const validateContact = (req, res, next) => {
  // Ensure body exists and is an object
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({
      success: false,
      error: 'Invalid Request Payload',
      message: 'Request body must be a valid JSON object.',
    });
  }

  let { name, email, message } = req.body;
  const errors = {};

  // 1. Sanitize & Validate Name
  if (name === undefined || name === null || typeof name !== 'string') {
    errors.name = 'Name is required and must be text.';
  } else {
    // Strip control characters & trim
    name = name.replace(/[\u0000-\u001F\u007F-\u009F]/g, '').trim();
    if (name.length < 2) {
      errors.name = 'Name must be at least 2 characters long.';
    } else if (name.length > 100) {
      errors.name = 'Name cannot exceed 100 characters.';
    } else if (!/[\p{L}\p{N}]/u.test(name)) {
      errors.name = 'Name must contain alphanumeric characters.';
    }
  }

  // 2. Sanitize & Validate Email
  if (email === undefined || email === null || typeof email !== 'string') {
    errors.email = 'Email address is required.';
  } else {
    email = email.trim().toLowerCase();
    if (email.length === 0) {
      errors.email = 'Email address is required.';
    } else if (email.length > 254) {
      errors.email = 'Email address cannot exceed 254 characters.';
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
  }

  // 3. Sanitize & Validate Message
  if (message === undefined || message === null || typeof message !== 'string') {
    errors.message = 'Message content is required and must be text.';
  } else {
    // Preserve intentional newlines, remove null bytes & trailing spaces
    message = message.replace(/\0/g, '').trim();
    if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    } else if (message.length > 3000) {
      errors.message = 'Message cannot exceed 3000 characters.';
    }
  }

  // If validation errors exist, halt and return 400 Bad Request
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Please resolve the highlighted validation errors.',
      errors,
    });
  }

  // Store normalized values back into request body for controller
  req.body.name = name;
  req.body.email = email;
  req.body.message = message;

  next();
};

export default validateContact;
