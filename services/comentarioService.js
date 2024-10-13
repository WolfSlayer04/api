import comentarioRepository from '../repositories/comentarioRepository.js';

async function getAllComentarios() {
  return await comentarioRepository.getComentarios();
}

async function getComentarioById(id) {
  const comentarios = await comentarioRepository.getComentarios();
  return comentarios.find(c => c.id === id);
}

async function addComentario(comentario) {
  const comentarios = await comentarioRepository.getComentarios();
  const newId = comentarios.length > 0 ? Math.max(...comentarios.map(c => c.id)) + 1 : 1;
  comentario.id = newId;
  comentarios.push(comentario);
  await comentarioRepository.saveComentarios(comentarios);
  return comentario;
}

async function updateComentario(id, updatedComentario) {
  const comentarios = await comentarioRepository.getComentarios();
  const index = comentarios.findIndex(c => c.id === id);
  
  if (index === -1) {
    throw new Error('Comentario no encontrado');
  }

  comentarios[index] = { ...comentarios[index], ...updatedComentario };
  await comentarioRepository.saveComentarios(comentarios);
  return comentarios[index];
}

async function deleteComentario(id) {
  const comentarios = await comentarioRepository.getComentarios();
  const filteredComentarios = comentarios.filter(c => c.id !== id);
  
  if (comentarios.length === filteredComentarios.length) {
    throw new Error('Comentario no encontrado');
  }

  await comentarioRepository.saveComentarios(filteredComentarios);
}

export default {
  getAllComentarios,
  getComentarioById,
  addComentario,
  updateComentario,
  deleteComentario
};
