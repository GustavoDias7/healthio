import React from "react";
import ImgAppHome from "assets/images/app-home.png";
import Title from "components/common/Title";
import { Button, Container, Grid } from "@mui/material";
import StyledHero from "./StyledHero";

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={8} sm={12} xs={12}>
            <div className="content-text">
              <Title as="h1">
                Sabemos como
                <br />
                cuidar da sua
                <br />
                saúde
              </Title>
              <p>
                Controle sua saúde. Nós temos a solução pronta para você.
                Conheça nosso novo aplicativo, que vai te ajudar a monitorar sua
                saúde. Sinta a tecnologia e veja nossa inovação.
              </p>
              <Button variant="contained" href="#download">
                Download App
              </Button>
              <Button variant="contained" href="#about">
                Sobre
              </Button>
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <img src={ImgAppHome} alt="App Home" />
            <div className="big-circle" />
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
