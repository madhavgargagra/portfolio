/**
 * Contact API Service
 * 
 * Interacts with the backend Express REST API at POST /api/contact.
 * Handles network connectivity errors, HTTP status code translation,
 * and structured payload formatting.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function sendContactMessage({ name, email, message }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success) {
      return {
        success: true,
        status: response.status,
        message: data.message || 'Message sent successfully.',
        data: data.data,
      };
    }

    return {
      success: false,
      status: response.status,
      error: data?.error || 'Submission Failed',
      message: data?.message || 'Server rejected the submission.',
      errors: data?.errors || null,
      code: data?.code || null,
    };
  } catch (networkError) {
    console.error('[contactService] Network error during submission:', networkError);
    return {
      success: false,
      status: 0,
      error: 'Network Failure',
      message: 'Unable to connect to the backend server. Please verify your internet connection or ensure the Express API is running at http://localhost:5000.',
      code: 'NETWORK_ERROR',
    };
  }
}
