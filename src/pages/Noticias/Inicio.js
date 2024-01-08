import React from 'react';
import '../../styles/Noticias/Inicio.css';
import Header from '../../components/common/Header.js';
import Footer from "../../components/common/Footer.js";

function Inicio () {
    return (
        <>  
            <div>
            <Header />
            </div>
            <div className='container'>
                <div className='contenedor-pagina-inicio'>
                    <h3>Hola soy la pagina de inicio</h3>
                </div>
            </div>
            <div>
            <Footer />
            </div>
        </>
    )
}

export default Inicio;