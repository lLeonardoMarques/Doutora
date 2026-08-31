import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  Mail,
  CalendarCheck,
  Star,
  Sparkles,
  Heart,
  Compass,
  Instagram
} from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";

interface SecaoContatoProps {
  tratamentoPreSelecionado?: string;
}

export const SecaoContato: React.FC<SecaoContatoProps> = ({ tratamentoPreSelecionado }) => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [tratamento, setTratamento] = useState(tratamentoPreSelecionado || "");
  const [mensagem, setMensagem] = useState("");
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);

  // Sincroniza se o usuário selecionou tratamento em outra seção
  React.useEffect(() => {
    if (tratamentoPreSelecionado) {
      setTratamento(tratamentoPreSelecionado);
    }
  }, [tratamentoPreSelecionado]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mensagem estruturada para enviar diretamente via WhatsApp ou salvar
    const textoWhatsApp = `Olá, Dra. Lígia Magalhães! Meu nome é ${nome}. Gostaria de agendar uma consulta${
      tratamento ? ` para ${tratamento}` : ""
    }.${mensagem ? ` Mensagem: ${mensagem}` : ""}`;

    const urlWhatsApp = `https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
      textoWhatsApp
    )}`;

    // Redireciona para o WhatsApp oficial e mostra feedback positivo
    window.open(urlWhatsApp, "_blank");
    setEnviadoComSucesso(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Agendamento & Localização</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Vamos cuidar do seu sorriso?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Entre em contato pelo WhatsApp oficial <strong className="text-teal-800 font-semibold">{DADOS_CLINICA.whatsappFormatado}</strong> ou envie sua mensagem abaixo para agendar sua consulta.
          </p>
        </div>

        {/* Destaque Avaliação Google Maps */}
        <div className="mb-10 p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl font-bold text-slate-900">
                  {DADOS_CLINICA.googleRating}
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  ({DADOS_CLINICA.googleReviewsCount} avaliações no Google)
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Reconhecida por atendimento acolhedor, pontualidade e tranquilidade nos tratamentos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
              👩‍⚕️ Empresa de empreendedoras
            </span>
            <a
              href={DADOS_CLINICA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold transition-colors"
            >
              <span>Ver ficha no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Informações de Contato, Endereço & Horários */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Card Principal de Atendimento */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
              
              {/* WhatsApp Destaque */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp & Telefone Direto
                  </h3>
                  <a
                    id="link-whatsapp-contato"
                    href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
                      "Olá! Gostaria de agendar uma consulta com a Dra. Lígia Magalhães."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1.5 mt-0.5"
                  >
                    <span>{DADOS_CLINICA.whatsappFormatado}</span>
                    <ExternalLink className="w-4 h-4 text-teal-600" />
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Atendimento ágil para agendamentos e esclarecimento de dúvidas.
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Endereço do Consultório
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {DADOS_CLINICA.enderecoCompleto}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Plus Code: <code className="font-mono bg-slate-50 px-1 py-0.5 rounded text-slate-700">{DADOS_CLINICA.plusCode}</code>
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Horários */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-teal-700" />
                </div>
                <div className="space-y-1 text-xs w-full">
                  <h3 className="font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Horários de Funcionamento (Google)
                  </h3>
                  {DADOS_CLINICA.horarios.map((h, i) => (
                    <div key={i} className="flex justify-between gap-4 text-slate-600 py-0.5 border-b border-slate-50 last:border-0">
                      <span className="font-medium">{h.dias}:</span>
                      <span className="text-slate-800 font-semibold">{h.horas}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Links Sociais e Serviços */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={DADOS_CLINICA.linkServicosBio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Serviços / Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Mapa Embutido / Visualização da Localização */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  {DADOS_CLINICA.bairroCidade}
                </span>
                <a
                  href={DADOS_CLINICA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold hover:underline flex items-center gap-1"
                >
                  Abrir rota no Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <div className="relative aspect-video w-full bg-slate-100">
                {/* Embed Google Maps com o endereço oficial */}
                <iframe
                  title="Mapa de localização de Lighia Magalhães Odontologia Especializada"
                  src="https://maps.google.com/maps?q=Av.+El%C3%ADsio+Teixeira+Leite%2C+4496+-+Jardim+Paulistano%2C+S%C3%A3o+Paulo+-+SP%2C+02810-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.1] contrast-[1.02]"
                />
              </div>
            </div>

          </div>

          {/* Formulário Curto de Agendamento & Avaliações Reais */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md text-left">
              
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Envie uma mensagem para agendar
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Preencha os campos abaixo para iniciar seu agendamento no WhatsApp da Dra. Lígia.
                </p>
              </div>

              {enviadoComSucesso ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                    <h4 className="font-bold text-base">Mensagem preparada com sucesso!</h4>
                  </div>
                  <p className="text-sm">
                    Você foi redirecionado para o WhatsApp oficial da clínica com os seus dados prontos para envio. Caso a janela não tenha aberto, clique no botão abaixo:
                  </p>
                  <a
                    href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
                      `Olá! Gostaria de agendar consulta com a Dra. Lígia Magalhães. Nome: ${nome}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white font-medium text-sm hover:bg-teal-800"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir conversa no WhatsApp</span>
                  </a>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEnviadoComSucesso(false);
                        setNome("");
                        setWhatsapp("");
                        setMensagem("");
                      }}
                      className="text-xs text-teal-800 underline hover:text-teal-950 cursor-pointer"
                    >
                      Preencher outro agendamento
                    </button>
                  </div>
                </div>
              ) : (
                <form id="form-contato-agendamento" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Nome Completo */}
                  <div>
                    <label htmlFor="input-nome" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Maria Silva"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div>
                    <label htmlFor="input-whatsapp" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="input-whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (11) 97236-6546"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Procedimento de Interesse (opcional) */}
                  <div>
                    <label htmlFor="select-tratamento" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tratamento de Interesse
                    </label>
                    <select
                      id="select-tratamento"
                      value={tratamento}
                      onChange={(e) => setTratamento(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all"
                    >
                      <option value="">Selecione um tratamento (ou avaliação geral)</option>
                      {DADOS_CLINICA.tratamentos.map((t) => (
                        <option key={t.id} value={t.titulo}>
                          {t.titulo}
                        </option>
                      ))}
                      <option value="Outro / Não sei informar">Outro / Gostaria de orientação</option>
                    </select>
                  </div>

                  {/* Mensagem / Preferência de horário */}
                  <div>
                    <label htmlFor="input-mensagem" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mensagem ou melhor horário (opcional)
                    </label>
                    <textarea
                      id="input-mensagem"
                      rows={3}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Ex: Gostaria de agendar no período da manhã..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Botão de Envio Principal */}
                  <div className="pt-2">
                    <button
                      id="btn-submeter-agendamento"
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-teal-700 hover:bg-teal-800 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Agendar pelo WhatsApp</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2.5">
                      Você será atendido(a) no WhatsApp oficial da clínica: {DADOS_CLINICA.whatsappFormatado}
                    </p>
                  </div>

                </form>
              )}

            </div>

            {/* Depoimentos Reais de Pacientes do Google Maps */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-left space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Avaliações Reais de Pacientes</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold">
                    Google Maps 5.0 ★
                  </span>
                </h4>
                <a
                  href={DADOS_CLINICA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-700 font-semibold hover:underline flex items-center gap-1"
                >
                  Ver todas ({DADOS_CLINICA.googleReviewsCount})
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {DADOS_CLINICA.avaliacoesGoogle.map((av, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between text-xs space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex text-amber-400">
                          {[...Array(av.estrelas)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400">{av.tempo}</span>
                      </div>
                      <p className="text-slate-700 italic leading-relaxed">
                        "{av.comentario}"
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 font-semibold text-slate-800 text-[11px]">
                      {av.nome}
                    </div>
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
