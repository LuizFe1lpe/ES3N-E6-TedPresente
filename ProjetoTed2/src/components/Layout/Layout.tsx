import { Grid } from "./styles";
import Content from "./Content";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }: any) => {

  return (
    <Grid>
      <NavBar />
      <SideBar />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
