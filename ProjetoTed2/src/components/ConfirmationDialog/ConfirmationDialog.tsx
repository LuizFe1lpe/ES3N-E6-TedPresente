import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { ReactElement } from "react";
import { Props } from "./types";

export default function ConfirmationDialog({
  open,
  title,
  text,
  onClose,
}: Props): ReactElement {
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      aria-labelledby="uno-confirmation-dialog-title"
      aria-describedby="uno-confirmation-dialog-description"
    >
      <DialogTitle id="uno-confirmation-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="uno-confirmation-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
          }}
          color="primary"
          variant="contained"
          size="medium"
        >
          Cancelar
        </Button>
        <Button
          onClick={() => {
            onClose();
          }}
          color="primary"
          variant="contained"
          size="medium"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
