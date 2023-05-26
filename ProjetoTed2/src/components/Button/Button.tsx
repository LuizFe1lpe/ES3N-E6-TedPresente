import { styles as stylesPattern } from "./styles";
import { Button as MaterialButton } from "@mui/material";
import { OwnProps } from "./types";

export default function Button(props: OwnProps) {
  const { variant, disabled = false, onClick, children, styles } = props;
  const stylesProps = styles ? styles : stylesPattern;

  return (
    <MaterialButton
      style={stylesProps}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      children={children}
    />
  );
}
