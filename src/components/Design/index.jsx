import React from "react";
import ImgWrench from "assets/images/wrench.png";
import ImgView from "assets/images/view.png";
import ImgColor from "assets/images/color.png";
import ImgAppSite from "assets/images/app-side.png";
import Styled from "./Styled";
import { Button, Container, Grid } from "@mui/material";

const Design = () => {
  return (
    <Styled id="design">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={7} sm={12} xs={12}>
            <h2>
              A integração de design
              <br />e tecnologia
            </h2>
            <p>
              A tecnologia de ultima geração faz com que seja possível desenhar
              soluções úteis.
            </p>

            <ul>
              <li>
                <img src={ImgWrench} alt="Wrench" />
                <p>Login seguro com a digital</p>
              </li>
              <li>
                <img src={ImgView} alt="View" />
                <p>Modo escuro como nas atuais tendências do design</p>
              </li>
              <li>
                <img src={ImgColor} alt="Color" />
                <p>Cores bonitas que juntas criam uma aparência incrível</p>
              </li>
            </ul>

            <Button href="/" variant="contained">
              Download App
            </Button>
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <div className="design-image">
              <img className="phone" src={ImgAppSite} alt="App Site" />
              <div className="circle" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Styled>
  );
};

export default Design;
