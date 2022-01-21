import styled from "styled-components";

const Styled = styled.footer`
  padding: 120px 80px 50px 80px;
  color: #92919d;

  & .logo {
    width: 200px;
  }

  & address a {
    color: #92919d;
    text-decoration: none;
    font-size: 14px;

    transition: all 500ms ease-in-out;
  }

  & address a:hover {
    letter-spacing: 1px;
  }

  & .footer-links h3 {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 25px;
  }

  & .footer-links a {
    display: block;
    text-decoration: none;
    color: #92919d;
    margin-bottom: 15px;
    font-size: 14px;
  }

  & .footer-links a:hover {
    text-decoration: underline;
  }

  & address {
    font-size: 14px;
    color: #92919d;
  }

  & .social-links img {
    background-color: #725de5;
    border-radius: 100%;
    width: 30px;
    padding: 5px;
    margin: 35px 20px 35px 0;
  }

  & .footer-address h3 {
    font-weight: 700;
    font-size: 14px;
    margin: 25px 0px;
  }

  & ul li {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    text-align: center;

    & ul li {
      margin-bottom: 15px;
    }

    & .social-links {
      margin-left: 20px;
    }

    & address {
      margin-bottom: 20px;
    }

    & .footer-links h3 {
      margin-top: 20px;
    }
  }
  @media (max-width: 600px) {
    padding: 100px 10px 30px 10px;

    & .logo {
      width: 170px;
    }

    & .social-links img {
      margin-right: 5px;
    }
  }
`;

export default Styled;
