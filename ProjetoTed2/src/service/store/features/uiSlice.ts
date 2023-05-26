import { createSlice, createSelector } from "@reduxjs/toolkit";

interface InitialInterface {
  notificationModal: boolean;
  loading: boolean;
}

const initialState: InitialInterface = {
  notificationModal: false,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    openNotificationModal: (state) => {
      state.notificationModal = true;
    },
    closeNotificationModal: (state) => {
      state.notificationModal = false;
    },
  },
});

export const selectUi = createSelector(
  (state) => ({
    charge: state.ui,
    loading: state.ui.loading,
  }),
  (state) => state
);

export const uiState = (state) => state.ui.ui;
export const { openNotificationModal, closeNotificationModal } =
  uiSlice.actions;
export default uiSlice.reducer;
