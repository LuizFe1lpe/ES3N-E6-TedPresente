import { api } from "../../api";
import { MeritPayload } from "./types";

const post = (payload: MeritPayload) =>
  api.post("meritoFuncionario/novoMeritoFuncionario", payload);
//todo caso funcionario
const postDist = (payload: MeritPayload) =>
  api.post("meritoFuncionario/distribuirMerito", payload);
const get = () => api.get("meritoDistribuido/buscarTodos");
const getDistByUser = (id?: number) => api.post('meritoDistribuido/buscarTodosPeloIdUsuario', {id:id});

export const merit = { post, postDist, get, getDistByUser };
