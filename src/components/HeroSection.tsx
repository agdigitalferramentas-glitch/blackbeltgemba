import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone });
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

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Headline */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gold font-semibold text-sm md:text-base uppercase tracking-widest mb-6 animate-fade-in-up">
              Guia Gratuito — Black Belt
            </p>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              O guia para profissionais sêniores que querem sair do operacional e chegar a{" "}
              <span className="gold-text">cargos estratégicos</span>{" "}
              sem se preocupar com a politicagem.
            </h1>

            <p className="text-hero-foreground/80 text-lg md:text-xl leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Você já tem experiência. Já resolve os problemas difíceis. Já é respeitado pela equipe. O que este material te ensina é como transformar tudo isso em linguagem que a diretoria entende, em propostas que passam em qualquer aprovação e em um posicionamento que coloca o seu nome nas decisões de outro nível.
            </p>

            <p className="text-gold-light/70 text-sm md:text-base mb-6 lg:mb-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Gratuito. Com framework de linguagem financeira, Business Case completo e cases reais de profissionais que chegaram a cargos estratégicos usando este método.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-[420px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit}>
              <div className="bg-navy-light/60 backdrop-blur-md rounded-xl p-6 border border-gold/20 space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-navy-medium/80 border border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:border-gold/50 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-navy-medium/80 border border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:border-gold/50 transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-navy-medium/80 border border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/40 focus:outline-none focus:border-gold/50 transition-colors"
                  required
                />
                <button type="submit" className="w-full btn-gold text-base md:text-lg font-bold py-4 rounded-lg">
                  Quero o guia gratuito agora
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
