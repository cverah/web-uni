import React, { useState } from "react";
import { Link } from "react-router-dom";
import Proyectos from "../../pages/Proyectos/Proyectos";
import "../../styles/Proyectos/TarjetaProyecto.css";

function TarjetaProyecto() {
  const [proyectos, setProyectos] = useState(Proyectos);

  console.log(setProyectos);

  return (
    <div>
      <main className="contenedor-general-proyectos">
        {/*MOSTRANDO TARJETAS DE PROYECTOS*/}
        {proyectos.map((proyect) => (
          <section key={proyect.id} className="contenedor-proyectos">
            <figure>
              <div className="contenedor-imagen">
                {/*MOSTRANDO IMAGEN DEL PROYECTO*/}
                <img src={proyect.imagen} alt="Foto de noticia" />
              </div>
            </figure>

            <div className="contenedor-textos">
              {/*MOSTRANDO TITULO DEL PROYECTO*/}
              {/*PASANDO PARAMETRO PARA LA PAGINA PROYECTOS INDIVIDUALES*/}
              <Link to={`/ProyectosIndividuales/${proyect.id}`}>
                {proyect.titulo}
              </Link>
              {/*MOSTRANDO TEXTO DEL PROYECTO*/}
              <div className="texto-proyecto">
                <p>{proyect.proyectext}</p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default TarjetaProyecto;
