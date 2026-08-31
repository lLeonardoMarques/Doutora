import React, { useState } from "react";
import { Building2, Image as ImageIcon, Video, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { DADOS_CLINICA, FotoGaleria, VideoGaleria } from "../data/configClinica";

export const SecaoClinica: React.FC = () => {
  const [abaAtiva, setAbaAtiva] = useState<"fotos" | "videos">("fotos");
  const [midiaSelecionada, setMidiaSelecionada] = useState<FotoGaleria | VideoGaleria | null>(null);

  return (
    <section id="clinica" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>O Espaço</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Estrutura pensada para o seu bem-estar
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Ambiente moderno, higienizado e confortável para que você se sinta acolhido desde a recepção até o atendimento clínico.
            </p>
          </div>

          {/* Alternador de Mídia (Fotos / Vídeos) */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            <button
              id="tab-fotos-clinica"
              onClick={() => setAbaAtiva("fotos")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                abaAtiva === "fotos"
                  ? "bg-white text-teal-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Fotos da Clínica ({DADOS_CLINICA.galeriaFotos.length})</span>
            </button>

            <button
              id="tab-videos-clinica"
              onClick={() => setAbaAtiva("videos")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                abaAtiva === "videos"
                  ? "bg-white text-teal-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Vídeos Rápidos ({DADOS_CLINICA.galeriaVideos.length})</span>
            </button>
          </div>
        </div>

        {/* Galeria de Fotos */}
        {abaAtiva === "fotos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {DADOS_CLINICA.galeriaFotos.map((foto) => (
              <div
                key={foto.id}
                id={`card-foto-${foto.id}`}
                onClick={() => setMidiaSelecionada(foto)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Imagem com proporção 4:3 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    src={foto.arquivo}
                    onError={(e) => {
                      e.currentTarget.src = foto.placeholderUrl;
                    }}
                    alt={foto.titulo}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-teal-300" />
                      Clique para ampliar
                    </span>
                  </div>

                  {/* Nome do arquivo oficial de mídia */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-mono backdrop-blur-xs">
                    {foto.arquivo.replace("/imagens/", "")}
                  </div>
                </div>

                {/* Legenda curta */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-slate-900 text-sm mb-1">
                      {foto.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {foto.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Galeria de Vídeos */}
        {abaAtiva === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {DADOS_CLINICA.galeriaVideos.map((video) => (
              <div
                key={video.id}
                id={`card-video-${video.id}`}
                onClick={() => setMidiaSelecionada(video)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.titulo}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                    loading="lazy"
                  />

                  {/* Botão de Play Central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-teal-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-teal-700 transition-all">
                      <Play className="w-6 h-6 ml-0.5" fill="white" />
                    </div>
                  </div>

                  {/* Duração & Arquivo */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/85 text-white text-[11px] font-mono backdrop-blur-xs">
                    {video.arquivo}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/75 text-white text-xs font-medium">
                    {video.duracao}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-heading font-semibold text-slate-900 text-sm mb-1">
                    {video.titulo}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {video.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3 Garantias de Biossegurança e Conforto */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Esterilização hospitalar com laudo</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Climatização e purificação de ar contínua</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Consultório privativo e silencioso</span>
          </div>
        </div>

      </div>

      {/* Modal Simples de Visualização de Mídia */}
      {midiaSelecionada && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setMidiaSelecionada(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
              {"thumbnailUrl" in midiaSelecionada ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={midiaSelecionada.thumbnailUrl}
                    alt={midiaSelecionada.titulo}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xs"
                  />
                  <div className="relative z-10 text-center p-6 text-white space-y-3">
                    <div className="w-16 h-16 rounded-full bg-teal-600/90 mx-auto flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 ml-1" fill="white" />
                    </div>
                    <p className="text-sm font-semibold">{midiaSelecionada.titulo}</p>
                    <p className="text-xs text-slate-300 font-mono">
                      Duração: {midiaSelecionada.duracao} • Mídia Google Maps: {midiaSelecionada.arquivo}
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  src={midiaSelecionada.arquivo}
                  onError={(e) => {
                    e.currentTarget.src = midiaSelecionada.placeholderUrl;
                  }}
                  alt={midiaSelecionada.titulo}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-6 text-left flex justify-between items-start">
              <div>
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  {midiaSelecionada.titulo}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  {midiaSelecionada.descricao}
                </p>
                <span className="inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Nome do arquivo: {midiaSelecionada.arquivo}
                </span>
              </div>
              <button
                onClick={() => setMidiaSelecionada(null)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
