import UnidadeContext from "./context";
import { ReactElement, useEffect, useState } from "react";
import { Cliente, DialogConfirmDataProps, ModalProps } from "./types";
import TableFunc from "./TableFunc";
import ModalFunc from "./ModalTerceiro/ModalFunc";
import SplashScreen from "../../components/SplashScreen";
/* import { reward } from "../../../../service/requests/reward"; */

export default function Clientes(): ReactElement {
	const [collection, setCollection] = useState<Cliente[]>([]);
	const [selectedEdit, setSelectedEdit] = useState<Cliente | null>(null);
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

	/* seEffect(() => {
    reward.get().then((response) => {
      const data = response.data;
      setCollection(data);
    });
  }, [refresh]); */

	return (
		<UnidadeContext.Provider value={initialContext}>
			{isLoading ? (
				<SplashScreen />
			) : (
				<>
					<TableFunc />
					{showEditModal ? <ModalFunc /> : null}
				</>
			)}
		</UnidadeContext.Provider>
	);
}
