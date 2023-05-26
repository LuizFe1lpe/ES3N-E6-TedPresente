import styled from "styled-components";

export const SideMenu = styled.nav`
  grid-area: SB;
  background-color: #133777;
  color: #ffffff;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    margin: 10px;
    color: #ffffff;
    .hamburguer {
      display: none;
    }
    @media (max-width: 768px) {
      justify-content: space-between;
      .hamburguer {
        display: flex;
      }
    }
  }
  .menu {
    color: #ffffff;
    text-align: left;
    margin-left: 10px;
  }
`;

export const ButtonStyle = {
  borderRadius: "0",
  width: "100%",
  height: "54px",
  backgroundColor: "#808080",
};
