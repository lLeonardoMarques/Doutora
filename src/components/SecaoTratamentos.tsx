import React from "react";
import { Sparkles, SunMedium, ShieldCheck, Activity, HeartPulse, Smile, ArrowUpRight, Stethoscope } from "lucide-react";
import { DADOS_CLINICA, TratamentoItem } from "../data/configClinica";

interface SecaoTratamentosProps {
  onSelecionarTratamento: (tratamentoNome: string) => void;
}

export const SecaoTratamentos: React.FC<SecaoTratamentosProps> = ({ onSelecionarTratamento }) => {
  // Mapeamento dos ícones para componentes Lucide
  const renderIcone = (nome: string) => {
    const props = { className: "w-5 h-5 text-teal-700" };
    switch (nome) {
      case "Sparkles":
        return <Sparkles {...props} />;
      case "SunMedium":
        return <SunMedium {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Smile":
        return <Smile {...props} />;
      default:
        return <Stethoscope {...props} />;
    }
  };

  return (
    <section id="tratamentos" className="py-20 md:py-28 bg-[#F8FAFC] border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Tratamentos Especializados</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Soluções personalizadas para a saúde e estética do seu sorriso
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Procedimentos conduzidos com cuidado, precisão técnica e materiais de primeira linha.
          </p>
        </div>

        {/* Grade de Tratamentos (Cards simples e diretos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DADOS_CLINICA.tratamentos.map((tratamento: TratamentoItem) => (
            <div
              key={tratamento.id}
              id={`card-tratamento-${tratamento.id}`}
              className={`group relative p-6 rounded-2xl bg-white border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between text-left ${
                tratamento.destaque
                  ? "border-teal-200 shadow-xs ring-1 ring-teal-500/10"
                  : "border-slate-100 shadow-2xs hover:border-teal-200"
              }`}
            >
              <div>
                {/* Cabeçalho do Card: Ícone + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200">
                    <span className="group-hover:brightness-200 transition-all">
                      {renderIcone(tratamento.icone)}
                    </span>
                  </div>
                  
                  {tratamento.destaque && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                      Mais procurado
                    </span>
                  )}
                </div>

                {/* Título & Frase única */}
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                  {tratamento.titulo}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tratamento.resumo}
                </p>
              </div>

              {/* Botão de consulta rápida para este tratamento */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelecionarTratamento(tratamento.titulo)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 group-hover:underline cursor-pointer"
                >
                  <span>Agendar este procedimento</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de rodapé da seção */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-100 text-center max-w-2xl mx-auto text-xs sm:text-sm text-slate-600">
          <p>
            Não encontrou o procedimento que procura? Realizamos avaliação completa para diagnóstico e indicação adequada.
          </p>
        </div>

      </div>
    </section>
  );
};
