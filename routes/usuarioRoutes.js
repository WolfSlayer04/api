import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const router = express.Router();

// Rutas para usuarios
router.get('/', usuarioController.getAllUsuarios); // Obtener todos los usuarios
router.get('/:id', usuarioController.getUsuarioById); // Obtener usuario por ID
router.post('/', usuarioController.addUsuario); // Crear un nuevo usuario
router.put('/:id', usuarioController.updateUsuario); // Actualizar un usuario
router.delete('/:id', usuarioController.deleteUsuario); // Eliminar un usuario

export default router;
