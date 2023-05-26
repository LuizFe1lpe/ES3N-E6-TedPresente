export interface RecompensaForm {
  id: number;
  nome: string;
  valor: string;
  imagem: string;
  usuario?: Usuario;
  prazo: string;
}

interface Usuario {
  id: number;
}
