export interface UserPayload {
  id?: number;
  email: string;
  senha: string;
  tipoUsuario?: {
    id: number;
    descTipoUsuario: string;
  };
  logged?: boolean;
  loading?: string;
  error?: boolean;
  funcionario: {
    id?: number;
  };
}

export interface RecoveryPassword {
  email: string;
  codigoRecuperacao: string;
  senha: string;
}

export interface Token {
  id?: number;
  webToken_firebase: string;
}
