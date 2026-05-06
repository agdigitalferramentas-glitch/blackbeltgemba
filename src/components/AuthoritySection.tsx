import { ArrowRight } from "lucide-react";

const stats = [
  { value: "+30 mil", label: "profissionais capacitados em todo o Brasil" },
  { value: "+R$ 1 bi", label: "em ganhos gerados para os clientes" },
  { value: "30x", label: "de retorno sobre o investimento nos projetos" },
  { value: "+1.000", label: "empresas atendidas em todos os setores" },
  { value: "+400", label: "projetos de consultoria com resultado documentado" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AuthoritySection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-navy text-hero-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 leading-tight">
            Esse método foi construído dentro de mais de{" "}
            <span className="gold-text">1.000 empresas</span> por quem formou mais de{" "}
            <span className="gold-text">30 mil profissionais</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-14">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl border border-hero-foreground/10 bg-navy-light/40 backdrop-blur-sm w-[calc(50%-0.5rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <p className="text-2xl sm:text-4xl md:text-5xl font-bold gold-text mb-2 sm:mb-3 font-display">{stat.value}</p>
                <p className="text-hero-foreground/70 text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-hero-foreground/60 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
            Os profissionais dos cases que estão neste guia usaram exatamente este método. Os números são reais. As promoções aconteceram.
          </p>

          <button
            onClick={scrollToTop}
            className="btn-gold inline-flex items-center justify-center gap-3 rounded-full text-sm sm:text-base w-full sm:w-auto"
          >
            QUERO BAIXAR O GUIA GRATUITO
            <span className="bg-navy text-gold rounded-full p-1.5 flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
