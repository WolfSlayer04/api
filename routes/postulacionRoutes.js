import express from 'express';
import postulacionController from '../controllers/postulacionController.js';

const router = express.Router();

// Rutas para postulaciones
router.get('/', postulacionController.getAllPostulaciones); // Obtener todas las postulaciones
router.get('/:id', postulacionController.getPostulacionById); // Obtener postulacion por ID
router.post('/', postulacionController.addPostulacion); // Crear una nueva postulacion
router.put('/:id', postulacionController.updatePostulacion); // Actualizar una postulacion
router.delete('/:id', postulacionController.deletePostulacion); // Eliminar una postulacion

export default router;
