import fs from 'fs-extra';
import Postulacion from '../models/postulacionModel.js';

const filePath = './postulaciones.json';

async function getPostulaciones() {
  try {
    const data = await fs.readJson(filePath);
    return data.map(p => new Postulacion(p.id, p.oferta_id, p.enfermero_id, p.estado));
  } catch (error) {
    console.error(error);
  }
}

async function savePostulaciones(postulaciones) {
  try {
    await fs.writeJson(filePath, postulaciones);
  } catch (error) {
    console.error(error);
  }
}

export default {
  getPostulaciones,
  savePostulaciones
};
