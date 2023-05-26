import { useContext } from "react";
import TableListData from "../../../../components/TableData";
import { Recompensa } from "./types";
import RecompensaContext from "./context";
import DialogConfirm from "../../../../components/DialogConfirm";
import { reward } from "../../../../service/requests/reward";
import { toastfySuccess } from "../../../../components/Toastfy";
export default function TableData() {
  const {
    collection,
    setIsLoading,
    showDialogConfirm,
    setShowDialogConfirm,
    setSelectedEdit,
    setShowEditModal,
    setRefresh,
    refresh,
  } = useContext(RecompensaContext);

  function handleDelete(data: Recompensa | Recompensa[]) {
    handleDialogConfirmClose();
    const selected = data as Recompensa;
    setIsLoading(true);
    reward.remove(selected.id).then(() => {
      toastfySuccess("Item Excluido Com Sucesso!!");
      setIsLoading(false);
      setRefresh(!refresh);
    });
  }

  const handleNew = () => {
    setSelectedEdit(null);
    setShowEditModal({ isVisible: true, mode: "insert" });
  };

  const handleEdit = (data: Recompensa | Recompensa[]) => {
    const selected = data as Recompensa;
    if (selected !== undefined) {
      setSelectedEdit(selected);
      setShowEditModal({ isVisible: true, mode: "update" });
    }
  };

  const handleDialogConfirmClose = () => {
    setShowDialogConfirm({ isVisible: false, message: "", data: {} });
  };

  const handleDialogConfirmOpen = (data: Recompensa | Recompensa[]) => {
    setShowDialogConfirm({
      isVisible: true,
      message: "Excluir Item",
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
        title="Recompensas"
        data={collection}
        columns={[
          { title: "Nome", field: "nome" },
          { title: "Valor", field: "valor" },
        ]}
        actions={[
          {
            icon: "edit",
            tooltip: "Editar Recompensa",
            onClick: (event, data) => handleEdit(data),
          },
          {
            icon: "delete",
            tooltip: "Deletar Recompensa",
            onClick: (event, data) => handleDialogConfirmOpen(data),
          },
          {
            icon: "add",
            tooltip: "Add Produto",
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
