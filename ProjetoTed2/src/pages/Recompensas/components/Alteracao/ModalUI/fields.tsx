import TextFieldComponent from "../../../../../components/TextField";
import { ReactElement } from "react";

export function Textfield(props: {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
}): ReactElement {
  const { name, label, required = false, disabled = false } = props;

  return (
    <TextFieldComponent
      name={name}
      label={label}
      required={required}
      disabled={disabled}
    />
  );
}
