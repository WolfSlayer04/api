import usuarioRepository from '../repositories/usuarioRepository.js';

async function getAllUsuarios() {
  return await usuarioRepository.getUsuarios();
}

async function getUsuarioById(id) {
  const usuarios = await usuarioRepository.getUsuarios();
  return usuarios.find(u => u.id === id);
}

async function addUsuario(usuario) {
  const usuarios = await usuarioRepository.getUsuarios();
  const newId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
  usuario.id = newId;
  usuarios.push(usuario);
  await usuarioRepository.saveUsuarios(usuarios);
  return usuario;
}

async function updateUsuario(id, updatedUsuario) {
  const usuarios = await usuarioRepository.getUsuarios();
  const index = usuarios.findIndex(u => u.id === id);

  if (index === -1) {
    throw new Error('Usuario no encontrado');
  }

  usuarios[index] = { ...usuarios[index], ...updatedUsuario };
  await usuarioRepository.saveUsuarios(usuarios);
  return usuarios[index];
}

async function deleteUsuario(id) {
  const usuarios = await usuarioRepository.getUsuarios();
  const filteredUsuarios = usuarios.filter(u => u.id !== id);
  
  if (usuarios.length === filteredUsuarios.length) {
    throw new Error('Usuario no encontrado');
  }

  await usuarioRepository.saveUsuarios(filteredUsuarios);
}

export default {
  getAllUsuarios,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario
};
