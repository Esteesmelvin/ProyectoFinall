import { useState } from "react";

const CreatePost = () => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Contenido del post:", content);
        console.log("Imagen:", image);
        setContent("");
        setImage(null);
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full h-32 p-2 mb-4 text-lg border border-gray-400 rounded-lg resize-none"
                        placeholder="¿En qué estás pensando?"
                        value={content}
                        onChange={handleContentChange}
                    />
                    <div className="flex items-center justify-between mb-4">
                        <label className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            <span className="ml-2 text-blue-500">{image ? "Cambiar imagen" : "Seleccionar archivo"}</span>
                            <input type="file" className="hidden" accept=".png,.jpg,.jpeg" onChange={handleImageChange} />
                        </label>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                            disabled={!content}
                        >
                            Publicar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
