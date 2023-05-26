import { Button, CircularProgress } from "@mui/material";
import clsx from "clsx";
import { FormikContext } from "formik";
import { ReactElement, useContext, useEffect, useState } from "react";
import useStyles from "./styles";
import { Props } from "./types";

export default function SubmitButton({
  children,
  descricao,
  isSubmitting = false,
  ...buttonProps
}: Props): ReactElement {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useContext(FormikContext);
  const formikIsSubmitting = formik && formik.isSubmitting;

  useEffect(() => {
    setIsLoading(formikIsSubmitting);
  }, [formikIsSubmitting, setIsLoading]);

  return (
    <Button
      {...buttonProps}
      variant="contained"
      size="medium"
      type="submit"
      disabled={isLoading}
      className={clsx(buttonProps.className, {
        [classes.buttonLoading]: isLoading,
      })}
    >
      {isLoading && <CircularProgress size={20} color="inherit" />} Salvar
    </Button>
  );
}
