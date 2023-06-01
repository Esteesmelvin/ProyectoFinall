// Middleware de validación
exports.validationMiddleware = (req, res, next) => {
    // Realizar la validación de los datos en req.body
    // Aquí puedes utilizar una biblioteca de validación como Joi, Yup, Validator.js, etc.

    // Ejemplo de validación utilizando la biblioteca Validator.js
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Continuar con la siguiente función de middleware si la validación pasa
    next();
};
