import React from "react";
import { X, Image as ImageIcon, Video, FolderCheck, CheckCircle2, Copy, Check } from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";

interface GuiaArquivosMidiaModalProps {
  aberto: boolean;
  onFechar: () => void;
}

export const GuiaArquivosMidiaModal: React.FC<GuiaArquivosMidiaModalProps> = ({
  aberto,
  onFechar,
}) => {
  const [copiadoIdx, setCopiadoIdx] = React.useState<number | null>(null);

  if (!aberto) return null;

  const copiarNome = (nome: string, idx: number) => {
    navigator.clipboard.writeText(nome);
    setCopiadoIdx(idx);
    setTimeout(() => setCopiadoIdx(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onFechar}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl my-8 text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-1">
              <FolderCheck className="w-3.5 h-3.5" />
              <span>Pasta Dedicada: /public/imagens</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
              Guia da Pasta de Imagens e Mídias
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Basta adicionar suas fotos dentro da pasta <code className="font-mono bg-slate-100 text-teal-900 font-bold px-1.5 py-0.5 rounded">/public/imagens/</code> e chamá-las no código pelo caminho <code className="font-mono bg-slate-100 text-teal-900 font-bold px-1.5 py-0.5 rounded">/imagens/nome-do-arquivo.jpg</code> ou através do arquivo <code className="font-mono bg-slate-100 text-teal-900 font-bold px-1.5 py-0.5 rounded">/src/data/imagens.ts</code>.
            </p>
          </div>

          <button
            onClick={onFechar}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fechar guia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabela / Lista de Mídias */}
        <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {DADOS_CLINICA.arquivosMidiaRequeridos.map((midia, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {midia.tipo.includes("Vídeo") ? (
                    <Video className="w-4 h-4 text-teal-700 shrink-0" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-teal-700 shrink-0" />
                  )}
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-900">
                    {midia.local}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {midia.tipo}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <code className="text-xs font-mono font-bold text-slate-800 bg-white px-2 py-1 rounded border border-slate-200">
                    {midia.nomeArquivo}
                  </code>
                  <button
                    onClick={() => copiarNome(midia.nomeArquivo, idx)}
                    className="p-1 text-slate-400 hover:text-teal-700 transition-colors cursor-pointer"
                    title="Copiar nome do arquivo"
                  >
                    {copiadoIdx === idx ? (
                      <Check className="w-3.5 h-3.5 text-teal-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600">
                  {midia.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exemplos de Código para Chamar as Imagens */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono space-y-2">
          <p className="text-teal-400 font-bold flex items-center gap-1.5 font-sans text-xs">
            <span>💡 Como chamar as imagens no código React:</span>
          </p>
          <div className="p-2.5 rounded-lg bg-slate-950 text-slate-300 overflow-x-auto space-y-1">
            <p className="text-slate-500">// Opção 1: Usando o arquivo /src/data/imagens.ts</p>
            <p className="text-teal-300">import &#123; IMAGENS &#125; from "../data/imagens";</p>
            <p className="text-sky-300">&lt;img src=&#123;IMAGENS.doutora.hero&#125; alt="Dra. Lígia" /&gt;</p>
            <p className="text-slate-500 pt-1">// Opção 2: Pelo caminho direto da pasta</p>
            <p className="text-sky-300">&lt;img src="/imagens/doutora-hero.jpg" alt="Dra. Lígia" /&gt;</p>
          </div>
        </div>

        {/* Instruções Rápidas */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Coloque os arquivos na pasta <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-teal-900 font-bold">/public/imagens/</code></span>
          </div>
          <button
            onClick={onFechar}
            className="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-semibold text-xs hover:bg-teal-800 transition-colors cursor-pointer self-end sm:self-auto"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
