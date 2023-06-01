import React from "react";

const StoriesReels = () => {
    // Datos de ejemplo de historias y reels
    const stories = [
        { id: 1, user: "Usuario1", imgSrc: "https://www.pixelstalk.net/wp-content/uploads/2016/08/1080-x-1920-Image-Vertical-HD.jpg" },
        { id: 2, user: "Usuario2", imgSrc: "https://via.placeholder.com/1080x1920" },
        { id: 3, user: "Usuario3", imgSrc: "https://via.placeholder.com/1080x1920" },
        // Agregar más historias aquí
    ];

    const reels = [
        { id: 1, user: "Usuario4", imgSrc: "https://wallpaperslinks.com/wp-content/uploads/2020/07/lotus-flower-digital-art-4k-zd-1080x1920-1-1.jpg" },
        { id: 2, user: "Usuario5", imgSrc: "https://via.placeholder.com/1080x1920" },
        { id: 3, user: "Usuario6", imgSrc: "https://via.placeholder.com/1080x1920" },
        // Agregar más reels aquí
    ];

    const [showContent, setShowContent] = React.useState("stories");

    const handleShowStories = () => {
        setShowContent("stories");
    };

    const handleShowReels = () => {
        setShowContent("reels");
    };
    return (
        <div className="flex flex-col bg-gray-900 text-white h-15 w-2">
            <div className="flex-row items-center justify-between text-white px-4">
                <h2 className="text-xl font-bold">{showContent === "stories" ? "Historias" : "Reels"}</h2>
                <div className="flex items-center space-x-2">
                    <button
                        className={`text-white bg-blue-500 px-4 py-2 rounded ${
                            showContent === "stories" ? "bg-blue-500" : "bg-gray-600"
                        }`}
                        onClick={handleShowStories}
                    >
                        Historias
                    </button>
                    <button
                        className={`text-white bg-blue-500 px-4 py-2 rounded ${
                            showContent === "reels" ? "bg-blue-500" : "bg-gray-600"
                        }`}
                        onClick={handleShowReels}
                    >
                        Reels
                    </button>
                </div>
            </div>
            {showContent === "stories" && (
                <div className="flex items-center space-x-2 mt-4 p-4">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full overflow-hidden"
                        >
                            <img
                                src={story.imgSrc}
                                alt={`Historia de ${story.user}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            {showContent === "reels" && (
                <div className="flex items-center space-x-2 mt-4 p-4">
                    {reels.map((reel) => (
                        <div
                            key={reel.id}
                            className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full overflow-hidden"
                        >
                            <img
                                src={reel.imgSrc}
                                alt={`Reel de ${reel.user}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default StoriesReels;
