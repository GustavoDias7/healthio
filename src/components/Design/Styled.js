import styled from "styled-components";

const Styled = styled.main`
  margin: 0 80px;

  & h2 {
    font-size: 40px;
    font-weight: 700;
  }

  & h2 + p {
    margin: 30px 0 20px 0;
    color: #92919d;
  }

  & .phone {
    display: block;
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  & ul li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  & ul li img {
    width: 30px;
    height: 30px;
    background-color: #45415a;
    border-radius: 100%;
    padding: 7px;
  }

  & ul li p {
    color: #92919d;
    margin-left: 15px;
  }

  & a {
    border-radius: 10px;
    padding: 15px 25px;
    border: none;
    color: #dddddd;
    font-weight: 700;
    background-color: #725de5;
  }

  & a:hover {
    background-color: #9b8bf5;
    cursor: pointer;
  }

  & .design-image {
    position: relative;
  }

  & .circle {
    width: 200px;
    height: 200px;
    background: linear-gradient(314.01deg, #725de5 18.6%, #de9ba3 68.77%);
    border-radius: 50%;
    position: absolute;
    filter: blur(50px);
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    & h2 {
      font-size: 28px;
      margin-top: 50px;
    }

    & .phone {
      margin: 2rem auto 0px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    margin: 20px;

    & h2 {
      font-size: 25px;
      margin-top: 50px;
    }

    & .circle {
      display: none;
    }

    & ul li p {
      color: #92919d;
      margin-left: 10px;
      text-align: start;
    }

    & .phone {
      max-width: 260px;
    }

    & a {
      margin-bottom: 30px;
    }
  }
`;

export default Styled;
