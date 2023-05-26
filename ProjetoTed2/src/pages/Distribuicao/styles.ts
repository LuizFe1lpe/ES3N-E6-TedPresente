import styled from "styled-components";
import { root } from "../../styles/var";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 7px;
  background: #ffff;
  border-radius: 20px;
  padding-bottom: 1%;
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 55px;
  border: ${root.borderForm}
  background: #FFFFFF;
  border-radius: 9;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 9px;
  color: #133777;
  padding: 10px;
  border-radius: 9px;
  }
`;

export const buttonStyles = {
  borderRadius: "100px",
};
