const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// Creación del modelo de usuario
module.exports = mongoose.model('User', userSchema);
