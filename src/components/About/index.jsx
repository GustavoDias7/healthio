import React from "react";
import ImgLamp from "assets/images/lamp.png";
import ImgLayer from "assets/images/layer.png";
import ImgPencil from "assets/images/pencil.png";
import ImgPhone from "assets/images/phone.png";
import StyledAbout from "./StyledAbout";
import { Container, Grid } from "@mui/material";

const About = () => {
  return (
    <StyledAbout id="about">
      <Container maxWidth="lg">
        <h2>Veja por que nos escolher</h2>
        <Grid container maxWidth="lg" rowSpacing={4}>
          <Grid item md={3} sm={6} xs={12}>
            <img src={ImgLamp} alt="Lamp" />
            <h3>Ideia inovadora</h3>
            <p>
              Quando inovação e tecnologia se encontram. Foi assim que nosso
              produto foi criado.
            </p>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <img src={ImgLayer} alt="Layer" />
            <h3>User friendly</h3>
            <p>
              Experiência do usuário é importante para nós. Nosso App é muito
              intuitivo, então você sabe o que fazer.
            </p>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <img src={ImgPencil} alt="Pencil" />
            <h3>Design único</h3>
            <p>
              Modo escuro e lindas cores no design como resposta à tendencia do
              design atual.
            </p>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <img src={ImgPhone} alt="Phone" />
            <h3>Navegação intuitiva</h3>
            <p>
              Cada elemento em seu lugar!
              <br />
              Um botão de menu e elementos ativos destacados.
            </p>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
