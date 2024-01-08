import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Hamburguesa from '../Noticias/Imagenes/Icons/MenuHambuerguesa.svg';
import '../../styles/Noticias/Encabezado.css';

function Encabezado() {

    const [ valorMenu, setMenu] = useState(false)
    const mostrarMenu = () => {
        setMenu( !valorMenu )
    } 

    return (
        <header className='encabezado'>
            
            <figure className='logos-header'>
                <img className="logo" src="./img/Logo1.png" alt="Logo1" />
                <img className="logo" src="./img/logo2.png" alt="Logo2" />
            </figure>

            <button
              onClick={ mostrarMenu }  
              className='encabezado-button'>
              <img className='encabezado-svg' src={Hamburguesa} />
            </button>

            <nav className={ `encabezado-nav ${ valorMenu ? 'isActive' : '' }` }>
                <ul className='encabezado-ul'>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/'>INICIO</Link>
                    </li>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/PaginaNoticias'>NOTICIAS</Link>
                    </li>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/Articulos'>ARTICULOS</Link>
                    </li>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/Videos'>VIDEOS</Link>
                    </li>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/Contactos'>CONTACTOS</Link>
                    </li>
                </ul>
            </nav>
            <Outlet /> 
        </header>
    )
}

export default Encabezado;
