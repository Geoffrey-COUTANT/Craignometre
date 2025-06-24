import React from "react";
import Header from "./components/Header/Header"
import Background from "./assets/background.png";

function Home() {
    return (
        <div className="h-screen bg-gray-100 text-black flex flex-col bg-cover" style={{ backgroundImage: `url(${Background})` }} >
            <Header />
            <div className="flex flex-col justify-center items-center flex-grow">
                <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre "Craignomètre"</h1>
                <p className="text-lg">Prototype de carte d’identification des communes les moins sécuritaires.</p>
            </div>
        </div>
    );
}

export default Home;