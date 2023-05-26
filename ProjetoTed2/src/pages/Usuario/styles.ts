import styled from "styled-components";
import { root } from "../../styles/var";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  background: #ffff;
  border-radius: 20px;
  padding-bottom: 1%;
  button {
    margin-top: 20px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;     
  align-items: center;
  flex-direction: column;
  width: 650px;
  height: 60%;
  border: ${root.borderForm};
  border-radius: 9px;
  background: #FFFFFF;
  gap: 6%;
  margin-top: 6%;
  padding-top: 2%;
  padding-bottom: 80px;
  

  p{
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 19px;
    color: #133777;
    text-align: justify;
    align-self: start;
    margin-left: 50px;
    align-self: start;
  } 

    @media (max-width: 1024px) {
      display: flex;     
      align-items: center;
      flex-direction: column;
      width: 90%;
      height: 70%;
      gap: 4%;
      
    }
`;
