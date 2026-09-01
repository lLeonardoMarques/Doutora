import React from "react";
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, HeartHandshake, MapPin } from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";
import { IMAGENS } from "../data/imagens";

interface HeroProps {
  onAgendarClick: () => void;
  onConhecerTratamentos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAgendarClick, onConhecerTratamentos }) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50/50"
    >
      {/* Elementos sutis de fundo */}
      <div className="absolute top-12 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Informações & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag / Badge de Confiança */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Odontologia Especializada & Humanizada</span>
            </div>

            {/* Título Principal */}
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.18]">
                {DADOS_CLINICA.headlineHero}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                {DADOS_CLINICA.subheadlineHero}
              </p>
            </div>

            {/* Destaque rápido da profissional */}
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-100 shadow-xs backdrop-blur-xs flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-semibold text-slate-800">{DADOS_CLINICA.nomeDoutora}</span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                  {DADOS_CLINICA.cro}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{DADOS_CLINICA.bairroCidade}</span>
              </div>
            </div>

            {/* Ações / Botões */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-btn-agendar"
                onClick={onAgendarClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Agendar consulta</span>
              </button>

              <button
                id="hero-btn-tratamentos"
                onClick={onConhecerTratamentos}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-slate-700 hover:text-teal-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Conhecer tratamentos</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* 3 pilares */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Ambiente calmo e silencioso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Tratamentos sem dor</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Pontualidade no atendimento</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Foto Principal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-white p-3 shadow-xl shadow-teal-900/5 border border-slate-100">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-tr from-teal-100/60 via-slate-100 to-sky-50 flex flex-col justify-between">
                  
                  {/* ⚠️ CORREÇÃO PRINCIPAL: IMAGEM COM FALLBACK E BASE */}
                  <img
                    id="foto-hero-doutora"
                    src={IMAGENS.doutora.hero}
                    onError={(e) => {
                      // Fallback se a imagem não carregar
                      e.currentTarget.src = IMAGENS.doutora.heroFallback;
                    }}
                    alt="Dra. Lígia Magalhães — Odontologia Especializada"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Badge sobreposto */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-bold text-slate-900 text-sm">
                          {DADOS_CLINICA.nomeDoutora}
                        </p>
                        <p className="text-xs text-teal-700 font-medium">
                          Cirurgiã-Dentista • Especialista
                        </p>
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 font-medium border border-teal-100">
                        Atendimento com hora marcada
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};