export interface OwnProps {
  variant?: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  styles?: Styles;
  type?: "submit";
}

interface Styles {
  borderRadius?: string;
  marginBottom?: string;
}
