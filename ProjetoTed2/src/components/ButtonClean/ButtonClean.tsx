import { styles as stylesPattern } from "./styles";
import { OwnProps } from "./types";
import { Button } from "@mui/material";

export default function ButtonClean(props: OwnProps) {
  const { disabled = false, onClick, styles } = props;
  const stylesProps = styles ? styles : stylesPattern;

  return (
    <div>
      <input style={{ display: "none" }} id="contained-button-clean" />
      <Button
        style={stylesProps}
        variant="contained"
        color="secondary"
        component="span"
        disabled={disabled}
        onClick={onClick}
      >
        Limpar
      </Button>
    </div>
  );
}
