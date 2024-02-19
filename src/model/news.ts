export interface NewsModel {
  id: number | null;
  titulo: string | null;
  resumo: string | null;
  imagem: string | null;
  dataCriacao: string | null;
  isPublicada: boolean | null;
  isImportante: boolean | null;
}
