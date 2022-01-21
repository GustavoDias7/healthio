import styled from "styled-components";

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin: 100px 0 30px 0;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0px;
  }
`;

export default Title;
