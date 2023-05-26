import { api } from "../../api";
import { NotificationI } from "./types";

const get = (id?: number) =>
  api.get(`notification/buscarTodosPeloIdUsuario?id=${id}`);
const put = (id: number) =>
  api.put(`notification/atualizarParaVisto`, { id: id });
const post = (payload: NotificationI) =>
  api.post(`notification/criar`, payload);
const destroy = (id: number) =>
  api.delete(`notification/deletarNotificacao?id=${id}`);

export const notification = { get, put, post, destroy };
