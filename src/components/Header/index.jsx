import React from "react";
import ImgLogo from "assets/images/healthio-icon.png";

const Header = () => {
  return (
    <header className="main-header">
      <div id="icon">
        <img src={ImgLogo} alt="Logo Healthio" />
      </div>
      <div id="links">
        <a href="/">Sobre</a>
        <a href="/">Serviços</a>
        <a href="/">Funcionalidades</a>
        <a href="/">Contato</a>
        <a href="/">Começar</a>
      </div>
      <div className="small-circle" />
    </header>
  );
};

export default Header;
