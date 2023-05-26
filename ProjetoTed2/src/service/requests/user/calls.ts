import { api } from "../../api";
import { UserPayload, RecoveryPassword, Token } from "./types";

const get = () => api.get(`usuario`);
const getById = (id?: number) => api.get(`usuario?id=${id}`);
const post = (payload: UserPayload) => api.post("usuario/novoUsuario", payload);
const put = (id: number, payload: UserPayload) =>
  api.put(`usuario?id=${id}`, payload);
const remove = (id: number) => api.delete(`usuario?id=${id}`);
const login = (payload: UserPayload) => api.post("usuario/login", payload);
const byEmail = (email: string) =>
  api.get(`usuario/buscarUsuarioPorEmail?email=${email}`);
const recoveryEmail = (payload: RecoveryPassword) =>
  api.post(`usuario/gerarCodigoRecuperacaoSenha`, payload);
const revoveryCode = (payload: RecoveryPassword) =>
  api.post(`usuario/validarCodigoRecuperacaoSenha`, payload);
const recoveryPassword = (payload: RecoveryPassword) =>
  api.put(`usuario/atualizarSenha`, payload);
const saveToken = (payload: Token) =>
  api.put("usuario/atualizarTokenWebFirebase", payload);

export const user = {
  get,
  getById,
  post,
  put,
  remove,
  login,
  byEmail,
  recoveryEmail,
  revoveryCode,
  recoveryPassword,
  saveToken,
};
