import { CircularProgress } from "@mui/material";
import { Container } from "./styles";

const SplashScreen: React.FC = () => {
  return (
    <Container>
      <img src={require("../../images/logo.png")} alt="Logo Prado" />
      <CircularProgress color="secondary" size={45} />
    </Container>
  );
};

export default SplashScreen;
