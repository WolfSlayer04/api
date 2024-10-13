const applicationMiddleware = (req, res, next) => {
    // 1. Logging de solicitudes con colores
    const reset = "\x1b[0m"; // Reset color
    const green = "\x1b[32m"; // Verde
    const yellow = "\x1b[33m"; // Amarillo
    const red = "\x1b[31m"; // Rojo

    console.log(`[${new Date().toISOString()}] Método: ${req.method}, URL: ${req.url}`);

    // 2. Verificar encabezados comunes
    if (!req.headers['x-auth-token']) {
        console.warn(`${yellow}Advertencia: Falta el encabezado "x-auth-token"${reset}`);
    } else {
        console.log('Encabezado de autenticación presente');
    }

    // 3. Autenticación básica
    const authToken = req.headers['x-auth-token'];
    if (authToken === 'supersecreto') {
        console.log('Autenticación exitosa');
    } else {
        const error = new Error('Token inválido');
        error.status = 401; // Establecer el estado del error
        return next(error); // Pasar el error al middleware de manejo de errores
    }

    // 4. Registrar el tiempo de procesamiento de la solicitud
    const start = Date.now();
    res.on('finish', () => {
        const elapsedTime = Date.now() - start;
        const statusColor = res.statusCode >= 500 ? red : (res.statusCode >= 400 ? yellow : green);

        // Registra el estado en los logs
        if (res.statusCode === 200) {
            console.log(`${green}Exitoso: Tiempo de respuesta: ${elapsedTime} ms${reset} - Estado: ${res.statusCode}`);
        } else {
            console.log(`${statusColor}Tiempo de respuesta: ${elapsedTime} ms - Estado: ${res.statusCode}${reset}`);
        }
    });

    // Continuar con la solicitud
    next();
};

export default applicationMiddleware;
