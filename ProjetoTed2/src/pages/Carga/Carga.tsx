import { Container, FormControl } from "./styles";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import Individual from "./components/Individual";
import Externo from "./components/Externo";
import Interno from "./components/Interno";

export default function Carga() {
  const [tipoMerito, setTipomerito] = useState<string>("individual");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipomerito((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Container>
        <FormControl>
          <RadioGroup
            row
            name="use-radio-group"
            onChange={handleChange}
            value={tipoMerito}
          >
            <FormControlLabel
              value="individual"
              label="Mérito Individual"
              control={<Radio />}
              labelPlacement="bottom"
            />
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
          {tipoMerito === "individual" && <Individual />}
          {tipoMerito === "interno" && <Interno />}
          {tipoMerito === "externo" && <Externo />}
        </Container>
      </Container>
    </>
  );
}
