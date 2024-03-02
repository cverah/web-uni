import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Header from "../../components/common/Header.js";
import Footer from '../../components/common/Footer.js';
import Proyectos from "./Proyectos.js";
import '../../styles/Proyectos/ProyectosIndividuales.css';

function ProyectosIndividuales () {

    const params = useParams(); 
    const [imagens, setImagens] = useState(null)

    return (
        <>
        <div>
            <Header />
        </div>
        <div> 
            <div className='contenedor-general-proyectos'> 
                                
                <div>
                    
                    <section className='contenedores-imagen'> 
                        <img src={Proyectos[params.ids].imagen} alt='Foto de la Noticia' />
                    </section>

                    <div className='contenedor-titulo'>      
                        <h1>{Proyectos[params.ids].titulo}</h1>
                    </div>

                    <section className='contenedor-texto'>
                        <p>{Proyectos[params.ids].proyectext}</p>
                    </section> 

                </div>

                <motion.div className='contenedor-slider'>
                    <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -1220}}>
                        {Proyectos[params.ids].imagenesurl.map((imagens, index) => (
                            <motion.div className='item' key={index} onDoubleClick={() => setImagens(imagens)}>  
                                {
                                    <img src={imagens.imags} alt='Foto Superpuesta' />
                                }
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div className='popup-media' style={{ display: imagens ? 'block' : 'none' }}>
                    <motion.div >
                        <span onClick={() => setImagens(null)}>&times;</span>
                        {                               
                            <img src={imagens?.imags} alt='Foto Superpuesta' />
                        }   
                    </motion.div>
                </motion.div>

            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default ProyectosIndividuales;