import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Sparkles, MessageCircle } from "lucide-react";
import { DADOS_CLINICA } from "../data/configClinica";

interface CabecalhoProps {
  onAgendarClick: () => void;
}

export const Cabecalho: React.FC<CabecalhoProps> = ({ onAgendarClick }) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolouPagina, setRolouPagina] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setRolouPagina(true);
      } else {
        setRolouPagina(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksNavegacao = [
    { label: "Início", href: "#inicio" },
    { label: "A Doutora", href: "#a-doutora" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "A Clínica", href: "#clinica" },
    { label: "Contato", href: "#contato" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuAberto(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="cabecalho-principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        rolouPagina
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3"
          : "bg-white/80 backdrop-blur-xs py-4 md:py-5 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo / Nome da Marca */}
          <a
            id="link-logo"
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="group flex items-center gap-3 text-left transition-opacity hover:opacity-95"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <span className="block font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-800 leading-tight">
                {DADOS_CLINICA.nomeDoutora}
              </span>
              <span className="block text-xs font-medium tracking-wide text-teal-700">
                Odontologia Especializada
              </span>
            </div>
          </a>

          {/* Navegação Desktop (4 itens solicitados + A Clínica) */}
          <nav id="nav-desktop" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {linksNavegacao.map((item) => (
              <a
                key={item.href}
                id={`nav-link-${item.href.replace("#", "")}`}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 rounded-lg transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="btn-whatsapp-header"
              href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
                "Olá! Gostaria de informações sobre agendamento de consulta com a Dra. Lígia Magalhães."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 rounded-lg transition-colors"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-teal-600" />
            </a>

            <button
              id="btn-agendar-header"
              onClick={onAgendarClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm hover:shadow transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-100" />
              <span>Agendar consulta</span>
            </button>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div className="flex items-center md:hidden gap-2">
            <button
              id="btn-menu-mobile"
              onClick={() => setMenuAberto(!menuAberto)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-teal-700 hover:bg-teal-50 focus:outline-none"
              aria-label="Abrir menu"
            >
              {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Retrátil */}
        {menuAberto && (
          <div
            id="menu-mobile-container"
            className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-100 bg-white rounded-2xl p-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-1">
              {linksNavegacao.map((item) => (
                <a
                  key={item.href}
                  id={`nav-mobile-${item.href.replace("#", "")}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50/80 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
              <button
                id="btn-agendar-mobile"
                onClick={() => {
                  setMenuAberto(false);
                  onAgendarClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar consulta</span>
              </button>

              <a
                id="btn-whatsapp-mobile"
                href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
                  "Olá! Gostaria de informações sobre agendamento com a Dra. Lígia Magalhães."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-teal-600" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
