import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./home.jsx";
import Craignometre from "./Craignometre";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/craignometre" element={<Craignometre />} />
            </Routes>
        </Router>
    );
}

export default App;