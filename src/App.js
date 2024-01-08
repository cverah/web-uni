import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicio from "./pages/Inicio/PaginaInicio";
import PaginaNoticias from "./pages/Noticias/PaginaNoticias";
import NoticiasIndividuales from "./pages/Noticias/NoticiasIndividuales"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        {/* Agrega más rutas según sea necesario */}
        <Route path='PaginaNoticias' element={<PaginaNoticias />} />
        <Route path='NoticiasIndividuales/:titulos/:noticias/:imagenes/:imagenes1/:imagenes2/:imagenes3/:imagenes4/:imagenes5/:imagenes6' element={<NoticiasIndividuales />} /> 
      </Routes>
    </Router>
  );
}

export default App;
