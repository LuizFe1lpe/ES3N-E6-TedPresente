import { api } from "../../api";
import { ModelPayload } from "./types";
const findAll = () => api.get(`meritoFuncionario/historico`);

const findByDate = (params: ModelPayload) =>
  api.get(
    `meritoFuncionario/historico?dataInicio=${params.dataInicio}&dataFim=${params.dataFim}`,
  );

export const logs = {
  findAll,
  findByDate,
};
