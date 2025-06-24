import React from "react";
import Header from "./components/Header/Header.jsx";
import Map from "./map.jsx";

function Craignometre() {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <Header />
            <Map />
        </div>
    );
}

export default Craignometre;