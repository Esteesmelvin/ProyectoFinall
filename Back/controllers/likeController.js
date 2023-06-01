// Importar modelo y helpers necesarios
const Like = require('../models/like');
const Post = require('../models/post');

// Controlador para dar like a una publicación
exports.likePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user.id; // Obtener el ID del usuario autenticado

        // Verificar si la publicación existe
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        // Verificar si el usuario ya ha dado like a la publicación
        const existingLike = await Like.findOne({ postId, userId });
        if (existingLike) {
            return res.status(400).json({ error: 'El usuario ya ha dado like a esta publicación' });
        }

        // Crear un nuevo like
        const like = new Like({ postId, userId });
        await like.save();

        res.status(201).json(like);
    } catch (error) {
        console.error('Error al dar like a la publicación:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

// Controlador para quitar el like de una publicación
exports.unlikePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user.id; // Obtener el ID del usuario autenticado

        // Verificar si la publicación existe
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        // Buscar y eliminar el like correspondiente
        const like = await Like.findOneAndDelete({ postId, userId });

        if (!like) {
            return res.status(404).json({ error: 'El usuario no ha dado like a esta publicación' });
        }

        res.json({ message: 'Like eliminado con éxito' });
    } catch (error) {
        console.error('Error al quitar el like de la publicación:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};
