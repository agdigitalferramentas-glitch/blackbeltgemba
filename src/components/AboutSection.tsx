import { ArrowRight } from "lucide-react";
import gembaTeam from "@/assets/gemba-team.webp";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AboutSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 80% 80%, hsla(var(--gold) / 0.12), transparent 50%)" }} />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-14 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground text-left mb-6 sm:mb-8">
              Quem está por trás deste material
            </h2>
            <div className="space-y-4 sm:space-y-6 text-secondary-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                O Gemba Group foi fundado em 2008 por Vânia Batista e Marcelo Rodrigues com um propósito que não mudou desde o primeiro dia: capacitar profissionais para transformar empresas.
              </p>
              <p>
                Em 2009 criaram o primeiro Programa de Formação Profissional Lean da história. Em 2023 chegaram à 100ª edição, com a mesma estrutura, o mesmo rigor e resultados que continuam aparecendo nos relatórios das empresas onde os alunos trabalham.
              </p>
              <p>
                Hoje são mais de 30 mil profissionais capacitados, mais de R$ 1 bilhão em ganhos gerados, mais de 400 projetos de consultoria realizados e mais de 1.000 empresas atendidas em todos os setores da economia brasileira.
              </p>
              <p>
                Não ensinamos teoria. Ensinamos o que funciona dentro de empresas de verdade, com gente de verdade, gerando resultado que aparece na carreira de quem aplica.
              </p>
              <p className="text-secondary-foreground/90 font-semibold text-base sm:text-lg">
                Este guia é a porta de entrada para esse método.
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <button
                onClick={scrollToTop}
                className="btn-gold inline-flex items-center justify-center gap-3 rounded-full text-sm sm:text-base w-full"
              >
                QUERO BAIXAR O GUIA GRATUITO
                <span className="bg-navy text-gold rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={gembaTeam}
              alt="Equipe Gemba Group"
              className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
