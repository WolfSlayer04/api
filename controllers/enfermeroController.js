import enfermeroService from '../services/enfermeroService.js';

async function getAllEnfermeros(req, res) {
  try {
    const enfermeros = await enfermeroService.getAllEnfermeros();
    res.status(200).json(enfermeros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getEnfermeroById(req, res) {
  const { id } = req.params;
  try {
    const enfermero = await enfermeroService.getEnfermeroById(Number(id));
    if (!enfermero) {
      return res.status(404).json({ message: 'Enfermero no encontrado' });
    }
    res.status(200).json(enfermero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addEnfermero(req, res) {
  const enfermero = req.body;
  try {
    const newEnfermero = await enfermeroService.addEnfermero(enfermero);
    res.status(201).json(newEnfermero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateEnfermero(req, res) {
  const { id } = req.params;
  const updatedEnfermero = req.body;
  try {
    const enfermero = await enfermeroService.updateEnfermero(Number(id), updatedEnfermero);
    res.status(200).json(enfermero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteEnfermero(req, res) {
  const { id } = req.params;
  try {
    await enfermeroService.deleteEnfermero(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAllEnfermeros,
  getEnfermeroById,
  addEnfermero,
  updateEnfermero,
  deleteEnfermero
};
