import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../index.css';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const backendUrl = 'http://localhost:4000';

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    const firebaseConfig = {
        apiKey: "AIzaSyD2AghEN8_7BF9wWNezyrDE3MzIr-E6wjM",
        authDomain: "facebook-a8431.firebaseapp.com",
        projectId: "facebook-a8431",
        storageBucket: "facebook-a8431.appspot.com",
        messagingSenderId: "355464869735",
        appId: "1:355464869735:web:96ee0399b79f030c3121c2"
    };

    const auth = initializeApp(firebaseConfig);
    // Crear el proveedor de autenticación de Google
    const provider = new GoogleAuthProvider();

    // Crear el botón de autenticación con Google
    const [error, setError] = useState(null);

    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

return (
    <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign in</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="border rounded-md px-4 py-2 w-full"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="border rounded-md px-4 py-2 w-full"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div className="flex justify-end">
                <Link to="/feed">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </button>
                </Link>
                <Link to="/feed">
                    {error && <p>{error}</p>}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>
                        Sign in with Google
                    </button>
                </Link>
                <Link to="/register">
                    {error && <p>{error}</p>}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>
                        Registro
                    </button>
                </Link>
            </div>
        </form>
    </div>
);
};

export default Login;
