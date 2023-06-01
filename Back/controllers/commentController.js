// Importar modelo y helpers necesarios
const Comment = require('../models/comment');
const Post = require('../models/post');
const { validationResult } = require('express-validator');

// Controlador para crear un nuevo comentario en una publicación
exports.createComment = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { postId, content } = req.body;
        const userId = req.user.id; // Obtener el ID del usuario autenticado

        // Verificar si la publicación existe
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        // Crear un nuevo comentario
        const comment = new Comment({ postId, userId, content });
        await comment.save();

        res.status(201).json(comment);
    } catch (error) {
        console.error('Error al crear el comentario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para obtener todos los comentarios de una publicación
exports.getCommentsByPostId = async (req, res) => {
    try {
        const postId = req.params.id;

        // Verificar si la publicación existe
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        // Obtener todos los comentarios de la publicación
        const comments = await Comment.find({ postId });

        res.json(comments);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para eliminar un comentario por ID
exports.deleteCommentById = async (req, res) => {
    try {
        const commentId = req.params.id;

        // Buscar y eliminar el comentario por ID
        const comment = await Comment.findByIdAndDelete(commentId);

        if (!comment) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        res.json({ message: 'Comentario eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el comentario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};
