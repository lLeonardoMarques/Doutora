import React, { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { Hero } from "./components/Hero";
import { SecaoADoutora } from "./components/SecaoADoutora";
import { SecaoTratamentos } from "./components/SecaoTratamentos";
import { SecaoClinica } from "./components/SecaoClinica";
import { SecaoContato } from "./components/SecaoContato";
import { Rodape } from "./components/Rodape";
import { BotaoWhatsappFlutuante } from "./components/BotaoWhatsappFlutuante";
import { GuiaArquivosMidiaModal } from "./components/GuiaArquivosMidiaModal";

export default function App() {
  const [tratamentoSelecionado, setTratamentoSelecionado] = useState<string>("");
  const [modalMidiaAberto, setModalMidiaAberto] = useState<boolean>(false);

  // Rolagem suave até a seção de contato / agendamento
  const rolarParaContato = (tratamento?: string) => {
    if (tratamento) {
      setTratamentoSelecionado(tratamento);
    }
    const elementoContato = document.getElementById("contato");
    if (elementoContato) {
      elementoContato.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Rolagem suave até os tratamentos
  const rolarParaTratamentos = () => {
    const elementoTratamentos = document.getElementById("tratamentos");
    if (elementoTratamentos) {
      elementoTratamentos.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* 1) Cabeçalho Fixo no Topo */}
      <Cabecalho onAgendarClick={() => rolarParaContato()} />

      {/* Conteúdo Principal One-Page */}
      <main className="flex-1">
        {/* 2) Hero (Destaque da Doutora no Início) */}
        <Hero
          onAgendarClick={() => rolarParaContato()}
          onConhecerTratamentos={rolarParaTratamentos}
        />

        {/* 3) Seção A Doutora */}
        <SecaoADoutora />

        {/* 4) Seção Tratamentos */}
        <SecaoTratamentos
          onSelecionarTratamento={(tratamento) => rolarParaContato(tratamento)}
        />

        {/* 5) Seção Clínica (Galeria com Fotos e Vídeos) */}
        <SecaoClinica />

        {/* 6) Seção Contato (Endereço, WhatsApp, Mapa e Formulário) */}
        <SecaoContato tratamentoPreSelecionado={tratamentoSelecionado} />
      </main>

      {/* 7) Rodapé */}
      <Rodape onAbrirGuiaMidia={() => setModalMidiaAberto(true)} />

      {/* Botão Flutuante de WhatsApp */}
      <BotaoWhatsappFlutuante />

      {/* Modal com o Guia Oficial de Arquivos de Mídia do Google Maps */}
      <GuiaArquivosMidiaModal
        aberto={modalMidiaAberto}
        onFechar={() => setModalMidiaAberto(false)}
      />
    </div>
  );
}
