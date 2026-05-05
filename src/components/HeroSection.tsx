import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const AGSELL_FORM_ID = "1cc7a18d-1310-4a4b-b2ca-32141edb2cf9";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://site.agsell.com.br/forms/${AGSELL_FORM_ID}`;
    iframe.style.cssText =
      "width:100%;border:none;border-radius:12px;min-height:420px;background:transparent;transition:height 0.3s ease;";
    iframe.setAttribute("allowtransparency", "true");
    iframe.title = "Baixe o guia gratuito";
    container.appendChild(iframe);

    const onMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "agsell-form-height" && e.data.formId === AGSELL_FORM_ID) {
        iframe.style.height = e.data.height + "px";
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

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

          {/* Right: Form */}
          <div className="w-full lg:w-[600px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-navy-light/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-gold/20">
              <h2 className="text-center text-hero-foreground font-display text-xl sm:text-2xl font-bold mb-4">
                Baixe o guia gratuito
              </h2>
              <div ref={containerRef} id={`agsell-form-${AGSELL_FORM_ID}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
