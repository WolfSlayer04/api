import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importa CORS para permitir solicitudes entre diferentes orígenes
import comentarioRoutes from './routes/comentarioRoutes.js';
import enfermeroRoutes from './routes/enfermeroRoutes.js';
import ofertaRoutes from './routes/ofertaRoutes.js';
import postulacionRoutes from './routes/postulacionRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import applicationMiddleware from './middleware/applicationMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';

const app = express();

// Habilitar CORS para permitir solicitudes entre diferentes dominios
app.use(cors());

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Aplicar middleware de aplicación
app.use(applicationMiddleware);

// Definir las rutas
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/enfermeros', enfermeroRoutes);
app.use('/api/ofertas', ofertaRoutes);
app.use('/api/postulaciones', postulacionRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Manejo de errores
app.use(errorMiddleware);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
