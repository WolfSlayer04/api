import fs from 'fs-extra';
import Enfermero from '../models/enfermeroModel.js';

const filePath = './enfermeros.json';

async function getEnfermeros() {
  try {
    const data = await fs.readJson(filePath);
    return data.map(e => new Enfermero(e.id, e.nombre, e.email, e.certificaciones, e.experiencia, e.telefono, e.especialidad));
  } catch (error) {
    console.error(error);
    return []; // Devolver un array vacío si ocurre un error
  }
}

async function saveEnfermeros(enfermeros) {
  try {
    await fs.writeJson(filePath, enfermeros);
  } catch (error) {
    console.error(error);
  }
}

export default {
  getEnfermeros,
  saveEnfermeros
};
