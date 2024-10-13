import express from 'express';
import comentarioController from '../controllers/comentarioController.js';

const router = express.Router();

// Rutas para comentarios
router.get('/', comentarioController.getAllComentarios); // Obtener todos los comentarios
router.get('/:id', comentarioController.getComentarioById); // Obtener comentario por ID
router.post('/', comentarioController.addComentario); // Crear un nuevo comentario
router.put('/:id', comentarioController.updateComentario); // Actualizar un comentario
router.delete('/:id', comentarioController.deleteComentario); // Eliminar un comentario

export default router;
