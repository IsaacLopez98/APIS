export const votar = (req, res) => {
    const { opcion } = req.body;
    const votos = req.votos;
  
    if (!opcion || !['opcion1', 'opcion2', 'opcion3'].includes(opcion)) {
      return res.status(400).json({ error: 'Opción no válida' });
    }
  
    votos[opcion]++;
    res.status(200).json({ mensaje: `Voto recibido para ${opcion}` });
  };
  
  export const obtenerResultados = (req, res) => {
    const votos = req.votos;
    res.status(200).json(votos);
  };
  