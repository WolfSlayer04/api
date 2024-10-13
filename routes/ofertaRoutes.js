import express from 'express';
import ofertaController from '../controllers/ofertaController.js';

const router = express.Router();

// Rutas para ofertas
router.get('/', ofertaController.getAllOfertas); // Obtener todas las ofertas
router.get('/:id', ofertaController.getOfertaById); // Obtener oferta por ID
router.post('/', ofertaController.addOferta); // Crear una nueva oferta
router.put('/:id', ofertaController.updateOferta); // Actualizar una oferta
router.delete('/:id', ofertaController.deleteOferta); // Eliminar una oferta

export default router;
