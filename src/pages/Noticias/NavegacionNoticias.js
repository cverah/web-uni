import React from "react";
import "../../styles/Noticias/NavegacionNoticias.css";
import { Link } from "react-router-dom";

function NavegacionNoticias({
  noticiasPorPagina,
  currentNoticias,
  setCurrentNoticias,
  totalNoticias,
}) {
  const numerosPagina = [];

  for (let i = 1; i <= Math.ceil(totalNoticias / noticiasPorPagina); i++) {
    numerosPagina.push(i);
  }

  const anteriorPagina = () => {
    setCurrentNoticias(currentNoticias - 1);
  };

  const siguientePagina = () => {
    setCurrentNoticias(currentNoticias + 1);
  };

  const paginaEspecifica = (n) => {
    setCurrentNoticias(n);
  };

  return (
    <nav aria-label="..." className="navegacion-noticias">
      <ul className="pagination">
        <li className="page-item">
          <Link
            className={`page-link ${currentNoticias === 1 ? "disabled" : ""}`}
            to="#"
            onClick={anteriorPagina}
          >
            Anterior
          </Link>
        </li>

        {numerosPagina.map((paginaNo) => (
          <li key={paginaNo}>
            <Link
              className={`page-link ${
                paginaNo === currentNoticias ? "active" : ""
              }`}
              href="#"
              onClick={() => paginaEspecifica(paginaNo)}
            >
              {paginaNo}
            </Link>
          </li>
        ))}

        <li className="page-item">
          <a
            className={`page-link ${
              currentNoticias >= numerosPagina.length ? "disabled" : ""
            }`}
            href="#"
            onClick={siguientePagina}
          >
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavegacionNoticias;
