// Middleware para manejar el enrutamiento específico
const routingMiddleware = (req, res, next) => {
    // Log de la URL y el método de la solicitud
    console.log(`Enrutando a ${req.method} ${req.url}`);

    // Manejo de rutas no definidas
    const validRoutes = [
        '/api/usuarios',
        '/api/enfermeros',
        '/api/ofertas',
        '/api/postulaciones'
    ];
    
    const validRoutePattern = /^\/api\/usuarios\/\d+$/; // Acepta rutas de usuarios con ID
    
    // Verifica si la ruta solicitada es válida
    if (!validRoutes.includes(req.path) && !validRoutePattern.test(req.path)) {
        const error = new Error('Ruta no encontrada');
        error.status = 404; // Establece el estado 404
        return next(error); // Llama al siguiente middleware de error
    }
    
    // Continuar con la siguiente función de middleware
    next();
};

export default routingMiddleware;
