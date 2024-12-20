import { Route, Routes } from "react-router-dom"; // Não precisamos de BrowserRouter aqui

import Home from "./home.js";
import Summoner from "./summoner.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summoner" element={<Summoner />} />
    </Routes>
  );
}
