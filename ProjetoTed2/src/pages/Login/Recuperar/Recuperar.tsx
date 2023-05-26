import React, { useState } from "react";
import { View, FormWrapper, ContainerMenu } from "./style";
import { Formik, Form, Field } from "formik";
import { validationSchema } from "./validation/schema";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { user } from "../../../service/requests/user";
import { toastfyError } from "../../../components/Toastfy";
const steps = [
  "Digite o Email da sua conta",
  "Digite o codigo enviado no seu email",
  "Digite a nova Senha",
];

export default function Recuperar() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
  };

  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  const toLogin = () => {
    navigate("/");
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const stepperRequest = async (step: number) => {
    setLoading(true);
    switch (step) {
      case 0:
        await user
          .recoveryEmail({ email: email, codigoRecuperacao: "", senha: "" })
          .finally(() => {
            setLoading(false);
          });
        break;
      case 1:
        await user
          .revoveryCode({
            email: email,
            codigoRecuperacao: codigo,
            senha: "",
          })
          .finally(() => {
            setLoading(false);
          });
        break;
      case 2:
        await user
          .recoveryPassword({
            email: email,
            senha: senha,
            codigoRecuperacao: "",
          })
          .finally(() => {
            setLoading(false);
          });
        break;
    }
  };

  const handleNext = () => {
    stepperRequest(activeStep)
      .then(() => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      })
      .catch(() => {
        if (activeStep === 0) toastfyError("Email Nao Encontrado!");
        if (activeStep === 1) toastfyError("Codigo Invalido!");
        if (activeStep === 2) toastfyError("Erro ao alterar Senha!");
      });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    navigate("/");
  };

  return (
    <View>
      <FormWrapper>
        <div>
          <img
            style={{ cursor: "pointer" }}
            src={require("../../../images/logo.png")}
            alt={"logo"}
            onClick={toLogin}
          />
        </div>
        <Formik
          initialValues={{
            email: "",
            codigo: "",
            senha: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form onKeyDown={onKeyDown}>
              <ContainerMenu>
                <Stepper activeStep={activeStep}>
                  {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                      optional?: React.ReactNode;
                    } = {};
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      Senha alterada com Sucesso!
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button onClick={handleReset}>Finalizar</Button>
                    </Box>
                  </>
                ) : (
                  <>
                    {activeStep === 0 ? (
                      <>
                        <Field
                          name="email"
                          style={{ width: "100%" }}
                          as={TextField}
                          label="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        {errors.email && touched.email ? (
                          <div>Email Invalido!</div>
                        ) : null}
                      </>
                    ) : null}
                    {activeStep === 1 ? (
                      <>
                        <Field
                          name="codigo"
                          style={{ width: "100%" }}
                          as={TextField}
                          label="Codigo"
                          onChange={(e) => setCodigo(e.target.value)}
                          value={codigo}
                        />
                        {errors.codigo && touched.codigo ? (
                          <div>{errors.codigo}</div>
                        ) : null}
                      </>
                    ) : null}
                    {activeStep === 2 ? (
                      <>
                        <Field
                          name="senha"
                          style={{ width: "100%" }}
                          as={TextField}
                          label="Senha"
                          type="password"
                          onChange={(e) => setSenha(e.target.value)}
                          value={senha}
                        />
                        {errors.senha && touched.senha ? (
                          <div>{errors.senha}</div>
                        ) : null}
                      </>
                    ) : null}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Voltar
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {loading ? (
                        "Enviando..."
                      ) : (
                        <Button onClick={handleNext}>
                          {activeStep === steps.length - 1
                            ? "Finalizar"
                            : "Proximo"}
                        </Button>
                      )}
                    </Box>
                  </>
                )}
              </ContainerMenu>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </View>
  );
}
