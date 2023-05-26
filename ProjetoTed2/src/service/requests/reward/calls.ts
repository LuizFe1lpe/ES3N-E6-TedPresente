import { api } from "../../api";
import { RewardI, createReward, DonationI } from "./types";

const novaDoacao = (payload?: DonationI) => api.post('resgate/novaDoacao', payload);
const post = (payload?: RewardI) => api.post("resgate/novoResgate", payload);
const get = () => api.get("recompensa/listarTodos");
const create = (payload?: createReward) =>
  api.post("recompensa/novaRecompensa", payload);
const put = (payload?: createReward) => api.put("recompensa/editar", payload);
const remove = (id: number) => api.delete(`recompensa/deletar?id=${id}`);
const pageList = (page: number, quantity: number) =>
  api.get(`recompensa/listarPaginadas?pagina=${page}&quantidade=${quantity}`);
const getSize = () => api.get(`recompensa/qtdRecompensaAtiva`);

export const reward = { post, get, create, put, remove, pageList, getSize, novaDoacao };
