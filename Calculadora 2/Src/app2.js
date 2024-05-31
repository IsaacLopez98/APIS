import express from 'express';
import rutas from './Rutas/rutas.js';

const app = express();

app.use(express.json());
app.use('/api', rutas);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Ez`);
});
