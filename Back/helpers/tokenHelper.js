const jwt = require('jsonwebtoken');

// Función para generar un token JWT
exports.generateToken = (uid, name) => {
    return new Promise((resolve, reject)=>{
        const payload= {uid: uid, name: name}
        jwt.sign(payload, process.env.SECRET_JWT_SEED,{
            expiresIn: '2h',
        },(error, token) => {
            if (error){
                console.log(error);
                reject('No se pudo generar el token');
            }
            resolve(token)
        }
        )
    })

};

// Middleware para verificar un token JWT
exports.verifyToken = (req, res, next) => {
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
