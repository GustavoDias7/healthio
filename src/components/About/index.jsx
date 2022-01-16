import React from "react";
import ImgLamp from "assets/images/lamp.png";
import ImgLayer from "assets/images/layer.png";
import ImgPencil from "assets/images/pencil.png";
import ImgPhone from "assets/images/phone.png";

const About = () => {
  return (
    <div id="about">
      <h1>Veja por que nos escolher</h1>
      <div className="container-about">
        <div className="container-about-topics">
          <div className="container-topics">
            <img src={ImgLamp} alt="Lamp" />
            <h2>Ideia inovadora</h2>
            <p>
              Quando inovação e tecnologia se encontram. Foi assim que nosso
              produto foi criado.
            </p>
          </div>

          <div className="container-topics">
            <img src={ImgLayer} alt="Layer" />
            <h2>User friendly</h2>
            <p>
              Experiência do usuário é importante para nós. Nosso App é muito
              intuitivo, então você sabe o que fazer.
            </p>
          </div>
        </div>

        <div className="container-about-topics">
          <div className="container-topics">
            <img src={ImgPencil} alt="Pencil" />
            <h2>Design único</h2>
            <p>
              Modo escuro e lindas cores no design como resposta à tendencia do
              design atual.
            </p>
          </div>

          <div className="container-topics">
            <img src={ImgPhone} alt="Phone" />
            <h2>Navegação intuitiva</h2>
            <p>
              Cada elemento em seu lugar!
              <br />
              Um botão de menu e elementos ativos destacados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
