import express from 'express';
import { convertir } from '../control/control.js';

const router = express.Router();

router.post('/convertor', convertir);

export default router;
