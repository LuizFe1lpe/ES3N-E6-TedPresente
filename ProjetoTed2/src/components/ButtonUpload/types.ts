export interface OwnProps {
  variant?: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  styles?: Styles;
}

interface Styles {
  borderRadius?: string;
}
