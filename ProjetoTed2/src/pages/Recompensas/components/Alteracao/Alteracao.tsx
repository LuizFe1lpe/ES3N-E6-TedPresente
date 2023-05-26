import UnidadeContext from "./context";
import { ReactElement, useEffect, useState } from "react";
import { Recompensa, DialogConfirmDataProps, ModalProps } from "./types";
import SplashScreen from "../../../../components/SplashScreen";
import TableData from "./TableData";
import ModalUI from "./ModalUI";
import { reward } from "../../../../service/requests/reward";

export default function Alteracao(): ReactElement {
  const [collection, setCollection] = useState<Recompensa[]>([]);
  const [selectedEdit, setSelectedEdit] = useState<Recompensa | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showEditModal, setShowEditModal] = useState<ModalProps>({
    isVisible: false,
    mode: "",
  });
  const [showDialogConfirm, setShowDialogConfirm] =
    useState<DialogConfirmDataProps | null>(null);
  const [refresh, setRefresh] = useState(false);

  const initialContext = {
    collection,
    setCollection,
    selectedEdit,
    setSelectedEdit,
    selected,
    setSelected,
    isLoading,
    setIsLoading,
    showTable,
    setShowTable,
    showEditModal,
    setShowEditModal,
    showDialogConfirm,
    setShowDialogConfirm,
    refresh,
    setRefresh,
  };

  useEffect(() => {
    reward.get().then((response) => {
      const data = response.data;
      setCollection(data);
    });
  }, [refresh]);

  return (
    <UnidadeContext.Provider value={initialContext}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <TableData />
          {showEditModal ? <ModalUI /> : null}
        </>
      )}
    </UnidadeContext.Provider>
  );
}
