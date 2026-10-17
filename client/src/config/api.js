/**
 * Centralized API & Asset Configuration
 * 
 * Supports both split deployments (e.g., Vercel client + Render backend)
 * and unified monolithic deployments (Express serving static Vite client build).
 * 
 * Resolution order for API Base URL:
 * 1. import.meta.env.VITE_API_BASE_URL (Production environment override)
 * 2. import.meta.env.VITE_API_URL (Alternative Vite environment variable)
 * 3. In production mode (import.meta.env.PROD): '' (Empty string for relative, same-origin paths)
 * 4. In development mode: 'http://localhost:5000' (Default local Express port)
 */

export const API_BASE_URL = 
  import.meta.env.VITE_API_BASE_URL || 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD ? '' : 'http://localhost:5000');

export const getApiUrl = (endpoint = '') => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

export const API_ENDPOINTS = {
  health: getApiUrl('/api/health'),
  contact: getApiUrl('/api/contact'),
  resumePdf: getApiUrl('/public/resumes/madhav-garg-resume.pdf'),
  resumeDocx: getApiUrl('/public/resumes/madhav-garg-resume.docx'),
};
