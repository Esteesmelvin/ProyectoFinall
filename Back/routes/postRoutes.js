const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para crear una nueva publicación
router.post('/posts', authMiddleware.authenticate, postController.createPost);

// Ruta para obtener todas las publicaciones
router.get('/posts', postController.getAllPosts);

// Ruta para obtener una publicación por ID
router.get('/posts/:postId', postController.getPostById);

// Ruta para actualizar una publicación
router.put('/posts/:postId', authMiddleware.authenticate, postController.updatePost);

// Ruta para eliminar una publicación
router.delete('/posts/:postId', authMiddleware.authenticate, postController.deletePost);

module.exports = router;
