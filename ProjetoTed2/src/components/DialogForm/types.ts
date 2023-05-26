import { FormikHelpers } from "formik";
import { ReactElement } from "react";

export interface Props<T> {
  open: boolean;
  onClose: () => void;
  fields: ReactElement[];
  initialValues: T;
  onSubmit: (valuesForm: T, helpers: FormikHelpers<T>) => void;
  validate?: (values: T) => void;
  showConfirmOnClose?: boolean;
  width?: "xs" | "sm" | "md";
  validationSchema?: {};
  title?: string;
}

// export type Props = OwnProps;
