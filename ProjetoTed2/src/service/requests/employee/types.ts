export interface EmployeePayload {
  id?: number;
  email: string;
  senha: string;
  tipoUsuario?: {
    id?: number;
    descTipoUsuario?: string;
  };
  funcionario: {
    id?: number;
    nome?: string;
    funcao?: {
      id?: number;
      descFuncao?: string;
      departameto?: string;
    };
    avatar?: string;
    saldo?: number;
  };
  logged?: boolean;
  loading?: string;
  error?: string;
}

export interface IgetDepartament {
  id: number;
}
