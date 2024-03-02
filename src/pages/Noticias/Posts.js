import React from 'react';
import '../../styles/Noticias/Posts.css';

function Posts (props) {
    return(
        <div className='contenedor-posts'>
            <img 
                    className='imagen-posts'
                    src={require('./Imagenes/encabezado-aess3.jpg')}
                    alt='Foto de Aess'
            />
            <div className='contenedor-texto-posts'>
                <h1>Pedro Paulet, La Crónica, Argentina, 1944</h1>
                <p className='frase-posts'>"{props.postear}".</p>
            </div>
        </div>              
    )
}

export default Posts;