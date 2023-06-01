const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para dar like a una publicación
router.post('/likes/:postId', authMiddleware.authenticate, likeController.likePost);

// Ruta para quitar el like a una publicación
router.delete('/likes/:postId', authMiddleware.authenticate, likeController.unlikePost);

module.exports = router;
