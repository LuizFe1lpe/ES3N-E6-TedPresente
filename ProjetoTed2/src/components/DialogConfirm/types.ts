export interface DialogConfirmDataProps {
  isVisible: boolean;
  message: string;
  data?: any;
}

export interface DialogConfirmActionProps {
  onClose: () => void;
  handleAction: () => void;
}

export type DialogConfirmProps = DialogConfirmDataProps &
  DialogConfirmActionProps;
