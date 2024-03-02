import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Hamburguesa from '../../pages/Noticias/Imagenes/Icons/MenuHambuerguesa.svg';
import '../../styles/Header.css';

function Header() {

    const [ valorMenu, setMenu] = useState(false)
    const mostrarMenu = () => {
        setMenu( !valorMenu )
    } 

    return (
        <header className='encabezado'>
            
            <figure className='logos-header'>
                <img className="logo" src={require('../../pages/Noticias/Imagenes/Logo1.jpg')} alt="Logo1" />
                <img className="logo" src={require('../../pages/Noticias/Imagenes/Logo2.jpg')} alt="Logo2" />
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
                        <Link className='encabezado-link' to='/PaginaComunidad'>COMUNIDAD</Link>
                    </li>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/PaginaProyectos'>PROYECTOS</Link>
                    </li>
                    <li className='encabezado-li'>
                        <Link className='encabezado-link' to='/PaginaContactos'>CONTACTOS</Link>
                    </li>
                </ul>
            </nav>
            <Outlet /> 
        </header>
    )
}

export default Header;
