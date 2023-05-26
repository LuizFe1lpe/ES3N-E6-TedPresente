import { useContext } from "react";
import TableListData from "../../components/TableData";
import TerceiroContext from "./context";
import DialogConfirm from "../../components/DialogConfirm";
import { toastfySuccess } from "../../components/Toastfy";
import { Cliente } from "./types";
import { FuncTerceiroMock } from "./mocks";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function TableFunc() {
	const {
		collection,
		setIsLoading,
		showDialogConfirm,
		setShowDialogConfirm,
		setSelectedEdit,
		setShowEditModal,
		setRefresh,
		refresh,
	} = useContext(TerceiroContext);

	function handleDelete(data: Cliente | Cliente[]) {
		handleDialogConfirmClose();
		const selected = data as Cliente;
		setIsLoading(true);

		/* reward.remove(selected.id).then(() => {
			toastfySuccess("Item Excluido Com Sucesso!!");
			setIsLoading(false);
			setRefresh(!refresh);
		}); */
	}

	const handleNew = () => {
		setSelectedEdit(null);
		setShowEditModal({ isVisible: true, mode: "insert" });
	};

	const handleEdit = (data: Cliente | Cliente[]) => {
		const selected = data as Cliente;
		if (selected !== undefined) {
			setSelectedEdit(selected);
			setShowEditModal({ isVisible: true, mode: "update" });
		}
	};

	const handleDialogConfirmClose = () => {
		setShowDialogConfirm({ isVisible: false, message: "", data: {} });
	};

	const handleDialogConfirmOpen = (data: Cliente | Cliente[]) => {
		setShowDialogConfirm({
			isVisible: true,
			message: "Desativar Cliente",
			data: data,
		});
	};

	return (
		<>
			{showDialogConfirm && (
				<DialogConfirm
					isVisible={showDialogConfirm.isVisible}
					message={showDialogConfirm.message}
					onClose={handleDialogConfirmClose}
					data={showDialogConfirm.data}
					handleAction={() => handleDelete(showDialogConfirm?.data)}
				/>
			)}
			<TableListData
				title='Clientes'
				data={FuncTerceiroMock}
				columns={[
					{ title: "Nome", field: "nome" },
					{ title: "E-mail", field: "email" },
					{ title: "CPF", field: "CPF" },
					{ title: "telefone", field: "telefone" },
				]}
				actions={[
					{
						icon: "edit",
						tooltip: "Editar Cliente",
						onClick: (event, data) => handleEdit(data),
					},
					{
						icon: () => <PowerSettingsNewIcon />,
						tooltip: "Desativar Cliente",
						onClick: (event, data) => handleDialogConfirmOpen(data),
					},
					{
						icon: "add",
						tooltip: "Cadastrar Cliente",
						isFreeAction: true,
						onClick: () => handleNew(),
					},
				]}
				options={{
					actionsColumnIndex: -1,
				}}
			/>
		</>
	);
}
