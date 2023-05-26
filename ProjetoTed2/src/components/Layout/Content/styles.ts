import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #4f4f4f;
  background-color: #f5fafc;
  ::-webkit-scrollbar {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;
