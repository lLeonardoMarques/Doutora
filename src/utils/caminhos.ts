// src/utils/caminhos.ts
export const BASE_URL = '/Dra.-L-gia-Magalh-es';

export function getImagePath(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}

export function getImageUrl(nome: string): string {
  const imagensMap: Record<string, string> = {
    'doutora-perfil': '/imagens/doutora-perfil.jpeg',
    'Doutora1': '/imagens/Doutora1.jpeg',
    'clinica-recepcao': '/imagens/clinica-recepcao.jpg',
    'clinica-consultorio': '/imagens/clinica-consultorio.jpg',
    'clinica-equipamentos': '/imagens/clinica-equipamentos.jpg',
    'clinica-atendimento': '/imagens/clinica-atendimento.jpg',
  };
  const path = imagensMap[nome];
  return path ? getImagePath(path) : '';
}