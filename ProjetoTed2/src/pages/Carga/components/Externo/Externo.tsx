import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { chargeValidation } from "../../validation/schema";
import {
    TextField,
    Button,
  } from "@mui/material";

import { ContainerMenu } from "../../styles";
import { postCharge } from "../../../../service/store/features/chargeSlice";
import { ChargePayload } from "../../../../service/requests/charge/types";
import { RootState } from "../../../../service/store";

import { toastfySuccess, toastfyError } from "../../../../components/Toastfy";

export default function Externo() {

    const dispatch = useDispatch();
    const idUser = useSelector((state: RootState) => state.user.id);

    async function onSubmit(values: any) {
        const payload: ChargePayload = {
          quantidade: Number(values.quantidade),
          motivo: values.motivo,
          tipoMerito: {
            id: 3,
          },
          usuario: {
            id: idUser,
          },
        };
        if (values.motivo.length >= 20) {
          toastfySuccess("Carga Realizada com Sucesso!");
          dispatch(postCharge(payload));
        } else {
          toastfyError("O tamanho mínimo para o motivo é de 20 caracteres");
        }
      }

      function onKeyDown(keyEvent) {
        if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
          keyEvent.preventDefault();
        }
      }

      
    return (
        <Formik
          initialValues={{
            quantidade: "",
            motivo: "",
          }}
          validationSchema={chargeValidation}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm({ values: { motivo: "", quantidade: "" } });
          }}
        >
          {({ errors, touched }) => (
            <Form onKeyDown={onKeyDown}>
              <ContainerMenu>
                <p>Quantidade*</p>
                <Field
                  name="quantidade"
                  style={{ width: "500px" }}
                  as={TextField}
                />
                {errors.quantidade && touched.quantidade ? (
                  <div>{errors.quantidade}</div>
                ) : null}
                <p>Motivo*</p>
                <Field
                  name="motivo"
                  style={{ width: "500px" }}
                  as={TextField}
                />
                {errors.motivo && touched.motivo ? (
                  <div>{errors.motivo}</div>
                ) : null}
                <Button variant="contained" type="submit" style={{borderRadius:0,textTransform:'none'}}>
                  Confirmar
                </Button>
              </ContainerMenu>
            </Form>
          )}
        </Formik>
    )
}