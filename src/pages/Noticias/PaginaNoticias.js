import React, {useState} from "react";
import { Link } from "react-router-dom";
import Noticieros from './Noticieros.js';
import Posts from "./Posts.js";
import NavegacionNoticias from './NavegacionNoticias.js';
import Encabezado from "./Encabezado.js";
import Footer from "../../components/common/Footer.js";
import '../../styles/Noticias/PaginaNoticias.css';

function PaginaNoticias () {

    /**/
    const [noticias, setNoticias] = useState(Noticieros)
    const [noticiasPorPagina, setNoticiasPorPagina] = useState(6) 
    const [currentNoticias, setCurrentNoticias] = useState(1)

    const totalNoticias = Noticieros.length 
    const ultimoIndex = currentNoticias * noticiasPorPagina // 1 * 6 = 6
    const primerIndex = ultimoIndex - noticiasPorPagina // 6 - 6 = 0

    return (
        <>
        <div>
        <Encabezado />
        </div>
        <div className='container'>
            {/*MOSTRANDO EL COMPONENTE DEL POSTS*/}
            <Posts 
                postear='¡Explora las maravillas del cosmos! ¡Preparate para un viaje cósmico!'
            />
        </div>
        <div className='container'>
        <main className='contenedor-secundario-noticias'>
            {/*MOSTRANDO TODAS LAS NOTICIAS - 6 POR PAGINA*/}
            {noticias.map(notici => (
            <section key={notici.id} className='contenedor-noticias'>

                <figure >
                    <h2>{notici.titulo}</h2>
                    <div className='content-img-noticias'>
                        <img 
                            className='imagen-noticia'
                            src={require(`./Imagenes/${notici.imagen}.jpg`)} 
                            alt='Foto de noticia'
                        />
                    </div>
                </figure>

                <div className='texto-noticia'>
                    <p>{notici.noticia}</p>
                </div>
                {/*PASANDO PARAMETROS PARA LA PAGINA NOTICIAS INDIVIDUALES*/}
                <Link to={`/NoticiasIndividuales/${notici.titulo}/${notici.noticia}/${notici.imagen}/${notici.imagen1}/${notici.imagen2}/${notici.imagen3}/${notici.imagen4}/${notici.imagen5}/${notici.imagen6}`}>Leer más</Link>
            </section>
            )).slice(primerIndex, ultimoIndex)} 
            
        </main>

        <div className='navegacion-noticias'>
            {/*LLAMANDO AL COMPONENTE DE PAGINACION NAVEGACIONNOTICIAS Y ENVIADO PARAMETROS*/}
            <NavegacionNoticias 
                noticiasPorPagina={noticiasPorPagina} 
                currentNoticias={currentNoticias} 
                setCurrentNoticias={setCurrentNoticias} 
                totalNoticias={totalNoticias}
            />
        </div>
        </div>
        <div>
        {/*LLAMANDO AL COMPONENTE PIE DE PAGINA*/}
        <Footer />
        </div>
        </>
    ) 
}

export default PaginaNoticias;