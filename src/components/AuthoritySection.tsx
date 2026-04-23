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
    <section className="py-20 md:py-28 bg-navy text-hero-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight">
            Esse método foi construído dentro de mais de{" "}
            <span className="gold-text">1.000 empresas</span> por quem formou mais de{" "}
            <span className="gold-text">30 mil profissionais</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-hero-foreground/10 bg-navy-light/40 backdrop-blur-sm"
              >
                <p className="text-4xl md:text-5xl font-bold gold-text mb-3 font-display">{stat.value}</p>
                <p className="text-hero-foreground/70 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-hero-foreground/60 text-base max-w-2xl mx-auto mb-10">
            Os profissionais dos cases que estão neste guia usaram exatamente este método. Os números são reais. As promoções aconteceram.
          </p>

          <button onClick={scrollToTop} className="btn-gold text-base md:text-lg font-bold">
            Quero o guia gratuito agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
