import React from "react";
import Header from "./components/Header/Header";

function Home() {
    return (
        <div className="h-screen bg-gray-100 text-black flex flex-col">
            <Header />
            <div className="flex flex-col justify-center items-center flex-grow">
                <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre Craignomètre</h1>
                <p className="text-lg">Faut expliquer ce qu'est le site !</p>
            </div>
        </div>
    );
}

export default Home;