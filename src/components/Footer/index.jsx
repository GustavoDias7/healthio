import React from "react";
import ImgLogo from "assets/images/healthio-icon.png";
import ImgFacebook from "assets/images/facebook.png";
import ImgInstagram from "assets/images/instagram.png";
import ImgTwitter from "assets/images/twitter.png";
import ImgPinterest from "assets/images/pinterest.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <img id="icon" src={ImgLogo} alt="Healthio" />
        <div className="footer-icon">
          <img src={ImgFacebook} alt="facebook" />
          <img src={ImgInstagram} alt="instagram" />
          <img src={ImgTwitter} alt="twitter" />
          <img src={ImgPinterest} alt="pinterest" />
        </div>
        <h2>
          Desenvolvido por{" "}
          <a href="https://www.linkedin.com/in/jessika-miranda/">
            Jessika Miranda ツ
          </a>
        </h2>
      </div>
      <div className="footer-right">
        <div className="footer-links-container">
          <div className="footer-links">
            <h1>Suporte</h1>
            <a href="/">Ajuda</a>
            <a href="/">FAQ</a>
            <a href="/">Formulário de contato</a>
          </div>

          <div className="footer-links">
            <h1>Produto</h1>
            <a href="/">Sobre</a>
            <a href="/">Serviços</a>
            <a href="/">Funcionalidades</a>
          </div>

          <div className="footer-links">
            <h1>Legal</h1>
            <a href="/">Termos</a>
            <a href="/">Política de privacidade</a>
            <a href="/">Política de cookies</a>
          </div>
        </div>

        <div className="footer-address">
          <h1>Endereço</h1>
          <div className="footer-address-text">
            <p>Rua Tal, São Paulo</p>
            <p>0800 8429 2321</p>
            <p>healthio@suporte.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
