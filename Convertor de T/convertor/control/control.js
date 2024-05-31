import {
     celsiusAFahrenheit,
     celsiusAKelvin,
     fahrenheitACelsius,
     fahrenheitAKelvin,
     kelvinACelsius,
     kelvinAFahrenheit
   } from '../calcular/calcular.js';
   
   export const convertir = (req, res) => {
     const { valor, de, a } = req.body;
   
     let resultado;
   
     if (de === 'celsius' && a === 'fahrenheit') {
       resultado = celsiusAFahrenheit(valor);
     } else if (de === 'celsius' && a === 'kelvin') {
       resultado = celsiusAKelvin(valor);
     } else if (de === 'fahrenheit' && a === 'celsius') {
       resultado = fahrenheitACelsius(valor);
     } else if (de === 'fahrenheit' && a === 'kelvin') {
       resultado = fahrenheitAKelvin(valor);
     } else if (de === 'kelvin' && a === 'celsius') {
       resultado = kelvinACelsius(valor);
     } else if (de === 'kelvin' && a === 'fahrenheit') {
       resultado = kelvinAFahrenheit(valor);
     } else {
       return res.status(400).send({ error: 'Conversión no soportada' });
     }
   
     res.send({ resultado });
   };
   