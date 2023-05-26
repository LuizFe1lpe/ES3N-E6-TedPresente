import TerceiroContext from "../context";
import { ReactElement, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../service/store";
import { Textfield } from "../../Recompensas/components/Alteracao/ModalUI/fields";
import { Grid } from "@mui/material";
import DialogForm from "../../../components/DialogForm";
import { TerceiroForm } from "./types";
import { FormikHelpers } from "formik";
import { Cliente } from "../types";
/* import { reward } from "../../../../../service/requests/reward"; */
import { toastfyError, toastfySuccess } from "../../../components/Toastfy";
import { validationForm } from "../../Recompensas/components/Alteracao/ModalUI/validation/schema";

export default function ModalFunc() {
	const {
		setSelected,
		showEditModal,
		setShowEditModal,
		selectedEdit,
		setRefresh,
		refresh,
	} = useContext(TerceiroContext);
	const [image64, setImage64] = useState("");

	const id = useSelector((state: RootState) => state.user.id);

	const formValues = useMemo(() => {
		return {
			id: selectedEdit?.id,
			nome: selectedEdit?.nome,
			email: selectedEdit?.email,
			cpf: selectedEdit?.cpf,
		} as TerceiroForm;
	}, [selectedEdit]);

	const onSubmit = (
		values: TerceiroForm,
		helpers: FormikHelpers<TerceiroForm>
	) => {
		const model = {
			id: values?.id,
			codigo: values?.codigo,
			nome: values?.nome,
			email: values?.email,
			cpf: values.cpf,
		} as Cliente;

		/* if (model.id) {
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
					toastfyError(
						"Erro ao editar Recompensa! - Tamanho da imagem Maximo 800kb"
					);
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
					toastfyError(
						"Erro ao Criar Recompensa! - Tamanho da imagem Maximo 800kb"
					);
					setRefresh(!refresh);
				});
		} */
	};

	const fields = (): ReactElement[] => {
		const fields: ReactElement[] = [];

		fields.push(
			<Grid item xs={6}>
				<Textfield name='nome' label='Nome' required />
			</Grid>
		);

		fields.push(
			<Grid item xs={6}>
				<Textfield name='email' label='E-mail' required />
			</Grid>
		);

		fields.push(
			<Grid item xs={6}>
				<Textfield name='cpf' label='CPF' required />
			</Grid>
		);

		fields.push(
			<Grid item xs={6}>
				<Textfield name='telefone' label='telefone' required />
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
			title={"Clientes"}
			open={showEditModal.isVisible}
			initialValues={formValues}
			fields={fields()}
			validationSchema={validationForm}
			width='sm'
			onSubmit={onSubmit}
			onClose={handleCloseModal}
		/>
	);
}
