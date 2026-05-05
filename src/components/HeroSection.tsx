import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const AGSELL_FORM_ID = "1cc7a18d-1310-4a4b-b2ca-32141edb2cf9";
const AGSELL_SUPABASE_URL = "https://gmemxbfibakfpsjbsvyt.supabase.co";
const AGSELL_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZW14YmZpYmFrZnBzamJzdnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNTMxOTQsImV4cCI6MjA4NTYyOTE5NH0.Aq7KveS7PwwAADPK-n0rz-CEYM0dTYZLnttTph1EfD0";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().min(8, "Informe seu WhatsApp").max(20),
});

const HeroSection = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email, whatsapp });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${AGSELL_SUPABASE_URL}/rest/v1/form_submissions`, {
        method: "POST",
        headers: {
          apikey: AGSELL_ANON_KEY,
          Authorization: `Bearer ${AGSELL_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          form_id: AGSELL_FORM_ID,
          data: parsed.data,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      navigate("/bb-obrigado");
    } catch (err) {
      console.error(err);
      toast.error("Não foi possível enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
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

          {/* Right: Native form */}
          <div className="w-full lg:w-[460px] flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-navy-light/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gold/15 shadow-2xl">
              <h2 className="text-center text-hero-foreground font-display font-bold text-xl sm:text-2xl mb-6">
                Baixe o guia gratuito
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="w-full rounded-full bg-transparent border border-hero-foreground/25 px-5 py-3 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  className="w-full rounded-full bg-transparent border border-hero-foreground/25 px-5 py-3 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition"
                />
                <input
                  type="tel"
                  placeholder="DDD + WhatsApp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  maxLength={20}
                  required
                  className="w-full rounded-full bg-transparent border border-hero-foreground/25 px-5 py-3 text-hero-foreground placeholder:text-hero-foreground/50 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold mt-2 inline-flex items-center justify-center gap-3 rounded-full text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "ENVIANDO..." : "QUERO BAIXAR O GUIA GRATUITO"}
                  <span className="bg-navy text-gold rounded-full p-1.5 flex items-center justify-center">
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
