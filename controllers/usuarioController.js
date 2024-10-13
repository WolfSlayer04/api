import usuarioService from '../services/usuarioService.js';

async function getAllUsuarios(req, res) {
  try {
    const usuarios = await usuarioService.getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUsuarioById(req, res) {
  const { id } = req.params;
  try {
    const usuario = await usuarioService.getUsuarioById(Number(id));
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addUsuario(req, res) {
  const usuario = req.body;
  try {
    const newUsuario = await usuarioService.addUsuario(usuario);
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUsuario(req, res) {
  const { id } = req.params;
  const updatedUsuario = req.body;
  try {
    const usuario = await usuarioService.updateUsuario(Number(id), updatedUsuario);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await usuarioService.deleteUsuario(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default {
  getAllUsuarios,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario
};
