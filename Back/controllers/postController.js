// Importar modelo y helpers necesarios
const Post = require('../models/post');
const { validationResult } = require('express-validator');

// Controlador para crear una nueva publicación
exports.createPost = async (req, res) => {
    // Validar los datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, content } = req.body;
        const userId = req.user.id; // Obtener el ID del usuario autenticado

        // Crear una nueva publicación
        const post = new Post({ title, content, userId });
        await post.save();

        res.status(201).json(post);
    } catch (error) {
        console.error('Error al crear la publicación:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para obtener todas las publicaciones
exports.getAllPosts = async (req, res) => {
    try {
        // Obtener todas las publicaciones
        const posts = await Post.find();

        res.json(posts);
    } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para obtener una publicación por ID
exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.id;

        // Buscar la publicación por ID
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        res.json(post);
    } catch (error) {
        console.error('Error al obtener la publicación:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para eliminar una publicación por ID
exports.deletePostById = async (req, res) => {
    try {
        const postId = req.params.id;

        // Buscar y eliminar la publicación por ID
        const post = await Post.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        res.json({ message: 'Publicación eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la publicación:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};
