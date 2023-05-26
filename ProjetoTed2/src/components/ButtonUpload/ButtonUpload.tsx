import { styles as stylesPattern } from "./styles";
import { OwnProps } from "./types";
import { Button } from "@mui/material";

export default function ButtonUpload(props: OwnProps) {
  const { disabled = false, onClick, styles } = props;
  const stylesProps = styles ? styles : stylesPattern;

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button
          style={stylesProps}
          variant="contained"
          color="secondary"
          component="span"
          disabled={disabled}
          onClick={onClick}
        >
          Upload de imagem
        </Button>
      </label>
    </div>
  );
}
