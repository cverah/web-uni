import React from "react";
import Footer from "../../components/common/Footer.js";
import Encabezado from "../Noticias/Encabezado.js";
import "../../styles/paginaInicio.css";

const PaginaInicio = () => {
  return (
    <div>
      <Encabezado />
      {/* Contenido de la página de inicio */}
      <h1>Bienvenido a la Página de Inicio</h1>
      {/* Fin del contenido de la página de inicio */}
      <Footer />
    </div>
  );
};

export default PaginaInicio;
