import postulacionRepository from '../repositories/postulacionRepository.js';

async function getAllPostulaciones() {
  return await postulacionRepository.getPostulaciones();
}

async function getPostulacionById(id) {
  const postulaciones = await postulacionRepository.getPostulaciones();
  return postulaciones.find(p => p.id === id);
}

async function addPostulacion(postulacion) {
  const postulaciones = await postulacionRepository.getPostulaciones();
  const newId = postulaciones.length > 0 ? Math.max(...postulaciones.map(p => p.id)) + 1 : 1;
  postulacion.id = newId;
  postulaciones.push(postulacion);
  await postulacionRepository.savePostulaciones(postulaciones);
  return postulacion;
}

async function updatePostulacion(id, updatedPostulacion) {
  const postulaciones = await postulacionRepository.getPostulaciones();
  const index = postulaciones.findIndex(p => p.id === id);

  if (index === -1) {
    throw new Error('Postulación no encontrada');
  }

  postulaciones[index] = { ...postulaciones[index], ...updatedPostulacion };
  await postulacionRepository.savePostulaciones(postulaciones);
  return postulaciones[index];
}

async function deletePostulacion(id) {
  const postulaciones = await postulacionRepository.getPostulaciones();
  const filteredPostulaciones = postulaciones.filter(p => p.id !== id);
  
  if (postulaciones.length === filteredPostulaciones.length) {
    throw new Error('Postulación no encontrada');
  }

  await postulacionRepository.savePostulaciones(filteredPostulaciones);
}

export default {
  getAllPostulaciones,
  getPostulacionById,
  addPostulacion,
  updatePostulacion,
  deletePostulacion
};
