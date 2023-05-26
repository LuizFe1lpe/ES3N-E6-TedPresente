import styledComp from "styled-components";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const ContainerMenu = styledComp.div`
  display: grid;
  border: 2px solid;
  border-color: #FFF;
  box-shadow: 1px 1px 1px white;
  grid-area: NB;
`;

export const Menu = styledComp.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
  margin:10px;
`;

export const Search = styled("div")(({ theme }) => ({
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

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: "#E2E8F0",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#00000099",
  height: "40px",
  border: "1px solid #E2E8F0",
  boxSizing: "border-box",
  borderRadius: "4px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "228px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const MenuRight = styled("div")(({ theme }) => ({
  color: "#4A5568",
  height: "100%",
  display: "flex",
  alignItems: "center",
  fontFamily: "Roboto"
}));
