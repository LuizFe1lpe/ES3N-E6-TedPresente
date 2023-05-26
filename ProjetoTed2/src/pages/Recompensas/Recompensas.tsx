import { useState, useEffect } from "react";
import { Container, FormControl } from "./styles";
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";
import Consulta from "./components/Consulta";
import Alteração from "./components/Alteracao";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import { isTokenValid } from "../../service/firebase";
import { user } from "../../service/requests/user";

export default function Recompensas() {
  const [formValue, setFormValue] = useState<String>("consulta");
  const [token, setToken] = useState<string>("");
  const permission = useSelector(
    (state: RootState) => state.user.tipoUsuario?.id
  );
  const idUser = useSelector((state: RootState) => state.user.id);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    isTokenValid(setToken);
    if (token !== "") {
      console.log(token)
      user.saveToken({ id: idUser, webToken_firebase: token }).then(() => {
        console.log("token salvo");
      });
    }
  }, [token, idUser]);

  return (
    <Container>
      {permission === 1 ? (
        <FormControl>
          <RadioGroup
            row
            name="use-radio-group"
            onChange={handleChange}
            value={formValue}
          >
            <FormControlLabel
              value="consulta"
              label="Consulta"
              control={<Radio />}
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="alteracao"
              label="Cadastro e Alteração"
              control={<Radio />}
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      ) : null}
      <Container>
        {formValue === "consulta" && <Consulta />}
        {formValue === "alteracao" && <Alteração />}
      </Container>
    </Container>
  );
}
