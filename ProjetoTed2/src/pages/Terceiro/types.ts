export interface ModalProps {
    isVisible: boolean;
    mode: string;
  }
  
  export interface DialogConfirmDataProps {
    isVisible: boolean;
    message: string;
    data?: any;
  }
  
  export interface Cliente {
    id: number;
    codigo: number;
    nome: string;
    email: string;
    cpf: string;
  }
  
  
  export interface Context {
    collection: Cliente[];
    setCollection: (collection: Cliente[]) => void;
    selectedEdit: Cliente | null;
    setSelectedEdit: (selected: Cliente | null) => void;
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
  