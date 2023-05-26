import { configureStore } from "@reduxjs/toolkit";
import UserStore from "./features/userSlices";
import ChargeStore from "./features/chargeSlice";
import MeritStore from "./features/meritSlice";
import UiStore from "./features/uiSlice";
export const store = configureStore({
  reducer: {
    user: UserStore,
    charge: ChargeStore,
    merit: MeritStore,
    ui: UiStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
