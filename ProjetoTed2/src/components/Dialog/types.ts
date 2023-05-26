import { ReactNode } from "react";

export interface OwnProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  showConfirmOnClose?: boolean;
  width?: "xs" | "sm" | "md";
  title?: string;
  type?: "cadastro" | "selecao";
}

export type Props = OwnProps;
