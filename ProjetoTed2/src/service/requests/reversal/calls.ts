import { api } from "../../api";

const novoEstorno = (id: number) => api.post(`/estorno/novoEstorno/${id}`);

export const reversal = { novoEstorno };