import express from 'express';
import votos from './votos/votos.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/votos', votos);

app.listen(PORT, () => {
  console.log(`Servidor ezzzzzzzz http://localhost:${PORT}`);
});
