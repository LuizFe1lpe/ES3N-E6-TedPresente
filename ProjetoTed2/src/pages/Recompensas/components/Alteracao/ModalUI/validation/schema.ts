import * as yup from "yup";
import { validationMessages } from "../../../../../../helper";

const validationSchema = (required: string, invalid?: string): any =>
  yup.object().shape({
    nome: yup.string().required(required),
    valor: yup.number().typeError("Campo Numerico"),
    prazo: yup.number().typeError("Campo Numerico"),
  });

export const validationForm = validationSchema(
  validationMessages[0],
  validationMessages[1]
);
