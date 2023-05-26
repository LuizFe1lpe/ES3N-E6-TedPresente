import styled from "styled-components";
import { root } from "../../../../styles/var";

export const ContainerMenu = styled.div`
  display: flex;     
  align-items: center;
  flex-direction: column;
  width: 650px;
  height: 80%;
  border: ${root.borderForm}
  border-radius: 9px;
  background: #FFFFFF;
  gap: 3%;
  margin-top: 1%;
  padding-top: 2%;
  padding-bottom: 80px;
  }

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
    height: 80%;
    gap: 3%;
  }
`;

export const ContainerSaldo = styled.div`
    width: 650px;
    height: 57px;
    border-radius: 9.03px;
    display: flex;
    flex-direction: column;
    gap: 42px;
    background-color: #fff;
    border: ${root.borderForm}
    justify-content: center;
    p {
        align-items: left;
        display: flex;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 19px;
        color: #133777;
        text-align: justify;
        margin-left: 20px;
      }
`;
