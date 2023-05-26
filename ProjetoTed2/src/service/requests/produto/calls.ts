import { api } from "../../api";
import { Recompensa } from "./types";

const get = () => api.get(`produto`);
const getById = (id?: number) => api.get(`produto/${id}`);
const post = (payload: Recompensa) =>
  api.post("recompensa/novaRecompensa", payload);
const put = (id: number, payload: Recompensa) =>
  api.put(`produto/${id}`, payload);
const remove = (id: number) => api.delete(`produto/${id}`);

export const produto = { get, getById, post, put, remove };
