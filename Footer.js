import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importar Link para navegação interna
import "./ComponenteCSS/Footer.css";

function Footer() {
  const d = new Date();
  const currYear = d.getFullYear();

  return (
    <div className="footer">
      <div className="logo-container">
        <img src={"/assets/img/LogoBranco.png"} alt="Logo" className="company-logo1" />
      </div>

      <div className="about-social-icon text-center">
        <ul className="about-social">
          <li className="footer-list-item wow fadeIn" data-wow-delay=".8s">
            <a href="https://www.youtube.com/channel/UCA8_3GO2MjbMmBpo-KzqNNQ" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className="footer-list-item wow fadeIn" data-wow-delay=".6s">
            <a href="https://www.linkedin.com/company/cqladv/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="footer-list-item wow fadeIn" data-wow-delay=".2s">
            <a href="https://www.facebook.com/cqladv" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="footer-list-item wow fadeIn" data-wow-delay=".4s">
            <a href="https://www.instagram.com/cqladvogados/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="footer-list-item wow fadeIn" data-wow-delay=".4s">
            <a href="mailto:contato@cqladv.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-links1">
        <ul>
          <li className="footer-list-item">
            <a href="#">Custódio Quessada Lima Advogados</a>
          </li>
          <li className="footer-list-item">
            <Link to="/LGPD">Política de Privacidade e LGPD {currYear}</Link>
          </li>
          <li className="footer-list-item">
            <Link to="/TermosDeUso">Termos de Uso</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
