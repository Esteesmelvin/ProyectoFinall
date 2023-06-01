import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out"
                onClick={handleToggle}
            >
                <span>Perfil</span>
                <svg className="ml-1 h-5 w-5 fill-current text-gray-500" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                        fillRule="evenodd"
                        d="M17 10a7 7 0 11-14 0 7 7 0 0114 0zm-7-9a2 2 0 012 2v1a2 2 0 11-4 0V3a2 2 0 012-2zm-1 13a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-lg z-10">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Mi perfil
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Configuración
                    </a>
                    <li>
                        <Link to= "/"
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Cerrar sesión
                        </Link>
                    </li>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
