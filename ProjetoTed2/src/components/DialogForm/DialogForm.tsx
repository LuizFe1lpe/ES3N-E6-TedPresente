import { Paper, Grid, DialogActions, DialogContent } from "@mui/material";
import { Form, Formik } from "formik";
import React, { ReactElement } from "react";
import Dialog from "../Dialog";
import { Props } from "./types";
import SubmitButton from "../SubmitButton";

export default function DialogForm({
  open,
  onClose,
  fields,
  initialValues,
  onSubmit,
  validate,
  width = "md",
  title,
  showConfirmOnClose = true,
  validationSchema,
}: Props<any>): ReactElement {
  return (
    <Dialog
      showConfirmOnClose={showConfirmOnClose}
      open={open}
      onClose={onClose}
      width={width}
      type="cadastro"
      title={title}
    >
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <DialogContent
            style={{ padding: "10px", background: "#F1F5F8" }}
            dividers={true}
          >
            <Paper style={{ padding: "5px" }}>
              <Grid container spacing={1} alignItems="flex-end">
                {fields.map((f, index) => (
                  <React.Fragment key={index}>{f}</React.Fragment>
                ))}
              </Grid>
            </Paper>
          </DialogContent>
          <DialogActions>
            <SubmitButton descricao="Salvar" />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
}
