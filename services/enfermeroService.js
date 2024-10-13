import enfermeroRepository from '../repositories/enfermeroRepository.js';

async function getAllEnfermeros() {
  return await enfermeroRepository.getEnfermeros();
}

async function getEnfermeroById(id) {
  const enfermeros = await enfermeroRepository.getEnfermeros();
  return enfermeros.find(e => e.id === id);
}

async function addEnfermero(enfermero) {
  const enfermeros = await enfermeroRepository.getEnfermeros();
  const newId = enfermeros.length > 0 ? Math.max(...enfermeros.map(e => e.id)) + 1 : 1;
  enfermero.id = newId;
  enfermeros.push(enfermero);
  await enfermeroRepository.saveEnfermeros(enfermeros);
  return enfermero;
}

async function updateEnfermero(id, updatedEnfermero) {
  const enfermeros = await enfermeroRepository.getEnfermeros();
  const index = enfermeros.findIndex(e => e.id === id);

  if (index === -1) {
    throw new Error('Enfermero no encontrado');
  }

  enfermeros[index] = { ...enfermeros[index], ...updatedEnfermero };
  await enfermeroRepository.saveEnfermeros(enfermeros);
  return enfermeros[index];
}

async function deleteEnfermero(id) {
  const enfermeros = await enfermeroRepository.getEnfermeros();
  const filteredEnfermeros = enfermeros.filter(e => e.id !== id);
  
  if (enfermeros.length === filteredEnfermeros.length) {
    throw new Error('Enfermero no encontrado');
  }

  await enfermeroRepository.saveEnfermeros(filteredEnfermeros);
}

export default {
  getAllEnfermeros,
  getEnfermeroById,
  addEnfermero,
  updateEnfermero,
  deleteEnfermero
};
