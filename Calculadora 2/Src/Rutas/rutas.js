import express from 'express';
import { convertir } from '../Controladora/controladora.js';

const router = express.Router();

router.post('/convertir', convertir);

export default router;
