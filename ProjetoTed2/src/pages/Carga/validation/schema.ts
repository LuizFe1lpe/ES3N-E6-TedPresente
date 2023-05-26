import * as Yup from "yup";
export const chargeValidation = Yup.object().shape({
  quantidade: Yup.number()
    .required("Preencha a Quantidade!")
    .typeError("Campo Numerico"),
  motivo: Yup.string().required("Preencha o Motivo!").min(20, "Movito precisa ter 20 characteres"),
});
