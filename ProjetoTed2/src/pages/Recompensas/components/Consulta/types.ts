export interface ItemReward {
  id: number;
  nome: string;
  valor: number;
  imagem: string;
  usuario: {
    id: number;
    email: string;
    senha: string;
    tipoUsuario: {
      id: number;
      descTipoUsuario: string;
    };
    funcionario: {
      id: string;
      nome: string;
      funcao: {
        id: string;
        descFuncao: string;
        departamento: {
          id: number;
          descDepartamento: string;
        };
      };
      avatar: string;
    };
  };
}
