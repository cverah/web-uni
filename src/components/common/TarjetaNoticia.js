import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import NavegacionNoticias from "../../pages/Noticias/NavegacionNoticias";
import Noticieros from "../../pages/Noticias/Noticieros";
import '../../styles/Noticias/TarjetaNoticia.css'

function TarjetaNoticia () {

  const [noticias, setNoticias] = useState(Noticieros)
  const [noticiasPorPagina, setNoticiasPorPagina] = useState(8) 
  const [currentNoticias, setCurrentNoticias] = useState(1)

  const totalNoticias = Noticieros.length 
  const ultimoIndex = currentNoticias * noticiasPorPagina // 1 * 6 = 6
  const primerIndex = ultimoIndex - noticiasPorPagina // 6 - 6 = 0

  const navigate = useNavigate();

  return (
    <div>
      <main className='contenedor-secundario-noticias'>
        {/*MOSTRANDO TODAS LAS NOTICIAS - 6 POR PAGINA*/}
        {noticias.map(notici => (
        <section key={notici.id} className='contenedor-noticias'>

            <figure>
                {/*MOSTRANDO TITULO DE LA NOTICIA*/}
                <div className='content-titulo'> 
                    <p>{notici.titulo}</p>
                </div>
                {notici.imagen.map((notic, index) => (
                <div className='content-img-noticias' key={index}>
                  {/*MOSTRANDO IMAGEN DE LA TARJETA*/}
                  <img src={notic.imgs} alt='Foto de noticia' />  
                </div>
                ))}
            </figure>
            {/*MOSTRANDO NOTICIA*/}
            <div className='texto-noticia'>
                <p>{notici.texto}</p>
            </div>
            {/*PASANDO PARAMETROS PARA LA PAGINA NOTICIAS INDIVIDUALES*/}
            <button type="button" class="btn btn-dark" onClick={() => navigate(`/NoticiasIndividuales/${notici.id}`)}>Leer más</button>
        </section>
        )).slice(primerIndex, ultimoIndex)} 
      </main>

  <div >
      {/*LLAMANDO AL COMPONENTE DE PAGINACION NAVEGACIONNOTICIAS Y ENVIADO PARAMETROS*/}
      <NavegacionNoticias 
          noticiasPorPagina={noticiasPorPagina} 
          currentNoticias={currentNoticias} 
          setCurrentNoticias={setCurrentNoticias} 
          totalNoticias={totalNoticias}
      />
  </div>
</div>

)
}

export default TarjetaNoticia;
