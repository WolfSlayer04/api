import postulacionService from '../services/postulacionService.js';

async function getAllPostulaciones(req, res) {
  try {
    const postulaciones = await postulacionService.getAllPostulaciones();
    res.status(200).json(postulaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPostulacionById(req, res) {
  const { id } = req.params;
  try {
    const postulacion = await postulacionService.getPostulacionById(Number(id));
    if (!postulacion) {
      return res.status(404).json({ message: 'Postulación no encontrada' });
    }
    res.status(200).json(postulacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addPostulacion(req, res) {
  const postulacion = req.body;
  try {
    const newPostulacion = await postulacionService.addPostulacion(postulacion);
    res.status(201).json(newPostulacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updatePostulacion(req, res) {
  const { id } = req.params;
  const updatedPostulacion = req.body;
  try {
    const postulacion = await postulacionService.updatePostulacion(Number(id), updatedPostulacion);
    res.status(200).json(postulacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePostulacion(req, res) {
  const { id } = req.params;
  try {
    await postulacionService.deletePostulacion(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAllPostulaciones,
  getPostulacionById,
  addPostulacion,
  updatePostulacion,
  deletePostulacion
};
