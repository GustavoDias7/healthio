import React from "react";
import ImgPhoneApp from "assets/images/phones-app.png";
import { Button, Container, Stack } from "@mui/material";
import Styled from "./Styled";

const Download = () => {
  return (
    <Styled id="download">
      <Container maxWidth="xl">
        <Stack
          spacing={4}
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
        >
          <div>
            <img src={ImgPhoneApp} alt="Phone App" />
          </div>
          <div className="download-text">
            <div>
              <h2>
                O que você está esperando?
                <br />
                Faça o download!
              </h2>
              <p>
                Instale o aplicativo health.io. Comece a monitorar e cuidar da
                sua saúde.
              </p>
              <Button variant="contained" href="/">
                Download App
              </Button>
            </div>
          </div>
        </Stack>
      </Container>
    </Styled>
  );
};

export default Download;
