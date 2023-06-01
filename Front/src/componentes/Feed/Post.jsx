import React, { useState } from 'react';
import '../../styles/Post.css';

const Post = ({ post, handleLike, handleComment }) => {
    // Componente para mostrar un post individual
    const [isLiked, setIsLiked] = useState(false); // Estado para el botón de like
    const [comment, setComment] = useState(''); // Estado para el comentario

    const handleLikeClick = () => {
        setIsLiked(!isLiked); // Cambiar el estado de like al hacer clic en el botón
        handleLike(post.id); // Llamar a la función de manejo de like pasando el ID del post
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value); // Actualizar el estado de comentario al escribir en el input
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault(); // Evitar la recarga de la página al enviar el formulario
        handleComment(post.id, comment); // Llamar a la función de manejo de comentario pasando el ID del post y el comentario
        setComment(''); // Limpiar el input de comentario
    };

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center">
                <img className="h-10 w-10 rounded-full" src={post.userProfilePic} alt="Foto de perfil" />
                <h3 className="ml-2 font-bold">{post.username}</h3>
            </div>
            <img className="mt-4 object-cover w-full h-60 rounded-md" src={post.pic} alt="Foto del post" />
            <div className="flex justify-between mt-4">
                <button
                    className={`px-3 py-2 rounded-md font-medium focus:outline-none ${isLiked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                        }`}
                    onClick={handleLikeClick}
                >
                    {isLiked ? 'Liked' : 'Like'}
                </button>
                <form className="flex flex-1 ml-4" onSubmit={handleCommentSubmit}>
                    <input
                        className="flex-1 px-3 py-2 rounded-md focus:outline-none"
                        type="text"
                        placeholder="Escribe un comentario..."
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <button
                        className="px-3 py-2 ml-2 bg-blue-500 text-white font-medium rounded-md focus:outline-none"
                        type="submit"
                    >
                        Comentar
                    </button>
                </form>
            </div>
        </div>
    );
};


const FeedPost = () => {
    // Componente para mostrar el feed de fotos con posts
    const [posts, setPosts] = useState([
        {
            id: 1,
            userProfilePic: 'https://via.placeholder.com/50',
            username: 'Usuario 1',
            pic: 'https://via.placeholder.com/300',
            likes: 0,
            comments: []
        },
        {
            id: 2,
            userProfilePic: 'https://via.placeholder.com/50',
            username: 'Usuario 2',
            pic: 'https://via.placeholder.com/300',
            likes: 0,
            comments: []
        },
        {
            id: 3,
            userProfilePic: 'https://via.placeholder.com/50',
            username: 'Usuario 3',
            pic: 'https://via.placeholder.com/300',
            likes: 0,
            comments: []
        },
        {
            id: 4,
            userProfilePic: 'https://via.placeholder.com/50',
            username: 'Usuario 4',
            pic: 'https://via.placeholder.com/300',
            likes: 0,
            comments: []
        },
        {
            id: 5,
            userProfilePic: 'https://via.placeholder.com/50',
            username: 'Usuario 5',
            pic: 'https://via.placeholder.com/300',
            likes: 0,
            comments: []
        }
    ]);

    const handleLike = (postId) => {
        // Función para manejar el evento de dar like a un post
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return { ...post, likes: post.likes + 1 }; // Actualizar el número de likes del post específico
            }
            return post;
        });
        setPosts(updatedPosts); // Actualizar el estado de posts con los likes actualizados
    };

    const handleComment = (postId, comment) => {
        // Función para manejar el evento de comentar en un post
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return { ...post, comments: [...post.comments, comment] }; // Agregar el comentario al post específico
            }
            return post;
        });
        setPosts(updatedPosts); // Actualizar el estado de posts con los comentarios actualizados
    };

    return (
        <div className="feed">
            <div className="feed-post">
                {posts.map((post) => (
                    <div key={post.id} className='bg-white shadow rounded-lg p-4 mb-4'>
                        {/* Aplica el fondo de color y otros estilos */}
                        <Post
                            post={post}
                            handleLike={handleLike}
                            handleComment={handleComment}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedPost;
