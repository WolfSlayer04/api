import ofertaRepository from '../repositories/ofertaRepository.js';

async function getAllOfertas() {
  return await ofertaRepository.getOfertas();
}

async function getOfertaById(id) {
  const ofertas = await ofertaRepository.getOfertas();
  return ofertas.find(o => o.id === id);
}

async function addOferta(oferta) {
  const ofertas = await ofertaRepository.getOfertas();
  const newId = ofertas.length > 0 ? Math.max(...ofertas.map(o => o.id)) + 1 : 1;
  oferta.id = newId;
  ofertas.push(oferta);
  await ofertaRepository.saveOfertas(ofertas);
  return oferta;
}

async function updateOferta(id, updatedOferta) {
  const ofertas = await ofertaRepository.getOfertas();
  const index = ofertas.findIndex(o => o.id === id);

  if (index === -1) {
    throw new Error('Oferta no encontrada');
  }

  ofertas[index] = { ...ofertas[index], ...updatedOferta };
  await ofertaRepository.saveOfertas(ofertas);
  return ofertas[index];
}

async function deleteOferta(id) {
  const ofertas = await ofertaRepository.getOfertas();
  const filteredOfertas = ofertas.filter(o => o.id !== id);
  
  if (ofertas.length === filteredOfertas.length) {
    throw new Error('Oferta no encontrada');
  }

  await ofertaRepository.saveOfertas(filteredOfertas);
}

export default {
  getAllOfertas,
  getOfertaById,
  addOferta,
  updateOferta,
  deleteOferta
};
