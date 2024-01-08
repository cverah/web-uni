import React from 'react';
import '../../styles/Noticias/Posts.css';

function Posts (props) {
    return(
        <div className='contenedor-posts'>
            <img 
                    className='imagen-posts'
                    src={require('./Imagenes/encabezado-aess2.jpg')}
                    alt='Foto de Aess'
            />
            <div className='contenedor-texto-posts'>
                <h1>IEEE AESS UNI</h1>
                <p className='frase-posts'>"{props.postear}".</p>
            </div>
        </div>              
    )
}

export default Posts;