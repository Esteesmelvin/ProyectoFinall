const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para crear un nuevo comentario
router.post('/comments', authMiddleware.authenticate, commentController.createComment);

// Ruta para obtener todos los comentarios de una publicación
router.get('/comments/:postId', commentController.getCommentsByPost);

// Ruta para eliminar un comentario
router.delete('/comments/:commentId', authMiddleware.authenticate, commentController.deleteComment);

module.exports = router;
