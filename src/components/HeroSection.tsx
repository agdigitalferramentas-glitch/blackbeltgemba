import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const AGSELL_FORM_ID = "1cc7a18d-1310-4a4b-b2ca-32141edb2cf9";
const AGSELL_SUBMIT_URL = `https://site.agsell.com.br/forms/${AGSELL_FORM_ID}/submit`;

const HeroSection = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("whatsapp", phone.trim());
      formData.append("formId", AGSELL_FORM_ID);

      // Best-effort submission to AgSell (no-cors so we don't block on response)
      await fetch(AGSELL_SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }).catch(() => {});
    } finally {
      navigate("/bb-obrigado");
    }
  };

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
          <div className="w-full lg:w-[460px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-navy-light/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gold/15 shadow-2xl">
              <h2 className="text-center text-hero-foreground font-display text-xl sm:text-2xl font-bold mb-6">
                Baixe o guia gratuito
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-5 py-3.5 rounded-full bg-transparent border border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-gold/60 transition-colors"
                />
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full px-5 py-3.5 rounded-full bg-transparent border border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-gold/60 transition-colors"
                />
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d\s()+-]/g, ""))}
                  placeholder="DDD + WhatsApp"
                  className="w-full px-5 py-3.5 rounded-full bg-transparent border border-hero-foreground/20 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-gold/60 transition-colors"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wide text-white bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? "ENVIANDO..." : "QUERO BAIXAR O GUIA GRATUITO"}</span>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-navy text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
