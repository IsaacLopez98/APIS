import { metrosAKilometros, kilometrosAMetros, metrosAMillas, millasAMetros } from '../Calculadora/Calculadora.js';

export const convertir = (req, res) => {
  const { valor, de, a } = req.body;

  let resultado;

  if (de === 'metros' && a === 'kilometros') {
    resultado = metrosAKilometros(valor);
  } else if (de === 'kilometros' && a === 'metros') {
    resultado = kilometrosAMetros(valor);
  } else if (de === 'metros' && a === 'millas') {
    resultado = metrosAMillas(valor);
  } else if (de === 'millas' && a === 'metros') {
    resultado = millasAMetros(valor);
  } else {
    return res.status(400).send({ error: 'Conversión no soportada' });
  }

  res.send({ resultado });
};

