import React from "react";
import "../estilos/Inicio.css";
import Piepagina from "./Piepagina";
import Navegacion from "./Navegacion";

function Inicio() {
  return (
    <>
      <Navegacion />
      <div className="container">
        <div className="contenedor-pagina-inicio">
          <h3>Hola soy la pagina de inicio</h3>
        </div>
      </div>
      <Piepagina />
    </>
  );
}

export default Inicio;
