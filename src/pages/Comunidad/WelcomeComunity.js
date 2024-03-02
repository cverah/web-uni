import React from "react";
import "../../styles/Comunidad/welcome_comunity.css";
import IconFacebook from "./icons/MdiFacebookBox.svg";
import IconInstagram from "./icons/PhInstagramLogo.svg";
import Iconlinkedin from "./icons/BiLinkedin.svg";
import IconTwitter from "./icons/BiTwitterX.svg";
import IconPerson from "./icons/SolarPeopleNearbyBroken.svg";
import IconTiktok from "./icons/IcBaselineTiktok.svg";
import IconDiscord from "./icons/BiDiscord.svg";

const WelcomeComunity = () => {
  return (
    <div className="container_welcome">
      <div className="welcome">
        <h4>Bienvenido a nuestra comunidad</h4>
        <div className="nosotros">
          <h1>Nosotros</h1>
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className="parrafo">
            conoce nuestra historia Lorem ipsum dolor sit amet!
          </p>
        </div>
      </div>
      <div className="welcome_mediasocial">
        <div className="card_mediasocial">
          <img src={IconFacebook} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="card_mediasocial">
          <img src={IconInstagram} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="card_mediasocial">
          <img src={Iconlinkedin} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="card_mediasocial">
          <img src={IconTwitter} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="card_mediasocial">
          <img src={IconPerson} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="card_mediasocial">
          <img src={IconTiktok} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="card_mediasocial">
          <img src={IconDiscord} alt="iconfacebook" />
          <div className="information">
            <p>48 k</p>
            <p>Followers</p>
          </div>
        </div>
      </div>
      <div className="welcome_links">
        <div className="links_menu">
          <a href="#mision">Mision</a>
        </div>
        <div className="links_menu">
          <a href="#mision">Vision</a>
        </div>
        <div className="links_menu">
          <a href="#mision">Areas AES UNI</a>
        </div>
        <div className="links_menu">
          <a href="#mision">Nuestro Equipo Directivo</a>
        </div>
        <div className="links_menu">
          <a href="#mision">Nuestra Subdirectiva</a>
        </div>
        <div className="links_menu">
          <a href="#mision">Mentores 2023</a>
        </div>
        <div className="links_menu">
          <a href="#mision">Nuestro Boletin</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComunity;
