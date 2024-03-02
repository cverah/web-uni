import React from "react";
import Posts from "./Posts.js";
import Header from "../../components/common/Header.js";
import Footer from "../../components/common/Footer.js";
import TarjetaNoticia from "../../components/common/TarjetaNoticia.js";

function PaginaNoticias () {

    /*PAGINA NOTICIAS*/
    return (
        <>
        <div>
        {/*MOSTRANDO ENCABEZADO*/}
        <Header />
        </div>
        <div > {/*className='container'*/}
            {/*MOSTRANDO EL COMPONENTE DEL POSTS*/}
            <Posts 
                postear='El progreso no consiste en igualar los procesos de la naturaleza, sino en superarlos. [Así] lo que debemos estudiar no es la aviación tal como proviene de las aves, y que sólo nos invita a imitar el vuelo, sino la ingravidez. Hay que investigar el transporte por encima del planeta, donde no hay aire, ni nubes, ni hielo'
            />
        </div>
        <div > {/*className='container'*/}
            {/*MOSTRANDO TARJETA NOTICIA*/}
            <TarjetaNoticia />
        </div>
        <div>
        {/*MOSTRANDO AL COMPONENTE PIE DE PAGINA*/}
        <Footer />
        </div>
        </>
    ) 
}

export default PaginaNoticias;