import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../estilos/Navegacion.css";
import Hamb from "../imagenes/icons/RadixIconsHamburgerMenu.svg";

function Navegacion() {
  const [seeHunger, setSeeHunger] = useState(false);
  const handleMenuBar = (event) => {
    event.preventDefault();
    setSeeHunger(!seeHunger);
  };
  console.log(seeHunger);
  return (
    <div className="container">
      <nav className="contenedor-navegacion">
        <div className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/PaginaNoticias">Noticias</Link>
          <Link to="">Articulos</Link>
          <Link to="">Videos</Link>
          <Link to="">Contactos</Link>
        </div>
      </nav>

      <nav className="contenedor-navegacion-mobile">
        <div className="hamb">
          <img onClick={handleMenuBar} src={Hamb} alt="img-hamb" />
          <h1>IEEE AESS UNI</h1>
        </div>

        <div className={seeHunger ? "menu-mobile" : "menu-mobile-none"}>
          <Link to="/">Inicio</Link>
          <Link to="/PaginaNoticias">Noticias</Link>
          <Link to="">Articulos</Link>
          <Link to="">Videos</Link>
          <Link to="">Contactos</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navegacion;
