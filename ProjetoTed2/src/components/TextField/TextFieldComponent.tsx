import React, { ReactElement, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { TextFieldProps } from "./Types";

export default function TextFieldComponent(
  props: TextFieldProps
): ReactElement {
  const {
    name,
    label,
    required = false,
    disabled = false,
    icon,
    defaultValue,
    displayNone = false,
  } = props;
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (defaultValue) {
      setFieldValue(name, defaultValue);
    }
  }, [defaultValue, name, setFieldValue]);

  const styledDisplay = displayNone
    ? { display: "none" }
    : { display: "", padding: "11px" };

  const input = (
    <TextField
      id={name}
      style={styledDisplay}
      disabled={disabled}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      label={label + (required ? "*" : "")}
      fullWidth
      margin="none"
      {...field}
    />
  );

  const areaInput =
    icon === undefined ? (
      <>{input}</>
    ) : (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item xs={3}>
          {icon}
        </Grid>
        <Grid item xs={9}>
          {input}
        </Grid>
      </Grid>
    );

  return <>{areaInput}</>;
}
