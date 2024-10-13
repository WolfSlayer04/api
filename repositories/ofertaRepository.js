import fs from 'fs-extra';
import Oferta from '../models/ofertaModel.js';

const filePath = './ofertas.json';

async function getOfertas() {
  try {
    const data = await fs.readJson(filePath);
    return data.map(o => new Oferta(o.id, o.usuario_id, o.titulo, o.descripcion, o.tipo_cuidado, o.ubicacion, o.horario, o.salario, o.estado));
  } catch (error) {
    console.error(error);
  }
}

async function saveOfertas(ofertas) {
  try {
    await fs.writeJson(filePath, ofertas);
  } catch (error) {
    console.error(error);
  }
}

export default {
  getOfertas,
  saveOfertas
};
