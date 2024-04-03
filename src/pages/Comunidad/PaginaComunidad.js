import React from "react";
import Header from "../../components/common/Header";
import WelcomeComunity from "./WelcomeComunity";
import "../../styles/Comunidad/comunidad.css";
import Mision from "./Mision";
import Vision from "./Vision";
import ImgCohete from "./images/cohete.png";

const PaginaComunidad = () => {
  return (
    <>
      <Header />

      <WelcomeComunity />
      <div className="container_comunidad">
        <Mision />
        <Vision />
      </div>
    </>
  );
};

export default PaginaComunidad;
