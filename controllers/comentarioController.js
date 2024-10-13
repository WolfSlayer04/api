import comentarioService from '../services/comentarioService.js';


async function getAllComentarios(req, res) {
  try {
    const comentarios = await comentarioService.getAllComentarios();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getComentarioById(req, res) {
  const { id } = req.params;
  try {
    const comentario = await comentarioService.getComentarioById(Number(id));
    if (!comentario) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    res.status(200).json(comentario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addComentario(req, res) {
  const comentario = req.body;
  try {
    const newComentario = await comentarioService.addComentario(comentario);
    res.status(201).json(newComentario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateComentario(req, res) {
  const { id } = req.params;
  const updatedComentario = req.body;
  try {
    const comentario = await comentarioService.updateComentario(Number(id), updatedComentario);
    res.status(200).json(comentario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteComentario(req, res) {
  const { id } = req.params;
  try {
    await comentarioService.deleteComentario(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAllComentarios,
  getComentarioById,
  addComentario,
  updateComentario,
  deleteComentario
};
