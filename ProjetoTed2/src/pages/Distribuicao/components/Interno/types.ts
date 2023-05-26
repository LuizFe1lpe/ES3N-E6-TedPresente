interface TipoUsuario {
  id: number;
  descTipoUsuario: string;
}

interface Funcionario {
  id: number;
  nome: string;
  avatar?: any;
}

interface Departamento {
  id: number;
  descDepartamento: string;
}

interface Funcao {
  id: number;
  descFuncao: string;
  departamento: Departamento;
  funcionario: Funcionario;
}

export interface UserData {
  id: number;
  email: string;
  senha: string;
  tipoUsuario: TipoUsuario;
  funcionario: Funcionario;
  funcao: Funcao[];
  mobileToken_firebase?: string;
  webToken_firebase?: string;
}
