import styled from "styled-components";
import { root } from "../../styles/var";
export const Container = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: ${root.boxShadow};
  text-align: center;
  border-radius: 0 40px 0 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: ${root.boxShadow};
  text-align: center;
  border-radius: 0 0 40px 0;
`;

export const BoxComponent = styled.div`
  width: 100%;
  height:50%;
  border-radius: 9px;
  h1{
    margin-bottom:30px;
  }
`;

export const BoxBottomComponent = styled.div`
  width: 100%;
  height:50%;
  padding:10px;
  display:flex;
  flex-direction: column;
  align-items: start;
  border: ${root.borderForm}
  border-radius: 9px;
`;

export const SideMenu = styled.div`
  height: 100%;
  width: 123px;
  background-color: rgba(151, 217, 225, 0.18);
  display: flex;
  flex-direction: column;
  border-radius: 40px 0 0 40px;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    display: none;
    width: 50vh;
    margin-bottom: 20px;
  }
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
