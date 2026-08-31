import React from "react";
import { Sparkles, MessageCircle, MapPin, Shield, ArrowUp } from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";

interface RodapeProps {
  onAbrirGuiaMidia?: () => void;
}

export const Rodape: React.FC<RodapeProps> = ({ onAbrirGuiaMidia }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="rodape" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grade do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-heading text-base font-bold tracking-tight">
                {DADOS_CLINICA.nomeDoutora}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Odontologia Especializada com atendimento acolhedor, tratamentos sem dor e foco na preservação natural do seu sorriso.
            </p>
            <div className="text-[11px] text-teal-400 flex items-center gap-1.5 font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>{DADOS_CLINICA.cro}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (4 seções principais) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleLinkClick(e, "#inicio")}
                  className="hover:text-teal-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#a-doutora"
                  onClick={(e) => handleLinkClick(e, "#a-doutora")}
                  className="hover:text-teal-400 transition-colors"
                >
                  A Doutora
                </a>
              </li>
              <li>
                <a
                  href="#tratamentos"
                  onClick={(e) => handleLinkClick(e, "#tratamentos")}
                  className="hover:text-teal-400 transition-colors"
                >
                  Tratamentos
                </a>
              </li>
              <li>
                <a
                  href="#clinica"
                  onClick={(e) => handleLinkClick(e, "#clinica")}
                  className="hover:text-teal-400 transition-colors"
                >
                  A Clínica
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleLinkClick(e, "#contato")}
                  className="hover:text-teal-400 transition-colors"
                >
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Horários */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Localização & Horários
            </h4>
            <div className="text-xs space-y-2 leading-relaxed">
              <p className="text-slate-300 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{DADOS_CLINICA.enderecoCompleto}</span>
              </p>
              <p className="text-slate-400 text-[11px]">
                Plus Code: {DADOS_CLINICA.plusCode}
              </p>
              <div className="pt-1 text-[11px] text-slate-300 space-y-0.5 border-t border-slate-800">
                <p><strong className="text-slate-400">Seg:</strong> 07:30–17:00 | <strong className="text-slate-400">Ter-Sex:</strong> 07:30–19:00</p>
                <p><strong className="text-slate-400">Sáb:</strong> 07:30–13:00 | <strong className="text-slate-400">Dom:</strong> Fechado</p>
              </div>
            </div>
          </div>

          {/* Coluna 4: Contato Direto & Agendamento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Agendamentos & Redes
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700/80 hover:bg-teal-700 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-teal-300" />
                <span>{DADOS_CLINICA.whatsappFormatado}</span>
              </a>
              <div className="pt-1 flex flex-col gap-1 text-[11px]">
                <a
                  href={DADOS_CLINICA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  ★ {DADOS_CLINICA.googleRating} ({DADOS_CLINICA.googleReviewsCount} avaliações no Google)
                </a>
                <a
                  href={DADOS_CLINICA.linkServicosBio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  Link de Serviços / Instagram
                </a>
              </div>
            </div>

            {onAbrirGuiaMidia && (
              <div className="pt-2">
                <button
                  onClick={onAbrirGuiaMidia}
                  className="text-[11px] text-slate-500 hover:text-teal-400 underline transition-colors cursor-pointer"
                >
                  Ver pasta de mídias (/public/imagens)
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {DADOS_CLINICA.marca}. Todos os direitos reservados.
            </p>
            <p className="text-[11px]">
              Responsável Técnico: {DADOS_CLINICA.responsavelTecnico} • {DADOS_CLINICA.cro}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Voltar ao topo"
          >
            <span className="text-xs">Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
