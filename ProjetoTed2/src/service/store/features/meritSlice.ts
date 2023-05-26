import {
  createAsyncThunk,
  PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { merit } from "../../requests/merit";
import { MeritPayload } from "../../requests/merit/types";

const initialState: MeritPayload = {
  funcionario: {
    id: 0,
  },
  meritoDistribuido: {
    motivo: "",
    quantidade: 0,
    tipoMerito: {
      id: 0,
    },
    usuario: {
      id: 0,
    },
  },

  loading: "idle",
  error: "",
};

export const postMerit = createAsyncThunk(
  "merit/postMerit",
  async (payload: MeritPayload) => {
    const request =
      payload?.permission === 1
        ? await merit.post(payload)
        : await merit.postDist(payload);
    const { data } = request;
    return data;
  }
);

const meritSlice = createSlice({
  name: "merit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postMerit.pending, (state) => {
      state.loading = "Loading";
    });
    builder.addCase(
      postMerit.fulfilled,
      (state, action: PayloadAction<MeritPayload>) => {
        state.loading = "idle";
      }
    );
    builder.addCase(postMerit.rejected, (state) => {
      state.loading = "rejected";
      state.error = "failed request";
    });
  },
});

export const selectCharge = createSelector(
  (state) => ({
    merit: state.merit,
    loading: state.merit.loading,
  }),
  (state) => state
);

export const meritState = (state) => state.merit.merit;
export default meritSlice.reducer;
