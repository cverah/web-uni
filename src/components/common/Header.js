import React from "react";
import { Link } from "react-router-dom";
import HeaderScript from "../../utils/headerscript";

const Header = () => {

  return (
    <header>
      
      <figure>
        <img className="logo" src="./img/Logo1.png" alt="Logo1" />
        <img className="logo" src="./img/logo2.png" alt="Logo2" />
      </figure>

      <HeaderScript />

      <ul> 
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/noticias">NOTICIAS</Link>
        </li>
        <li>
          <Link to="/comunidad">COMUNIDAD</Link>
        </li>
        <li>
          <Link to="/proyectos">PROYECTOS</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

