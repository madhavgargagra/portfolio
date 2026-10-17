import mongoose from 'mongoose';

/**
 * Contact Message Mongoose Schema
 * 
 * Defines persistence schema for contact inquiries submitted through the portfolio.
 * Includes field-level validation, length constraints, sanitization trims, and timestamps.
 */
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Sender name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      maxlength: [254, 'Email address cannot exceed 254 characters'],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address format (e.g., name@domain.com)',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters long'],
      maxlength: [3000, 'Message cannot exceed 3000 characters'],
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
    versionKey: false,
  }
);

// Helpful index on createdAt for sorting inquiries chronologically
contactSchema.index({ createdAt: -1 });

export const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
