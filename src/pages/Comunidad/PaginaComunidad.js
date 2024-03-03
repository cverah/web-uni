import React from "react";
import Header from "../../components/common/Header";
import WelcomeComunity from "./WelcomeComunity";
import "../../styles/Comunidad/comunidad.css";
import Mision from "./Mision";
import Vision from "./Vision";

const PaginaComunidad = () => {
  return (
    <>
      <Header />
      <div className="container_comunidad">
        <WelcomeComunity />
        <Mision />
        <Vision />
      </div>
    </>
  );
};

export default PaginaComunidad;
