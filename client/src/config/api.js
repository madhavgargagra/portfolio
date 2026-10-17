/**
 * Centralized API & Asset Configuration
 * 
 * Supports both split deployments (e.g., Vercel client + Render backend)
 * and unified monolithic deployments (Express serving static Vite client build).
 * 
 * Resolution order for API Base URL:
 * 1. import.meta.env.VITE_API_BASE_URL (Production environment override for split deployments)
 * 2. import.meta.env.VITE_API_URL (Alternative Vite environment variable)
 * 3. Default: '' (Empty string for relative, same-origin paths)
 *    - In production: Express serves client bundle and static assets from same origin.
 *    - In development: Vite proxy forwards /api and /public requests to the backend server.
 */

const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : (typeof process !== 'undefined' && process.env ? process.env : {});

export const API_BASE_URL =
  env.VITE_API_BASE_URL ||
  env.VITE_API_URL ||
  '';

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
