import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicio from "./pages/Inicio/PaginaInicio";
import PaginaNoticias from "./pages/Noticias/PaginaNoticias";
import NoticiasIndividuales from "./pages/Noticias/NoticiasIndividuales";
import PaginaProyectos from "./pages/Proyectos/PaginaProyectos";
import ProyectosIndividuales from "./pages/Proyectos/ProyectosIndividuales";
import PaginaComunidad from "./pages/Comunidad/PaginaComunidad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="PaginaNoticias" element={<PaginaNoticias />} />
        <Route
          path="NoticiasIndividuales/:ids"
          element={<NoticiasIndividuales />}
        />
        <Route path="PaginaProyectos" element={<PaginaProyectos />} />
        <Route
          path="ProyectosIndividuales/:ids"
          element={<ProyectosIndividuales />}
        />
        <Route path="PaginaComunidad" element={<PaginaComunidad />} />
      </Routes>
    </Router>
  );
}

export default App;
