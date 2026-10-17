import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FoundationPage from './pages/FoundationPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FoundationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
