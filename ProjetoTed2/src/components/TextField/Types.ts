import { ReactElement } from "react";

export interface TextFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  defaultValue?: any;
  displayNone?: boolean;
}
