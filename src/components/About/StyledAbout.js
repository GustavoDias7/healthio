import styled from "styled-components";

const StyledAbout = styled.section`
  text-align: center;
  margin: 80px 0 160px;

  & h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  & img {
    width: 90px;
  }

  & h3 {
    font-weight: 700;
    margin: 15px 0;
  }

  & p {
    color: #92919d;
    width: 240px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    margin: 40px 0;

    & .box {
      margin-bottom: 1rem;
    }
  }
`;

export default StyledAbout;
