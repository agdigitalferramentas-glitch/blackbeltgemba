const testimonials = [
  {
    quote: "Em 6 meses saí de analista sênior para gerente de operações. O método mudou a forma como eu apresento resultados.",
    name: "Ricardo M.",
    role: "Gerente de Operações — Indústria Automotiva",
  },
  {
    quote: "Parei de competir por visibilidade e comecei a mostrar impacto financeiro. Em 1 ano, fui promovida a diretora.",
    name: "Camila S.",
    role: "Diretora de Qualidade — Farmacêutica",
  },
  {
    quote: "Meu Business Case foi aprovado de primeira. R$ 2,3 milhões em saving no primeiro projeto como coordenador.",
    name: "Felipe T.",
    role: "Coordenador de Melhoria Contínua — Alimentos",
  },
  {
    quote: "Eu achava que precisava de MBA para subir. Na verdade, precisava falar a língua do CFO. Este guia ensina exatamente isso.",
    name: "Juliana R.",
    role: "Head de Processos — Logística",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground text-center mb-4">
          Quem aplicou, <span className="gold-text">chegou lá</span>
        </h2>
        <p className="text-secondary-foreground/60 text-center max-w-2xl mx-auto mb-14">
          Veja o que dizem profissionais que usaram dados — não política — para alcançar cargos estratégicos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-navy-medium/40 border border-gold/10 rounded-xl p-6 flex flex-col justify-between"
            >
              <p className="text-secondary-foreground/90 text-base md:text-lg leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-gold font-semibold text-sm">{t.name}</p>
                <p className="text-secondary-foreground/50 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
