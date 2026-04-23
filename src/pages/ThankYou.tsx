import { CheckCircle, Target, BookOpen, RefreshCw } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--navy))] text-[hsl(var(--hero-foreground))]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
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

      {/* Tips Section */}
      <section className="px-6 pb-24 md:pb-32 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Como tirar o melhor proveito deste material:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              text: "Aplique o diagnóstico em situações concretas do seu trabalho.",
            },
            {
              icon: BookOpen,
              text: "Identifique o que está travando o seu fluxo logo nos primeiros passos.",
            },
            {
              icon: RefreshCw,
              text: "Não busque a perfeição de primeira; siga os passos e busque a melhoria contínua.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--navy-light))] border border-[hsl(var(--gold)/0.15)] rounded-xl p-6"
            >
              <div className="bg-[hsl(var(--gold)/0.15)] w-11 h-11 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[hsl(var(--gold))]" />
              </div>
              <p className="text-sm md:text-base text-[hsl(var(--hero-foreground)/0.8)] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[hsl(var(--hero-foreground)/0.5)] mt-10">
          Dica extra: Salve esta página nos seus favoritos caso precise acessar o guia em outro dispositivo mais tarde.
        </p>
      </section>
    </div>
  );
};

export default ThankYou;
