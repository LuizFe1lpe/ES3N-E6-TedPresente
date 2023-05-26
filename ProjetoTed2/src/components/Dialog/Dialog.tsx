import { ReactElement, useState } from "react";
import { Dialog, DialogContent, DialogTitle, Toolbar } from "@mui/material";
import { Props } from "./types";
import useStyles from "./styles";
import ConfirmationDialog from "../ConfirmationDialog";

export default function PradoDialog({
  children,
  open,
  onClose,
  width = "md",
  title,
  type = "selecao",
}: Props): ReactElement {
  const classes = useStyles();
  const [closeConfirmationOpen, setCloseConfirmationOpen] = useState(false);
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth={width}>
        <DialogTitle className={classes.headerRoot}>
          <Toolbar className={classes.headerContent}>
            {title}
            <div className={classes.spacer} />
          </Toolbar>
        </DialogTitle>

        {type === "selecao" ? (
          <DialogContent className={classes.content}>{children}</DialogContent>
        ) : (
          <>{children}</>
        )}
      </Dialog>

      <ConfirmationDialog
        open={closeConfirmationOpen}
        title="Atenção!"
        text="Deseja realmente fechar esta janela?"
        onClose={() => {
          setCloseConfirmationOpen(false);
        }}
        onConfirm={onClose}
      />
    </>
  );
}
