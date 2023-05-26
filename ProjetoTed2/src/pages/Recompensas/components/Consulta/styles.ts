import styled from "styled-components";
import { root } from "../../../../styles/var";
import { styled as styledMui, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const Search = styledMui("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styledMui("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: "#E2E8F0",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styledMui(InputBase)(({ theme }) => ({
  color: "#00000099",
  height: "40px",
  border: "1px solid #E2E8F0",
  boxSizing: "border-box",
  borderRadius: "4px",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    width: "228px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const MenuRight = styledMui("div")(({ theme }) => ({
  color: "#E2E8F0",
  height: "100%",
  display: "flex",
}));

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  gap: 30px;
  @media (max-width: 768px) {
    height: 180vh;
    width: 40vh;
  }
`;

export const ContainerSaldo = styled.div`
    width: 99%;
    height: 57px;
    border-radius: 9.03px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    gap: 42px;
    background-color: #fff;
    border: ${root.borderForm};
    justify-content: space-around;
    align-items: center;
    display:flex;
    div {
        align-items: left;
        display: flex;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 19px;
        color: #133777;
        text-align: justify;
        padding:10px;
      }
    @media (max-width: 768px) {
      display: flex;
      width: 50vh;
      margin-bottom: 20px;
    }
`;

export const ContainerMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #133777;
    text-align: center;
  }
  @media (max-width: 768px) {
    height: 160vh;
    width: 50vh;
    align-content: flex-start;
    .arrow {
      display: none;
    }
  }
`;

export const ItemDiv = styled.div`
  width: 27vh;
  height: 250px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #133777;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #133777;
  border-radius: 20px;
  border: ${root.borderForm};
  background-color: #fff;
  width: 190px;
  height: 32px;
`;

export const ContainerItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 60%;
  column-gap: 40px;
  @media (max-width: 1210px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    display: flex;
    height: 40vh;
    width: 50vh;
    flex-direction: row;
    row-gap: 100px;
    flex-wrap: wrap;
  }
`;

export const TitleRecompensas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 30px;
  div {
    align-items: center;
    width: 35%;
    height: 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #133777;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: flex;
    height: 10vh;
    width: 50vh;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  height: 80px;
  width: 30%;
  button {
    cursor: pointer;
    background: #133777;
    color: #ffffff;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 15px;
    border-radius: 100px;
    transition: 0.2s;
  }
  button:hover {
    transform: scale(1.2);
  }
`;

export const ResgateDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: 52%;
  width: 100%;
  p {
    font-size: 20px;
    padding: 10px;
    text-align: justify;
    font-family: Roboto;
    color: #133777;
    font-style: normal;
    font-weight: bold;
  }
`;

export const Select = styled.select`
    width: 100%;
    height: 50%;
    font-size: 15px;
    color: #666666;
    border-radius: 5px;
    border: 1px double #c4c4c4;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%)
`;
