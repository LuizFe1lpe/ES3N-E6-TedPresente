import PedidoContext from "../context";
import { ReactElement, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../service/store";
import { Textfield } from "./fields";
import { Grid } from "@mui/material";
import DialogForm from "../../../../../components/DialogForm";
import { RecompensaForm } from "./types";
import { FormikHelpers } from "formik";
import { Recompensa } from "../types";
import { validationForm } from "./validation/schema";
import { reward } from "../../../../../service/requests/reward";
import {
  toastfyError,
  toastfySuccess,
} from "../../../../../components/Toastfy";
//todo: fazer dinamicamente o input do usuario responsavel pela recompensa
export default function ModalUI() {
  const {
    setSelected,
    showEditModal,
    setShowEditModal,
    selectedEdit,
    setRefresh,
    refresh,
  } = useContext(PedidoContext);
  const [image64, setImage64] = useState("");

  const id = useSelector((state: RootState) => state.user.id);

  const formValues = useMemo(() => {
    return {
      id: selectedEdit?.id,
      nome: selectedEdit?.nome,
      valor: selectedEdit?.valor,
      imagem: selectedEdit?.imagem,
      prazo: selectedEdit?.prazo,
    } as RecompensaForm;
  }, [selectedEdit]);

  const onChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await toBase64(file);
    setImage64(String(base64));
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit = (
    values: RecompensaForm,
    helpers: FormikHelpers<RecompensaForm>
  ) => {
    const model = {
      id: values?.id,
      nome: values?.nome,
      valor: values?.valor,
      prazo: values?.prazo,
      usuario: {
        id: id,
      },
      is_active:true,
      imagem: image64 ? image64.split(",")[1] : selectedEdit?.imagem,
    } as Recompensa;

    if (model.id) {
      reward
        .put(model)
        .then(() => {
          setShowEditModal({ isVisible: false, mode: "" });
          helpers.setSubmitting(true);
          toastfySuccess("Recompensa editada com Sucesso!");
          setRefresh(!refresh);
        })
        .catch(() => {
          setShowEditModal({ isVisible: false, mode: "" });
          helpers.setSubmitting(false);
          toastfyError("Erro ao editar Recompensa! - Tamanho da imagem Maximo 800kb");
          setRefresh(!refresh);
        });
    } else {
      reward
        .create(model)
        .then(() => {
          setShowEditModal({ isVisible: false, mode: "" });
          helpers.setSubmitting(true);
          toastfySuccess("Recompensa Criada Com Sucesso!");
          setRefresh(!refresh);
        })
        .catch(() => {
          setShowEditModal({ isVisible: false, mode: "" });
          helpers.setSubmitting(false);
          toastfyError("Erro ao Criar Recompensa! - Tamanho da imagem Maximo 800kb");
          setRefresh(!refresh);
        });
    }
  };

  const fields = (): ReactElement[] => {
    const fields: ReactElement[] = [];

    fields.push(
      <Grid item xs={12}>
        <Textfield name="nome" label="Nome" required />
      </Grid>
    );

    fields.push(
      <Grid item xs={6}>
        <Textfield name="valor" label="Valor" required />
      </Grid>
    );

    fields.push(
      <Grid item xs={6}>
        <Textfield name="prazo" label="Prazo" required />
      </Grid>
    );

    fields.push(
      <Grid item xs={12}>
        <input name="file" type="file" onChange={(event) => onChange(event)} />
      </Grid>
    );

    fields.push(
      <Grid item xs={12}>
        <div>Maximo de 800kb</div>
        <img
          src={`data:image/png;base64,${selectedEdit?.imagem}`}
          height="100px"
          alt="Sem Imagem"
        />
      </Grid>
    );

    return fields;
  };

  const handleCloseModal = () => {
    setSelected([]);
    setShowEditModal({ isVisible: false, mode: "" });
  };

  return (
    <DialogForm
      title={"Produto"}
      open={showEditModal.isVisible}
      initialValues={formValues}
      fields={fields()}
      validationSchema={validationForm}
      width="sm"
      onSubmit={onSubmit}
      onClose={handleCloseModal}
    />
  );
}
