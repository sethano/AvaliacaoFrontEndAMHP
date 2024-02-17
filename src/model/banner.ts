export interface BannerModel {
  id: number;
  titulo: string;
  subtitulo: string | null;
  ordenacao: number | null;
  dataExpiracao: string | null;
  dataPublicacao: string | null;
  linkRedirecionamento: string | null;
  imagemDesktop: string | null;
  imagemMobile: string | null;
  imagemDesktopNome: string | null;
  imagemMobileNome: string | null;
  imagemDesktopExtensao: string | null;
  imagemMobileExtensao: string | null;
  urlImagemDesktop: string | null;
  urlImagemMobile: string | null;
  imagemDesktopNomeOriginal: string | null;
  imagemDesktopNomeS3: string | null;
  imagemMobileNomeOriginal: string | null;
  imagemMobileNomeS3: string | null;
}
