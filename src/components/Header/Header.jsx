import { Link, useLocation } from "react-router-dom";
import React from "react";


function home() {
    const location = useLocation();
    const current = location.pathname;

    const linkClass = (path) =>
        `px-4 py-2 rounded-md text-white hover:bg-blue-600 transition ${
            current === path ? "bg-blue-600 font-bold" : "bg-blue-500"
        }`;

    return (
        <nav className="w-full p-4 shadow-md flex justify-between items-center">
            <img src="/src/assets/craignometre.png" alt="Logo" className="h-16" />
            <div className="flex space-x-4">
                <Link to="/" className={linkClass("/")}>
                    Accueil
                </Link>
                <Link to="/craignometre" className={linkClass("/craignometre")}>
                    Craignomètre
                </Link>
            </div>
        </nav>
    );
}

export default home;