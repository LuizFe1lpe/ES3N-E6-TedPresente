import styled from "styled-components";
import { root } from "../../styles/var";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 42px;
  background: #ffff;
  box-shadow: ${root.boxShadow}
  width: 100%;
  height: 100%;
  border-radius: 20px;
  button {
    margin-top: 20px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Roboto;
  color: #a52a2a;
  height: 100%;
  border: ${root.borderForm}
  border-radius: 9px;
  background: #ffffff;
  gap: 6%;
  padding: 20px;
  padding-top: 20px;
  FormControlLabel label {
    font-size: 1rem;
  }

  p {
    display: flex;
    align-self: start;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 19px;
    color: #133777;
    text-align: justify;
    margin-right: 65%;
  }

  @media (max-width: 768px) {
    display: flex;
    height: 40vh;
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 500px;
  height: 55px;
  blend: pass through;
  border: 2px solid;
  border-color: #DCDCDC;
  background: #FFFFFF;
  border-radius: 9px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 9px;
  color: #133777;
  padding: 10px;
  }
  
`;

export const Input = styled.input`
  width: 500px;
  height: 42px;
  left: 50px;
  top: 178.5px;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
