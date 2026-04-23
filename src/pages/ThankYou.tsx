import { CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--navy))] text-[hsl(var(--hero-foreground))]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 bg-[hsl(var(--gold)/0.15)] border border-[hsl(var(--gold)/0.3)] rounded-full px-5 py-2 mb-8">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--gold))]" />
          <span className="text-sm font-medium text-[hsl(var(--gold))]">Inscrição confirmada</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
          O seu guia está aqui.
        </h1>

        <p className="text-base md:text-lg text-[hsl(var(--hero-foreground)/0.75)] max-w-2xl mb-10 leading-relaxed">
          Você tem agora o diagnóstico de maturidade Lean. As 5 traduções mudam como a diretoria te enxerga. O modelo completo de Business Case e os 3 exemplos de profissionais cruzaram a barreira do operacional para o estratégico — com detalhamento completo de ROI, prazo e movimento.
        </p>

        <a
          href="#"
          className="btn-gold inline-flex items-center gap-3 text-base md:text-lg"
        >
          ACESSAR O GUIA AGORA
          <span className="bg-[hsl(var(--navy))] text-[hsl(var(--gold))] rounded-full p-1.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
