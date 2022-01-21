import React from "react";
import ImgLogo from "assets/images/healthio-icon.png";
import ImgFacebook from "assets/images/facebook.png";
import ImgInstagram from "assets/images/instagram.png";
import ImgTwitter from "assets/images/twitter.png";
import ImgPinterest from "assets/images/pinterest.png";
import Styled from "./Styled";
import { Container, Grid } from "@mui/material";

const socialLinks = [
  { link: "https://facebook.com", src: ImgFacebook, alt: "Facebook" },
  { link: "https://instagram.com", src: ImgInstagram, alt: "Instagram" },
  { link: "https://twitter.com", src: ImgTwitter, alt: "Twitter" },
  { link: "https://pinterest.com", src: ImgPinterest, alt: "Pinterest" },
];

const footerLinks = [
  {
    title: "Suporte",
    links: [
      { innerText: "Ajuda", href: "/" },
      { innerText: "FAQ", href: "/" },
      { innerText: "Formulário de contato", href: "/" },
    ],
  },
  {
    title: "Produto",
    links: [
      { innerText: "Sobre", href: "/" },
      { innerText: "Serviços", href: "/" },
      { innerText: "Funcionalidades", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { innerText: "Termos", href: "/" },
      { innerText: "Política de privacidade", href: "/" },
      { innerText: "Política de cookies", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <Styled>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={12} xs={12} className="left">
            <img className="logo" src={ImgLogo} alt="Healthio" />
            <div className="social-links">
              {socialLinks.map(({ link, src, alt }) => {
                return (
                  <a key={alt} href={link}>
                    <img src={src} alt={alt} />
                  </a>
                );
              })}
            </div>
            <address>
              Desenvolvido por{" "}
              <a href="https://www.linkedin.com/in/jessika-miranda/">
                Jessika Miranda ツ
              </a>
            </address>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Grid container>
              {footerLinks.map(({ title, links }) => {
                return (
                  <Grid
                    key={title}
                    item
                    md={4}
                    sm={12}
                    xs={12}
                    className="footer-links"
                  >
                    <h3>{title}</h3>
                    {links.map(({ innerText, href }) => {
                      return (
                        <a key={innerText} href={href}>
                          {innerText}
                        </a>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>

            <div className="footer-address">
              <h3>Endereço</h3>
              <Grid
                container
                as="ul"
                columnSpacing={2}
                className="footer-address-text"
              >
                <Grid as="li" item md="auto" sm={12} xs={12}>
                  Rua Tal, São Paulo
                </Grid>
                <Grid as="li" item md="auto" sm={12} xs={12}>
                  0800 8429 2321
                </Grid>
                <Grid as="li" item md="auto" sm={12} xs={12}>
                  healthio@suporte.com
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Styled>
  );
};

export default Footer;
