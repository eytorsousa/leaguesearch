import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./home.js";
import Summoner from "./summoner.js";

export default function App(){

    return (    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/summoner" element={<Summoner />} />
            </Routes>
        </BrowserRouter>
    ); 
}