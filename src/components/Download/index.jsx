import React from "react";
import ImgPhoneApp from "assets/images/phones-app.png";

const Download = () => {
  return (
    <div id="download">
      <img src={ImgPhoneApp} alt="Phone App" />
      <div className="download-text">
        <h1>
          O que você está esperando?
          <br />
          Faça o download!
        </h1>
        <p>
          Instale o aplicativo health.io. Comece a monitorar e cuidar da sua
          saúde.
        </p>
        <button>Download App</button>
      </div>
    </div>
  );
};

export default Download;
