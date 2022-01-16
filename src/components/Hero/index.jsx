import React from "react";
import ImgAppHome from "assets/images/app-home.png";

const Hero = () => {
  return (
    <div id="content">
      <div className="content-text">
        <h1>
          Sabemos como
          <br />
          cuidar da sua
          <br />
          saúde
        </h1>
        <p>
          Controle sua saúde. Nós temos a solução pronta para você. Conheça
          nosso novo aplicativo, que vai te ajudar a monitorar sua saúde. Sinta
          a tecnologia e veja nossa inovação.
        </p>
        <button>Download App</button>
        <button>Sobre</button>
      </div>
      <img src={ImgAppHome} alt="App Home" />
      <div className="big-circle" />
    </div>
  );
};

export default Hero;
