import React from "react";
import { GraduationCap, Award, Heart, Check, Clock, UserCheck, ShieldCheck } from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";
import { IMAGENS } from "../data/imagens";

export const SecaoADoutora: React.FC = () => {
  return (
    <section id="a-doutora" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>A Profissional</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            {DADOS_CLINICA.apresentacaoDoutora.titulo}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conheça quem estará ao seu lado em cada etapa do seu tratamento odontológico.
          </p>
        </div>

        {/* Conteúdo Principal: Foto + Apresentação */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna com Foto da Apresentação */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md">
                <img
                  id="foto-doutora-perfil"
                  src={IMAGENS.doutora.perfil}
                  onError={(e) => {
                    e.currentTarget.src = IMAGENS.doutora.perfilFallback;
                  }}
                  alt="Dra. Lígia Magalhães em seu consultório"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] object-cover object-center"
                  loading="lazy"
                />

                {/* Tag de arquivo de mídia oficial */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/75 text-white text-[11px] font-mono backdrop-blur-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>doutora-perfil.jpg</span>
                </div>

                {/* Box de Formação ao pé da foto */}
                <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Especialista em Dentística & Endodontia</p>
                    <p className="text-[11px] text-slate-500">Membro atuante em atualização científica contínua</p>
                  </div>
                </div>
              </div>

              {/* Fita de citação */}
              <div className="mt-4 p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-teal-900 text-sm italic">
                {DADOS_CLINICA.apresentacaoDoutora.citacao}
              </div>
            </div>
          </div>

          {/* Coluna de Texto & 3 Diferenciais */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                {DADOS_CLINICA.apresentacaoDoutora.paragrafo1}
              </p>
              <p>
                {DADOS_CLINICA.apresentacaoDoutora.paragrafo2}
              </p>
            </div>

            {/* Credenciais Rápidas */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-600" />
                Graduação em Odontologia
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-600" />
                Especialização em Dentística Restauradora
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-600" />
                Capacitação em Endodontia Mecanizada
              </span>
            </div>

            {/* 3 Diferenciais Curtos e Objetivos */}
            <div className="pt-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Pilares do Atendimento
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DADOS_CLINICA.apresentacaoDoutora.diferenciais.map((dif, idx) => (
                  <div
                    key={idx}
                    id={`diferencial-card-${idx + 1}`}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-teal-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center mb-3">
                      {idx === 0 && <Clock className="w-4 h-4" />}
                      {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                      {idx === 2 && <UserCheck className="w-4 h-4" />}
                    </div>
                    <h4 className="font-heading font-semibold text-slate-900 text-sm mb-1">
                      {dif.titulo}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dif.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
