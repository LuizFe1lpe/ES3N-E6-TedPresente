import styled from "styled-components";
import { root } from "../../styles/var";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: ${root.boxShadow};
  text-align: center;
  font-family: Roboto, Arial, sans-serif;
`;

export const buttonStyles = {
  borderRadius: "100px",
};

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 600px;
  height: 687px;
  color: #a52a2a;
  border: 2px solid;
  border-color: #fff;
  border-radius: 9px;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  gap: 10px;

  p {
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 19px;
    color: #133777;
    text-align: justify;
    margin-right: 65%;
  }

  TextField {
    width: 300px;
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 400px;
  height: 55px;
  blend: pass through;
  border: ${root.borderForm};
  background: #FFFFFF;
  border-radius: 9px;
  font-style: normal;
  font-weight: bold;
  margin-top: 20px;
  font-size: 8px;
  line-height: 9px;
  color: #133777;
  padding: 10px;
  
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
