import ofertaService from '../services/ofertaService.js';

async function getAllOfertas(req, res) {
  try {
    const ofertas = await ofertaService.getAllOfertas();
    res.status(200).json(ofertas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOfertaById(req, res) {
  const { id } = req.params;
  try {
    const oferta = await ofertaService.getOfertaById(Number(id));
    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }
    res.status(200).json(oferta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addOferta(req, res) {
  const oferta = req.body;
  try {
    const newOferta = await ofertaService.addOferta(oferta);
    res.status(201).json(newOferta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOferta(req, res) {
  const { id } = req.params;
  const updatedOferta = req.body;
  try {
    const oferta = await ofertaService.updateOferta(Number(id), updatedOferta);
    res.status(200).json(oferta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOferta(req, res) {
  const { id } = req.params;
  try {
    await ofertaService.deleteOferta(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAllOfertas,
  getOfertaById,
  addOferta,
  updateOferta,
  deleteOferta
};
