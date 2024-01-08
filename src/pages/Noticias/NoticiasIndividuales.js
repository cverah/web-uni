import { useParams } from "react-router-dom";
import Encabezado from "./Encabezado.js";
import Footer from '../../components/common/Footer.js';
import '../../styles/Noticias/NoticiasIndividuales.css';

function NoticiasIndividuales () {

    const params = useParams(); 
    
    return (
        <>
            <div>
            <Encabezado />
            </div>
            <div className='container'> 
            <div className='contenedor-pagina-noticias-individuales'> 
                
                <div className='contenedor-titulo-pagina'>      
                    <h1>{params.titulos}</h1>
                </div>
                
                <div className='contenedor-imagen-posts'>
                    <section className='contenedores-izquierda'> 
                        <img 
                            className='imagen-noticia-grande'
                            src={require(`./Imagenes/${params.imagenes}.jpg`)}
                            alt='Foto de la Noticia'
                        />
                    </section>

                    <section className='contenedores-derecha'>
                        <section className='contenedor-posts-noticia-secundario'>
                            <p>{params.noticias}</p>
                        </section> 
                        
                        <section className='contenedor-posts-leyenda'>
                            <p>Fecha de publicación: 01/01/2024</p>
                            <p>Autor: Joaquin Zevallos Zeta</p>
                        </section>
                    </section>

                </div>
               
                <div className='contenedor-imagenes-medianas'>

                    <figure className='contenedor-imagenes'>
                        <img 
                            className='imagen-mediana-noticias'
                            src={require(`./Imagenes/${params.imagenes1}.jpg`)}
                            alt='Fotos de la Noticia'
                        />
                    </figure>
                    
                    <figure className='contenedor-imagenes'>
                        <img 
                            className='imagen-mediana-noticias'
                            src={require(`./Imagenes/${params.imagenes2}.jpg`)}
                            alt='Foto de la Noticia'
                        />
                    </figure>

                    <figure className='contenedor-imagenes'>
                        <img 
                            className='imagen-mediana-noticias'
                            src={require(`./Imagenes/${params.imagenes3}.jpg`)}
                            alt='Foto de la Noticia'
                        />
                    </figure>

                    <figure className='contenedor-imagenes'>
                        <img 
                            className='imagen-mediana-noticias'
                            src={require(`./Imagenes/${params.imagenes4}.jpg`)}
                            alt='Foto de la Noticia'
                        />
                    </figure>

                    <figure className='contenedor-imagenes'>
                        <img 
                            className='imagen-mediana-noticias'
                            src={require(`./Imagenes/${params.imagenes5}.jpg`)}
                            alt='Foto de la Noticia'
                        />
                    </figure>

                    <figure className='contenedor-imagenes'>
                        <img 
                            className='imagen-mediana-noticias'
                            src={require(`./Imagenes/${params.imagenes6}.jpg`)}
                            alt='Foto de la Noticia'
                        />
                </figure>           

                </div>
                </div>
            </div>
            <div>
            <Footer />
            </div>
        </>
    )
}

export default NoticiasIndividuales;