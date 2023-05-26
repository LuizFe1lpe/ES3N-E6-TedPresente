export interface ExtractI {
  saldo: number;
  movimentacao: Movimentacao[];
}

interface Movimentacao {
  id: number;
  data: string;
  tipoOperacao: string;
  descricao: string;
  origem: string;
  quantidade: number;
  departamento: string;
}
