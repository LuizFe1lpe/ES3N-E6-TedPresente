import { api } from "../../api";
//todo: mover para usuario
const byEmail = (email: string) =>
  api.get(`usuario/buscarUsuarioPorEmail?email=${email}`);

const findAll = () => api.get(`funcionario/listarTodos`);

const extract = (id?: number) =>
  api.get(`meritoFuncionario/extrato?idFuncionario=${id}`);

const byDepartment = (ids?: any) =>
  api.post(`funcionario/buscarFuncionarioPorIdDepartamento`,ids);

const extractAdm = () => api.get("carga/extrato");

const departamentByEmail = (email: string) =>
  api.get(`usuario/buscarDepartamentosUsuarioPorEmail?email=${email}`);

const gestorByDepartment = (id?: number) =>
  api.get(
    `funcionario/buscarFuncionarioDistribuidoresPorIdDepartamento?idDepartamento=${id}`
  );

const gestor = () => 
  api.get('funcionario/buscarFuncionarioDistribuidores');

export const employee = {
  byEmail,
  findAll,
  extract,
  byDepartment,
  extractAdm,
  gestorByDepartment,
  departamentByEmail,
  gestor,
};
