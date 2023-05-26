import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  cursor: pointer;
  background: #fff;
  border-radius: 10px;
  img {
    width: 200px;
    height: 200px;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const Label = styled.div`
  font-family: Roboto;
  color: #133777;
`;