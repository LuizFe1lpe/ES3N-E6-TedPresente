import { ButtonProps } from "@mui/material";

export interface OwnProps {
  children?: string;
  descricao?: string;
  isSubmitting?: boolean;
}

export type Props = OwnProps & ButtonProps;
