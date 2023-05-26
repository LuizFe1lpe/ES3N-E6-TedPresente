export interface ModalProps {
  isVisible: boolean;
  mode: string;
}

export interface DialogConfirmDataProps {
  isVisible: boolean;
  message: string;
  data?: any;
}

export interface Recompensa {
  id: number;
  nome: string;
  valor: string;
  imagem: string;
  usuario?: Usuario;
  prazo: string;
  is_active?: boolean;
}

interface Usuario {
  id: number;
}

export interface Context {
  collection: Recompensa[];
  setCollection: (collection: Recompensa[]) => void;
  selectedEdit: Recompensa | null;
  setSelectedEdit: (selected: Recompensa | null) => void;
  selected: number[];
  setSelected: (codigo: number[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  showTable: boolean;
  setShowTable: (showTable: boolean) => void;
  showEditModal: ModalProps;
  setShowEditModal: (showEditModal: ModalProps) => void;
  showDialogConfirm: DialogConfirmDataProps | null;
  setShowDialogConfirm: (dialogConfirmProps: DialogConfirmDataProps) => void;
  refresh: boolean;
  setRefresh: (reloadTable: boolean) => void;
}
