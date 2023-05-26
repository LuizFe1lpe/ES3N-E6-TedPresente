export interface MeritPayload {
  funcionario: {
    id: number;
  };
  meritoDistribuido: {
    motivo: string;
    quantidade: number;
    tipoMerito: {
      id: number;
    };
    usuario: {
      id?: number;
    };
  };
  permission?: number;
  loading?: string;
  error?: string;
}

export interface UserData {
  id:number;
}
