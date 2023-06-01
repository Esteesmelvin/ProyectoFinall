const jwt = require('jsonwebtoken');

// Middleware de autenticación
exports.authMiddleware = (req, res, next) => {
    // Obtener el token del encabezado de autorización
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    try {
        // Verificar y decodificar el token
        const decoded = jwt.verify(token, 'mySecretKey');
        req.user = decoded; // Almacenar el payload decodificado en el objeto de solicitud
        next(); // Continuar con la siguiente función de middleware
    } catch (error) {
        console.error('Error al verificar el token:', error);
        res.status(401).json({ error: 'Token inválido' });
    }
};
