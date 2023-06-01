const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tu_correo@gmail.com', // Correo electrónico desde el que se enviarán los correos
        pass: 'tu_contraseña', // Contraseña del correo electrónico
    },
});

// Función para enviar un correo electrónico
exports.sendEmail = async (to, subject, message) => {
    try {
        // Configuración del correo electrónico
        const mailOptions = {
            from: 'tu_correo@gmail.com',
            to,
            subject,
            text: message,
        };

        // Enviar el correo electrónico
        await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado correctamente');
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }
};
