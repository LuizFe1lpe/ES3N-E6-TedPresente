import ButtonUpload from "../../components/ButtonUpload";
import { Container, ContainerMenu } from "./styles";
import { MenuItem, Select, TextField } from "@mui/material";
import Submit from "../../components/Button";

export default function Usuario() {
  return (
    <Container>
      <ContainerMenu>
        <p>Nome</p>
        <TextField style={{ width: "85%" }} />
        <p>Email</p>
        <TextField id="outlined-basic" style={{ width: "85%" }} />
        <p>Perfil de acesso</p>
        <Select style={{ width: "85%" }}>
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={2}>Gestor</MenuItem>
          <MenuItem value={3}>Surpevisor</MenuItem>
          <MenuItem value={3}>Funcionario</MenuItem>
        </Select>
        <ButtonUpload />
        <Submit variant="contained">Confirmar</Submit>
      </ContainerMenu>
    </Container>
  );
}
