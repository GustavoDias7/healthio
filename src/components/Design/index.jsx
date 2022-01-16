import React from "react";
import ImgWrench from "assets/images/wrench.png";
import ImgView from "assets/images/view.png";
import ImgColor from "assets/images/color.png";
import ImgAppSite from "assets/images/app-side.png";

const Design = () => {
  return (
    <div id="design">
      <div className="design-text">
        <h1>
          A integração de design
          <br />e tecnologia
        </h1>
        <p>
          A tecnologia de ultima geração faz com que seja possível desenhar
          soluções úteis.
        </p>
        <div className="design-text-topics">
          <img src={ImgWrench} alt="Wrench" />
          <h2>Login seguro com a digital</h2>
        </div>

        <div className="design-text-topics">
          <img src={ImgView} alt="View" />
          <h2>Modo escuro como nas atuais tendências do design</h2>
        </div>

        <div className="design-text-topics">
          <img src={ImgColor} alt="Color" />
          <h2>Cores bonitas que juntas criam uma aparência incrível</h2>
        </div>
        <button>Download App</button>
      </div>
      <img src={ImgAppSite} alt="App Site" />
      <div className="circle" />
    </div>
  );
};

export default Design;
