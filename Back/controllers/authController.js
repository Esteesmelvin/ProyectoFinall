// Importar modelos y helpers necesarios
const User = require('../models/user');
const tokenHelper = require('../helpers/tokenHelper');

// Controlador para el registro de usuarios
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log(req.body)

        // Verificar si ya existe un usuario con el mismo correo electrónico
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
        }

        // Crear un nuevo usuario
        const user = new User({ name, email, password });
        await user.save();

        // Generar un token de autenticación
        const token = await tokenHelper.generateToken(user);

        // Enviar la respuesta con el token y la información del usuario
        res.status(201).json({ token, user: { name, email } });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para el inicio de sesión
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar las credenciales del usuario
        const user = await User.findOne({ email });
        if (!user || !user.comparePassword(password)) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar un token de autenticación
        const token = tokenHelper.generateToken(user._id);

        // Enviar la respuesta con el token y la información del usuario
        res.json({ token, user: { username: user.username, email } });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};
