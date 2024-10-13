import fs from 'fs-extra';
import Usuario from '../models/usuarioModel.js';

const filePath = './usuarios.json';

async function getUsuarios() {
  try {
    const data = await fs.readJson(filePath);
    return data.map(u => new Usuario(u.id, u.nombre, u.email, u.contraseña, u.direccion, u.telefono));
  } catch (error) {
    console.error(error);
  }
}

async function saveUsuarios(usuarios) {
  try {
    await fs.writeJson(filePath, usuarios);
  } catch (error) {
    console.error(error);
  }
}

export default {
  getUsuarios,
  saveUsuarios
};
