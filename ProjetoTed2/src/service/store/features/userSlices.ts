import {
  createAsyncThunk,
  PayloadAction,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { user } from "../../requests/user";
import { employee } from "../../requests/employee";
import { UserPayload } from "../../requests/user/types";

const initialState: UserPayload = {
  id: 0,
  email: "",
  senha: "",
  logged: false,
  tipoUsuario: {
    id: 0,
    descTipoUsuario: "",
  },
  funcionario: {
    id: 0,
  },
  loading: "idle",
  error: false,
};

export const fetchDataLogin = createAsyncThunk(
  "user/loginFetchData",
  async (payload: UserPayload) => {
    const logged = await user.login(payload);
    const userResponse = await employee.byEmail(payload.email);
    const { data } = userResponse;

    let userData: UserPayload = {
      id: data.id,
      email: payload.email,
      senha: payload.senha,
      logged: logged.data,
      tipoUsuario: data.tipoUsuario,
      funcionario: {
        id: data.funcionario.id,
      },
    };
    return userData;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    singout: (state) => {
      state.logged = false;
    },
    purchase: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataLogin.pending, (state) => {
      state.loading = "Loading";
      state.error = false;
    });
    builder.addCase(
      fetchDataLogin.fulfilled,
      (state, action: PayloadAction<UserPayload>) => {
        state.email = action.payload.email;
        state.senha = action.payload.senha;
        state.logged = action.payload.logged;
        state.id = action.payload.id;
        state.tipoUsuario = action.payload.tipoUsuario;
        state.funcionario.id = action.payload.funcionario.id;
        state.loading = "idle";
        state.error = false;
      }
    );
    builder.addCase(fetchDataLogin.rejected, (state) => {
      state.loading = "rejected";
      state.error = true;
    });
  },
});

export const selectUser = createSelector(
  (state) => ({
    user: state.user,
    loading: state.user.loading,
  }),
  (state) => state
);

export const loggedUser = (state) => state.user.user;
export const { singout, purchase } = userSlice.actions;
export default userSlice.reducer;
