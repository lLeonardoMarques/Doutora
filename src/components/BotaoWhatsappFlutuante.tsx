import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";

export const BotaoWhatsappFlutuante: React.FC = () => {
  const [mostrarTooltip, setMostrarTooltip] = useState(true);

  const mensagemPadrao = "Olá, Dra. Lígia! Gostaria de agendar uma avaliação odontológica.";
  const linkWhatsApp = `https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
    mensagemPadrao
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Balão de Dica de Agendamento */}
      {mostrarTooltip && (
        <div className="relative p-3 rounded-2xl bg-white shadow-xl border border-teal-100 text-slate-800 text-xs font-medium max-w-[230px] text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setMostrarTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-teal-900 pr-3">Dúvidas ou agendamento?</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Fale diretamente com nossa equipe no WhatsApp.
          </p>
        </div>
      )}

      {/* Botão de Ação Flutuante */}
      <a
        id="btn-whatsapp-flutuante"
        href={linkWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Conversar no WhatsApp"
        title="Agendar pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Ponto indicador de status online */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
