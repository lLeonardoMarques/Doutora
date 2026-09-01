// src/data/imagens.ts

// 🔥 Usar a base URL do Vite
const BASE_URL = import.meta.env.BASE_URL;

export const IMAGENS = {
  doutora: {
    // Usar a BASE_URL para construir o caminho
    hero: `${BASE_URL}imagens/Doutora1.jpeg`,
    heroFallback: "https://images.unsplash.com/photo-1594824813533-446580f34d0b?auto=format&fit=crop&w=1000&q=85",
    
    perfil: `${BASE_URL}imagens/doutora-perfil.jpeg`,
    perfilFallback: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
  clinica: {
    consultorio: `${BASE_URL}imagens/clinica-consultorio.jpg`,
    consultorioFallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrnFqmuQ5pueBsd0H-qj5ZFjV9NcBxj6LurxNTdr8K_HvnFV94sjbJtzCbyVBqhIUNMmJOeXGoO3u-WNj_FFdX9BSwUSxTV5foXbRkhYiV9xAi4zo6si4tkvAc-lmtY6oZUcM2msgejjw=s800-k-no",
    
    recepcao: `${BASE_URL}imagens/clinica-recepcao.jpg`,
    recepcaoFallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkk6sF_XRoKPp0mFLmPBgL4_WQHsHBC9Vr2cXEGty9oS0bLUDWKua3qvCOq1yLuOHof7RS_cnjhBA21BEQegWmaSsr1vAWluDsrpXHBvUFN5hFYeGgsJuVjUqc6jK9Lm6NwBR_X=s800-k-no",
    
    equipamentos: `${BASE_URL}imagens/clinica-equipamentos.jpg`,
    equipamentosFallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmO3QWrE1kLsJPtAxLilwfB12t0ubxz3Il873-mQH44xyNzAz4RHgPz5u8izTXPrWVkDr0r4UjBS8UOcxtVhglwIaF-QKQCV-crHdqkuBmLAW5S5g_4scOXJOHQ9FwiTrcV3z9b=s800-k-no",
    
    atendimento: `${BASE_URL}imagens/clinica-atendimento.jpg`,
    atendimentoFallback: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  marca: {
    logo: `${BASE_URL}imagens/logo.png`,
    icone: `${BASE_URL}imagens/icone.png`,
  }
};

export function resolverImagem(caminhoLocal: string, fallbackUrl: string): string {
  return caminhoLocal || fallbackUrl;
}