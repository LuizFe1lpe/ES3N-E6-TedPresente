export interface RewardI {
  recompensa: {
    id: number;
  };
  funcionario: {
    id?: number;
  };
}
export interface DonationI {
  valor: number;
  funcionario: {
    id?: number;
  }
  instituicao: string | null;
}
export interface createReward {
  id: number;
  imagem?: string;
  nome: string;
  valor: string;
}
