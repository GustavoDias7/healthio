import styled from "styled-components";

const Styled = styled.main`
  & {
    display: flex;
    background: linear-gradient(86.08deg, #ecaa80 0%, #725de5 100%);
    align-items: center;
    margin-top: 120px;
  }

  & h2 {
    font-size: 40px;
    font-weight: 700;
  }

  & .download-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  & .download-text p {
    margin: 30px 0 20px 0;
    color: #cbcbcb;
  }

  & .download-text a {
    border-radius: 10px;
    padding: 15px 25px;
    border: none;
    color: #252531;
    font-weight: 700;
    background-color: #dddddd;
  }

  & .download-text a:hover {
    background-color: #d4d3da;
    cursor: pointer;
  }

  & img {
    display: block;
    margin-top: 80px;
  }
  @media (max-width: 900px) {
    text-align: center;

    & h2 {
      font-size: 28px;
      margin-top: 50px;
    }
    & .download-text {
      align-items: center;
    }
    & img {
      width: 100%;
      max-width: 300px;
      margin: 0px auto 0px;
    }
  }
`;

export default Styled;
