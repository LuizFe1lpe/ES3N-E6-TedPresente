import { useState } from "react";
import { Container, FormControl } from "./styles";
import { FormControlLabel, RadioGroup, Radio } from "@mui/material";
import Externo from "./components/Externo";
import Interno from "./components/Interno";
import Individual from "./components/Individual";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";

export default function Distribuicao() {
  const [formValue, setFormValue] = useState<String>("interno");
  const permission = useSelector(
    (state: RootState) => state.user.tipoUsuario?.id
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((event.target as HTMLInputElement).value);
  };

  return (
    <Container>
      <FormControl>
        <RadioGroup
          row
          name="use-radio-group"
          onChange={handleChange}
          value={formValue}
        >
          {permission === 1 ? (
            <FormControlLabel
              value="individual"
              label="Mérito Individual"
              control={<Radio />}
              labelPlacement="bottom"
            />
          ) : null}
          <FormControlLabel
            value="interno"
            label="Mérito Interno"
            control={<Radio />}
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="externo"
            label="Mérito Externo"
            control={<Radio />}
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
      <Container>
        {formValue === "individual" && <Individual />}
        {formValue === "interno" && <Interno />}
        {formValue === "externo" && <Externo />}
      </Container>
    </Container>
  );
}
