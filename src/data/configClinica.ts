/**
 * Dados de Configuração e Textos Institucionais
 * Dra. Lígia Magalhães — Odontologia Especializada
 * 
 * NOTA: Todos os dados marcados com [EDITÁVEL] podem ser facilmente
 * atualizados conforme os dados definitivos do consultório / Google Perfil.
 */

export interface TratamentoItem {
  id: string;
  titulo: string;
  resumo: string;
  icone: string;
  destaque?: boolean;
}

export interface FotoGaleria {
  id: string;
  arquivo: string;
  titulo: string;
  descricao: string;
  categoria: 'consultorio' | 'recepcao' | 'equipamentos' | 'atendimento';
  placeholderUrl: string;
}

export interface VideoGaleria {
  id: string;
  arquivo: string;
  titulo: string;
  duracao: string;
  thumbnailUrl: string;
  descricao: string;
}

export const DADOS_CLINICA = {
  nomeDoutora: "Dra. Lígia Magalhães",
  nomeCompletoOficial: "Lighia Mágalhães/Odontologia Especializada",
  marca: "Lighia Magalhães — Odontologia Especializada",
  cro: "CRO/SP", // Cirurgiã-Dentista
  responsavelTecnico: "Dra. Lígia Magalhães — Cirurgiã-Dentista",
  especialidades: "Odontologia Especializada | Estética, Restaurações & Cuidado Humanizado",
  
  // Avaliações Reais do Google Maps
  googleRating: "4,9",
  googleReviewsCount: 72,
  googleEmpresaMulheres: true,
  
  // Contatos Oficiais (Google Maps)
  whatsappNumero: "5511972366546",
  whatsappFormatado: "(11) 97236-6546",
  telefoneFixo: "(11) 97236-6546",
  email: "contato@ligiamagalhaesodonto.com.br",
  
  // Localização Oficial do Google Maps
  enderecoCompleto: "Av. Elísio Teixeira Leite, 4496 - Jardim Paulistano (Zona Norte), São Paulo - SP, 02810-000",
  logradouro: "Av. Elísio Teixeira Leite, 4496",
  bairroCidade: "Jardim Paulistano (Zona Norte), São Paulo - SP",
  cep: "02810-000",
  plusCode: "G7QM+HW Jardim Paulistano (Zona Norte), São Paulo - SP",
  pontoReferencia: "Zona Norte / Taipas, São Paulo - SP",
  
  // Horários de Funcionamento Oficiais do Google Maps
  horarios: [
    { dias: "Segunda-feira", horas: "07:30 às 17:00" },
    { dias: "Terça a Sexta-feira", horas: "07:30 às 19:00" },
    { dias: "Sábado", horas: "07:30 às 13:00" },
    { dias: "Domingo", horas: "Fechado" }
  ],

  // Links e Mídias Oficiais
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+El%C3%ADsio+Teixeira+Leite%2C+4496+-+Jardim+Paulistano+%28Zona+Norte%29%2C+S%C3%A3o+Paulo+-+SP%2C+02810-000",
  instagramHandle: "@draligiamagalhaes",
  instagramUrl: "https://www.instagram.com",
  linkServicosBio: "https://l.instagram.com/?u=https%3A%2F%2Fbit.ly%2F3OacXGL",

  // Avaliações Reais de Pacientes do Google Maps
  avaliacoesGoogle: [
    {
      nome: "Daniel Rodrigues Andrade",
      estrelas: 5,
      tempo: "7 meses atrás",
      comentario: "Dra Ligia sempre mto atenciosa e caprichosa em seus trabalhos, me atendeu super bem e em pouco tempo tive resultados significantes.",
      respostaDoutora: "Oie Daniel fico muito feliz com a sua avaliação. Seu tratamento ficou incrível, o resultado é nosso! Grata ☘️"
    },
    {
      nome: "Kauan Figliolli",
      estrelas: 5,
      tempo: "2 meses atrás",
      comentario: "Atendimento impecável, e vou falar novamente você é top, que respaldo que cuidado excepcional com seus pacientes, na minha vida toda nunca havia encontrado uma profissional como você, excelência máxima 👏🏾🥰",
      respostaDoutora: null
    },
    {
      nome: "Lucineide Oliveira Silva",
      estrelas: 5,
      tempo: "4 meses atrás",
      comentario: "Atendimento maravilhoso, Dra super atenciosa e prestativa, mesmo com muito medo, ela conseguiu me acalmar!!!!",
      respostaDoutora: "Que alegria ler seu depoimento. O medo faz parte... muitos pacientes têm medo real de dentista. Você também confiou em mim e tudo deu certo. Grata ☘️"
    }
  ],

  // Copy e Posicionamento
  headlineHero: "Cuidado especializado para o seu sorriso, com calma e confiança.",
  subheadlineHero: "Odontologia especializada com atendimento humanizado, precisão técnica e foco no seu bem-estar.",
  
  apresentacaoDoutora: {
    titulo: "Dedicação, escuta atenta e excelência técnica.",
    paragrafo1: "Acredito que um tratamento odontológico de qualidade começa com o acolhimento. Cada paciente é único, e cuidar do seu sorriso exige precisão técnica, sensibilidade e respeito ao seu tempo.",
    paragrafo2: "Com formação especializada em Dentística Restauradora e Endodontia, meu consultório foi planejado para oferecer uma experiência tranquila e segura, desmistificando o receio de ir ao dentista através de procedimentos gentis e tecnologia moderna.",
    citacao: "“Nosso propósito é devolver a sua saúde e confiança com conforto e naturalidade em cada etapa.”",
    diferenciais: [
      {
        titulo: "Atendimento Humanizado & Sem Pressa",
        descricao: "Consultas com tempo dedicado exclusivamente a você, ouvindo suas necessidades em um ambiente acolhedor."
      },
      {
        titulo: "Precisão & Tecnologia Suave",
        descricao: "Equipamentos modernos e técnicas minimamente invasivas para diagnósticos exatos e tratamentos indolores."
      },
      {
        titulo: "Plano de Tratamento Transparente",
        descricao: "Explicações claras e planejadas sob medida para a sua saúde bucal, sem procedimentos desnecessários."
      }
    ]
  },

  // Tratamentos Essenciais (4 a 6)
  tratamentos: [
    {
      id: "estetica-facetas",
      titulo: "Estética Dental & Facetas",
      resumo: "Harmonização de cor, forma e alinhamento dos dentes com resinas compostas e lâminas de cerâmica de alta naturalidade.",
      icone: "Sparkles",
      destaque: true
    },
    {
      id: "clareamento",
      titulo: "Clareamento Dental Seguro",
      resumo: "Clareamento supervisionado (em consultório ou caseiro com moldeiras personalizadas) para um sorriso luminoso sem sensibilidade excessiva.",
      icone: "SunMedium"
    },
    {
      id: "restauracoes",
      titulo: "Restaurações Estéticas",
      resumo: "Substituição e reconstrução de dentes fraturados ou desgastados com resinas biomiméticas imperceptíveis.",
      icone: "ShieldCheck"
    },
    {
      id: "endodontia",
      titulo: "Endodontia (Tratamento de Canal)",
      resumo: "Procedimento especializado com tecnologia mecanizada para alívio de dores, preservação do dente natural e máxima agilidade.",
      icone: "Activity"
    },
    {
      id: "prevencao-avaliacao",
      titulo: "Avaliação, Limpeza & Prevenção",
      resumo: "Profilaxia profunda, remoção de tártaro e check-up preventivo periódico para manter suas gengivas e dentes saudáveis.",
      icone: "HeartPulse"
    },
    {
      id: "bruxismo-placas",
      titulo: "Placas Oclusais & Dores Mandibulares",
      resumo: "Diagnóstico e tratamento de apertamento dental, bruxismo e desconfortos na articulação têmporo-mandibular (ATM).",
      icone: "Smile"
    }
  ] as TratamentoItem[],

  // Mídias da Pasta /public/imagens e do Perfil da Clínica
  arquivosMidiaRequeridos: [
    {
      local: "Primeira Dobra (Hero)",
      nomeArquivo: "doutora-hero.jpg",
      tipo: "Foto principal da Dra. Lígia",
      descricao: "Foto em alta resolução da Dra. Lígia (caminho: /imagens/doutora-hero.jpg)"
    },
    {
      local: "Seção A Doutora",
      nomeArquivo: "doutora-perfil.jpg",
      tipo: "Foto de perfil da Dra. Lígia",
      descricao: "Foto no consultório / jaleco (caminho: /imagens/doutora-perfil.jpg)"
    },
    {
      local: "Galeria da Clínica 01",
      nomeArquivo: "clinica-consultorio.jpg",
      tipo: "Foto do consultório",
      descricao: "Ambiente do consultório e cadeira (caminho: /imagens/clinica-consultorio.jpg)"
    },
    {
      local: "Galeria da Clínica 02",
      nomeArquivo: "clinica-recepcao.jpg",
      tipo: "Foto da recepção",
      descricao: "Ambiente de recepção e espera (caminho: /imagens/clinica-recepcao.jpg)"
    },
    {
      local: "Galeria da Clínica 03",
      nomeArquivo: "clinica-equipamentos.jpg",
      tipo: "Foto de equipamentos",
      descricao: "Tecnologia e biossegurança (caminho: /imagens/clinica-equipamentos.jpg)"
    },
    {
      local: "Galeria da Clínica 04",
      nomeArquivo: "clinica-atendimento.jpg",
      tipo: "Foto de atendimento",
      descricao: "Consultório e atendimento (caminho: /imagens/clinica-atendimento.jpg)"
    },
    {
      local: "Vídeos da Clínica",
      nomeArquivo: "video-clinica-01.mp4",
      tipo: "Vídeo curto da Clínica",
      descricao: "Vídeo do consultório ou perfil (caminho: /imagens/video-clinica-01.mp4)"
    }
  ],

  // Galeria de Fotos e Vídeos da Clínica
  galeriaFotos: [
    {
      id: "foto-1",
      arquivo: "/imagens/clinica-consultorio.jpg",
      titulo: "Consultório & Atendimento Especializado",
      descricao: "Ambiente moderno e higienizado com iluminação natural suave para seu conforto.",
      categoria: "consultorio",
      placeholderUrl: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrnFqmuQ5pueBsd0H-qj5ZFjV9NcBxj6LurxNTdr8K_HvnFV94sjbJtzCbyVBqhIUNMmJOeXGoO3u-WNj_FFdX9BSwUSxTV5foXbRkhYiV9xAi4zo6si4tkvAc-lmtY6oZUcM2msgejjw=s800-k-no"
    },
    {
      id: "foto-2",
      arquivo: "/imagens/clinica-recepcao.jpg",
      titulo: "Espaço de Cuidado & Acolhimento",
      descricao: "Estrutura planejada para uma experiência odontológica tranquila e humanizada.",
      categoria: "recepcao",
      placeholderUrl: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkk6sF_XRoKPp0mFLmPBgL4_WQHsHBC9Vr2cXEGty9oS0bLUDWKua3qvCOq1yLuOHof7RS_cnjhBA21BEQegWmaSsr1vAWluDsrpXHBvUFN5hFYeGgsJuVjUqc6jK9Lm6NwBR_X=s800-k-no"
    },
    {
      id: "foto-3",
      arquivo: "/imagens/clinica-equipamentos.jpg",
      titulo: "Tecnologia & Precisão Clínica",
      descricao: "Equipamentos de alta tecnologia para diagnósticos rápidos e procedimentos confortáveis.",
      categoria: "equipamentos",
      placeholderUrl: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmO3QWrE1kLsJPtAxLilwfB12t0ubxz3Il873-mQH44xyNzAz4RHgPz5u8izTXPrWVkDr0r4UjBS8UOcxtVhglwIaF-QKQCV-crHdqkuBmLAW5S5g_4scOXJOHQ9FwiTrcV3z9b=s800-k-no"
    },
    {
      id: "foto-4",
      arquivo: "/imagens/clinica-atendimento.jpg",
      titulo: "Atendimento Individualizado",
      descricao: "Planejamento digital e explicações detalhadas em cada consulta com a Dra. Lígia.",
      categoria: "atendimento",
      placeholderUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    }
  ] as FotoGaleria[],

  galeriaVideos: [
    {
      id: "vid-1",
      arquivo: "video-perfil-google-01.mp4",
      titulo: "Conheça o espaço e atendimento",
      duracao: "0:20",
      thumbnailUrl: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrnFqmuQ5pueBsd0H-qj5ZFjV9NcBxj6LurxNTdr8K_HvnFV94sjbJtzCbyVBqhIUNMmJOeXGoO3u-WNj_FFdX9BSwUSxTV5foXbRkhYiV9xAi4zo6si4tkvAc-lmtY6oZUcM2msgejjw=s800-k-no",
      descricao: "Vídeo do perfil do Google do consultório da Dra. Lígia Magalhães."
    },
    {
      id: "vid-2",
      arquivo: "video-perfil-google-02.mp4",
      titulo: "Experiência e Cuidado Humanizado",
      duracao: "0:14",
      thumbnailUrl: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkk6sF_XRoKPp0mFLmPBgL4_WQHsHBC9Vr2cXEGty9oS0bLUDWKua3qvCOq1yLuOHof7RS_cnjhBA21BEQegWmaSsr1vAWluDsrpXHBvUFN5hFYeGgsJuVjUqc6jK9Lm6NwBR_X=s800-k-no",
      descricao: "Apresentação de ambiente calmo e infraestrutura para seu bem-estar."
    },
    {
      id: "vid-3",
      arquivo: "video-perfil-google-03.mp4",
      titulo: "Tour Rápido pelo Consultório",
      duracao: "0:02",
      thumbnailUrl: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmO3QWrE1kLsJPtAxLilwfB12t0ubxz3Il873-mQH44xyNzAz4RHgPz5u8izTXPrWVkDr0r4UjBS8UOcxtVhglwIaF-QKQCV-crHdqkuBmLAW5S5g_4scOXJOHQ9FwiTrcV3z9b=s800-k-no",
      descricao: "Visão dos detalhes do consultório da Dra. Lígia Magalhães."
    }
  ] as VideoGaleria[]
};
