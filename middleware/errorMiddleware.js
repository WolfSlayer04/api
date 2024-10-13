import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const errorMiddleware = (err, req, res, next) => {
    const reset = "\x1b[0m"; // Reset color
    const green = "\x1b[32m"; // Verde
    const yellow = "\x1b[33m"; // Amarillo
    const red = "\x1b[31m"; // Rojo

    // Loggear el error con detalles
    const errorLogPath = path.join(__dirname, '../logs/errors.log');
    const errorDetails = `
    [${new Date().toISOString()}] Error en la ruta: ${req.url}
    Método: ${req.method}
    Cuerpo de la solicitud: ${JSON.stringify(req.body)}
    Error: ${err.message}
    Stack: ${err.stack}\n`;

    // Registrar el error en un archivo de log
    fs.appendFile(errorLogPath, errorDetails, (fileErr) => {
        if (fileErr) console.error('Error al escribir en el archivo de log:', fileErr);
    });

    // Responder según el tipo de error
    if (err.status === 404) {
        console.log(`${yellow}Error 404: Recurso no encontrado${reset}`);
        return res.status(404).json({ error: 'Recurso no encontrado', message: err.message || 'La ruta solicitada no existe.' });
    } else if (err.status === 401) {
        console.log(`${yellow}Error 401: Acceso no autorizado${reset}`);
        return res.status(401).json({ error: 'Acceso no autorizado', message: err.message || 'No tienes permiso para acceder a este recurso.' });
    }

    // Mostrar un mensaje más detallado si estamos en desarrollo
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment) {
        console.log(`${red}Error 500: Ocurrió un error en el servidor${reset}`);
        return res.status(500).json({
            error: 'Ocurrió un error en el servidor',
            message: err.message,
            stack: err.stack // Incluir el stacktrace para depurar
        });
    }

    // Respuesta más general en producción
    console.log(`${red}Error 500: Ocurrió un error en el servidor${reset}`);
    res.status(500).json({
        error: 'Ocurrió un error en el servidor',
        message: 'Algo salió mal, por favor inténtalo más tarde.'
    });
};

export default errorMiddleware;
