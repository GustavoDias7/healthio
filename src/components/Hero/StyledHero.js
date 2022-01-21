import styled from "styled-components";

const StyledHero = styled.main`
  margin-top: 80px;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    max-width: 308px;
    height: auto;
    margin-left: auto;
    margin-bottom: 64px;
  }

  & p {
    color: #92919d;
    margin-bottom: 2rem;
    max-width: 560px;
  }

  & .content-text a {
    border-radius: 10px;
    margin-right: 20px;
    padding: 16px 32px;
    font-weight: 700;
    background-color: #725de5;
  }

  & .content-text a:hover {
    background-color: #9b8bf5;
    cursor: pointer;
  }

  & .content-text a:last-child {
    margin-right: 0;
    background-color: #45415a;
  }

  & .content-text a:last-child:hover {
    background-color: #635d80;
  }

  & .big-circle {
    width: 400px;
    height: 400px;
    background: linear-gradient(314.01deg, #725de5 18.6%, #de9ba3 68.77%);
    border-radius: 50%;
    position: absolute;
    filter: blur(80px);
    z-index: -1;
    left: 70%;
    top: 50%;
  }
  @media (max-width: 900px) {
    margin-top: 0px;
    text-align: center;
    & h1 {
      font-size: 1.75rem;
    }
    & p {
      margin: 0 auto 2rem;
    }
    & img {
      margin: 0 auto 40px;
    }
    & .content-text a {
      margin-bottom: 30px;
    }
    & .big-circle {
      display: none;
    }
  }
  @media (max-width: 320px) {
    & .content-text a {
      margin-right: 0;
    }
  }
`;

export default StyledHero;
