import React from "react";
import ImgLogo from "assets/images/healthio-icon.png";
import NavLinks from "components/common/NavLinks";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";

const Header = styled.header`
  padding: 20px;

  & .logo {
    font-size: 0px;
    width: 200px;
  }
  & .logo img {
    width: 200px;
  }
  & .logo:focus,
  & .logo:hover {
    opacity: 0.6;
  }

  & .small-circle {
    position: absolute;
    left: 45%;
    top: -15%;
    z-index: -1;
    width: 200px;
    height: 200px;
    filter: blur(50px);
    border-radius: 10%;
    background: linear-gradient(314.01deg, #725de5 18.6%, #de9ba3 68.77%);
  }

  & h1 {
    color: #725de5;
    font-size: 30px;
    letter-spacing: 0.15rem;
  }

  & ul {
    display: flex;
    justify-content: flex-end;
  }

  & a {
    color: #dddddd;
    text-decoration: none;
    margin-right: 50px;
  }
  & a:focus,
  & a:hover {
    color: #725de5;
  }

  & li:last-child a {
    margin-right: 0;
    background-color: #45415a;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    & > div > div > div:nth-child(2) {
      display: none;
    }

    & .logo img {
      display: block;
      margin: 0 auto;
    }

    & .small-circle {
      width: 100px;
      height: 100px;
      top: 10%;
      left: 70%;
    }
  }
`;

const MainHeader = () => {
  return (
    <Header>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <a className="logo" href="/">
              <img src={ImgLogo} alt="Logo Healthio" />
            </a>
          </Grid>
          <Grid item md={9}>
            <NavLinks />
          </Grid>
        </Grid>
        <div className="small-circle" />
      </Container>
    </Header>
  );
};

export default MainHeader;
