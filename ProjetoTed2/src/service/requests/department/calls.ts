import { api } from "../../api";

const findAll = () => api.get(`departamento/listarTodos`);

export const department = { findAll };
