import { Router } from 'express';
import { votar, obtenerResultados } from '../contoladora/controladora.js';

const router = Router();

const votos = {
  opcion1: 0,
  opcion2: 0,
  opcion3: 0,
};


router.use((req, next) => {
  req.votos = votos;
  next();
});

router.post('/votar', votar);
router.get('/resultados', obtenerResultados);

export default router;
