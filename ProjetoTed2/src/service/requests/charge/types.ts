export interface ChargePayload {
  quantidade: number;
  motivo?: string;
  tipoMerito: {
    id: number;
  };
  usuario: {
    id?: number;
  };
  loading?: string;
  error?: string;
}
