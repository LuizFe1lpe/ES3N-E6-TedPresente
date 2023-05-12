export interface FormHookType {
  msg?: string;
  error?: boolean;
  value: string;
}

export interface SearchTypes {
  onChange: (ev: any) => void;
  value: string;
  onClose: () => void;
}
