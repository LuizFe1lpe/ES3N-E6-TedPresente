import styled from "styled-components";
import { root } from "../../styles/var";
export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  box-shadow: ${root.boxShadow};
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
  font-family: Roboto;
`;
export const CurrencySt = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  color: #133777;
  text-align: justify;
  margin-top:40px;
  margin-left: 50px;
`;
