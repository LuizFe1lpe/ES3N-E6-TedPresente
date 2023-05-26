import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 190px auto;
  grid-template-rows: 70px auto;
  color: #ffffff;
  grid-template-areas:
    "SB NB NB"
    "SB CT CT";
  @media (max-width: 768px) {
    grid-template-areas:
      "NB NB"
      "SB SB"
      "CT CT";
  }
  height: 100vh;
`;
