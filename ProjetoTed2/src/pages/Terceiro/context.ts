import React from "react";
import {
  Context,
  ModalProps,
  Cliente,
  DialogConfirmDataProps,
} from "./types";
import { emptyFunction } from "../../helper";

const collection: Cliente[] = [];
const selectedEdit: Cliente| null = null;
const selected: number[] = [];
const showEditModal: ModalProps = { isVisible: false, mode: "" };
const showDialogConfirm: DialogConfirmDataProps | null = null;

export const initialContext: Context = {
  collection,
  setCollection: emptyFunction,
  selectedEdit,
  setSelectedEdit: emptyFunction,
  selected,
  setSelected: emptyFunction,
  isLoading: false,
  setIsLoading: emptyFunction,
  showTable: false,
  setShowTable: emptyFunction,
  showEditModal,
  setShowEditModal: emptyFunction,
  showDialogConfirm,
  setShowDialogConfirm: emptyFunction,
  refresh: false,
  setRefresh: emptyFunction,
};

export default React.createContext(initialContext);