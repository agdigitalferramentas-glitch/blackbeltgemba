import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import blackBeltLogo from "@/assets/logotipo-blackbelt.svg";

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
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-b from-navy/0 to-navy pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Headline */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-light/50 backdrop-blur-sm px-4 py-1.5 mb-5 sm:mb-6 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
              </span>
              <span className="text-gold-light text-xs sm:text-sm font-semibold tracking-wide">
                Material gratuito e exclusivo
              </span>
            </div>
            <img
              src={blackBeltLogo}
              alt="Black Belt"
              className="h-12 sm:h-14 md:h-[4.5rem] mb-5 sm:mb-7 animate-fade-in-up"
            />

            <h1 className="font-display text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-bold text-hero-foreground leading-[1.15] md:leading-[1.3] tracking-tight mb-5 sm:mb-8 max-w-[28ch] animate-fade-in-up text-balance" style={{ animationDelay: "0.1s" }}>
              O guia para profissionais sêniores que saem do operacional e chegam a{" "}
              <span className="gold-text whitespace-nowrap">cargos estratégicos</span>{" "}
              sem depender de politicagem.
            </h1>

            <p className="text-hero-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-7 max-w-[52ch] animate-fade-in-up hidden sm:block" style={{ animationDelay: "0.2s" }}>
              Você já tem experiência, resolve problemas difíceis e é respeitado pela equipe. Aqui você aprende a traduzir isso na linguagem que a diretoria entende e a se posicionar nas decisões de outro nível.
            </p>

            <ul className="space-y-2 sm:space-y-2.5 max-w-[52ch] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {[
                
                "Framework de linguagem financeira",
                "Business Case completo e pronto para usar",
                "Cases reais de profissionais que chegaram lá",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gold-light/90 text-xs sm:text-sm md:text-base text-left">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
