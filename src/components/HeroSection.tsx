import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const AGSELL_FORM_ID = "1cc7a18d-1310-4a4b-b2ca-32141edb2cf9";
const AGSELL_FORM_URL = `https://site.agsell.com.br/forms/${AGSELL_FORM_ID}`;

const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Avoid duplicate iframes (StrictMode / re-renders)
    container.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = AGSELL_FORM_URL;
    iframe.style.cssText =
      "width:100%;border:none;border-radius:8px;background:transparent;display:block;min-height:520px;";
    iframe.setAttribute("allowtransparency", "true");
    iframe.title = "Baixe o guia gratuito";
    container.appendChild(iframe);

    const onMessage = (e: MessageEvent) => {
      if (!e.data) return;
      const data = typeof e.data === "string" ? { type: e.data } : e.data;
      const type = String(data.type || data.event || "").toLowerCase();

      if (
        data.type === "agsell-form-height" &&
        data.formId === AGSELL_FORM_ID &&
        typeof data.height === "number"
      ) {
        iframe.style.height = `${data.height}px`;
        return;
      }

      if (
        type.includes("submit") ||
        type.includes("success") ||
        type.includes("sent") ||
        type.includes("complete")
      ) {
        navigate("/bb-obrigado");
      }
    };

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      container.innerHTML = "";
    };
  }, [navigate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Headline */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gold font-semibold text-xs sm:text-sm md:text-base uppercase tracking-widest mb-4 sm:mb-6 animate-fade-in-up">
              Guia Gratuito — Black Belt
            </p>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground leading-tight mb-5 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              O guia para profissionais sêniores que querem sair do operacional e chegar a{" "}
              <span className="gold-text">cargos estratégicos</span>{" "}
              sem se preocupar com a politicagem.
            </h1>

            <p className="text-hero-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 animate-fade-in-up hidden sm:block" style={{ animationDelay: "0.2s" }}>
              Você já tem experiência. Já resolve os problemas difíceis. Já é respeitado pela equipe. O que este material te ensina é como transformar tudo isso em linguagem que a diretoria entende, em propostas que passam em qualquer aprovação e em um posicionamento que coloca o seu nome nas decisões de outro nível.
            </p>

            <p className="text-gold-light/70 text-xs sm:text-sm md:text-base mb-4 lg:mb-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Gratuito. Com framework de linguagem financeira, Business Case completo e cases reais de profissionais que chegaram a cargos estratégicos usando este método.
            </p>
          </div>

          {/* Right: Form (AgSell iframe) */}
          <div className="w-full lg:w-[460px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-navy-light/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gold/15 shadow-2xl">
              <div
                ref={containerRef}
                id={`agsell-form-${AGSELL_FORM_ID}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
