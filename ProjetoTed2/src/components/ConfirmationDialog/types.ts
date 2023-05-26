interface OwnProps {
  open: boolean;
  title: string;
  text: string;
  onClose: () => void;
  onConfirm: () => void;
  onCancel?: () => void;
}

export type Props = OwnProps;
