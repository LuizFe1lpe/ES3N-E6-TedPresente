import {
  createAsyncThunk,
  PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { charge } from "../../requests/charge";
import { ChargePayload } from "../../requests/charge/types";

const initialState: ChargePayload = {
  quantidade: 0,
  tipoMerito: {
    id: 0,
  },
  usuario: {
    id: 0,
  },
  loading: "idle",
  error: "",
};

export const postCharge = createAsyncThunk(
  "charge/postCharge",
  async (payload: ChargePayload) => {
    const request = await charge.post(payload);
    const { data } = request;
    return data;
  }
);

const chargeSlice = createSlice({
  name: "charge",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCharge.pending, (state) => {
      state.loading = "Loading";
    });
    builder.addCase(
      postCharge.fulfilled,
      (state, action: PayloadAction<ChargePayload>) => {
        state.loading = "idle";
      }
    );
    builder.addCase(postCharge.rejected, (state) => {
      state.loading = "rejected";
      state.error = "failed request";
    });
  },
});

export const selectCharge = createSelector(
  (state) => ({
    charge: state.charge,
    loading: state.charge.loading,
  }),
  (state) => state
);

export const chargeState = (state) => state.charge.charge;
export default chargeSlice.reducer;
