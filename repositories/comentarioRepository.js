import fs from 'fs-extra';
import Comentario from '../models/comentarioModel.js';

const filePath = './comentarios.json';

async function getComentarios() {
  try {
    const data = await fs.readJson(filePath);
    return data.map(c => new Comentario(c.id, c.oferta_id, c.enfermero_id, c.puntuacion, c.comentario));
  } catch (error) {
    console.error(error);
  }
}

async function saveComentarios(comentarios) {
  try {
    await fs.writeJson(filePath, comentarios);
  } catch (error) {
    console.error(error);
  }
}

export default {
  getComentarios,
  saveComentarios
};
