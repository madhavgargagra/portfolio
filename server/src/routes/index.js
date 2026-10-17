import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import contactRoutes from './contactRoutes.js';

const router = Router();

// Mount API modular routes
router.use('/health', healthRoutes);
router.use('/contact', contactRoutes);

export default router;
