import express from 'express';
import enfermeroController from '../controllers/enfermeroController.js';

const router = express.Router();

// Rutas para enfermeros
router.get('/', enfermeroController.getAllEnfermeros); // Obtener todos los enfermeros
router.get('/:id', enfermeroController.getEnfermeroById); // Obtener enfermero por ID
router.post('/', enfermeroController.addEnfermero); // Crear un nuevo enfermero
router.put('/:id', enfermeroController.updateEnfermero); // Actualizar un enfermero
router.delete('/:id', enfermeroController.deleteEnfermero); // Eliminar un enfermero

export default router;
