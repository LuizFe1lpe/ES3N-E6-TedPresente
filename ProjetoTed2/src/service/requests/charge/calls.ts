import { api } from "../../api";
import { ChargePayload } from "./types";

const post = (charge: ChargePayload) => api.post("carga/novaCarga", charge);
const getCurrencyAdm = () => api.get(`carga/buscarTodosSaldos`);
const getCurrencyGeral = (id?: number) =>
  api.get(
    `meritoFuncionario/buscarTodosMeritosFuncionariosPorIdFuncionario?idFuncionario=${id}`
  );
const getChargeByUser = (id?:number) => api.post('carga/buscarSaldosPeloIdUsuario',{id:id});

export const charge = { post, getCurrencyAdm, getCurrencyGeral, getChargeByUser };
