import { CheckCircle, ArrowRight } from "lucide-react";

const bullets = [
  "O framework completo das 5 traduções que mudam como a diretoria te enxerga: como transformar taxa de defeito em custo da má qualidade, lead time em custo de oportunidade, ociosidade em capital parado, retrabalho em headcount oculto e risco operacional em exposição financeira. Com exemplos reais de antes e depois para cada uma",
  "O diagnóstico de maturidade Lean com 9 perguntas divididas em 3 blocos que revelam exatamente onde está a maior oportunidade estratégica para você na sua empresa hoje, independentemente do setor ou do porte",
  "Os 4 pilares para construir influência baseada em resultado dentro da empresa, sem depender de relacionamento, sem política e sem precisar esperar o momento certo para aparecer",
  "O modelo de Business Case completo com exemplo preenchido do início ao fim, para você chegar numa reunião de diretoria não como alguém pedindo aprovação, mas como alguém apresentando um investimento com retorno calculado e risco mapeado",
  "Três cases de profissionais que chegaram a cargos estratégicos usando este método: um gerente de produção que se tornou Diretor de Operações em 4 meses, uma supervisora de qualidade que ganhou um cargo criado especialmente para ela e um analista sênior que virou Head sem nunca ter pedido promoção",
  "O plano de posicionamento em 5 movimentos para você se tornar a referência técnica que a empresa chama primeiro quando os problemas mais difíceis aparecem, sem precisar ser o mais agressivo nem o mais político da sala",
  "O glossário Black Belt com 15 termos estatísticos e estratégicos e o guia de quando usar cada um em conversas com diretoria, para você entrar nessas reuniões falando a língua certa na hora certa",
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const BulletsSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-navy text-hero-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground text-left sm:text-center mb-4 sm:mb-6">
            Veja tudo o que você vai receber neste guia
          </h2>

          <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-hero-foreground/70 text-base sm:text-lg text-left sm:text-center leading-relaxed mb-3 sm:mb-4">
              Quem aprende a traduzir indicadores operacionais em impacto financeiro para a diretoria muda de nível — sem depender de política.
            </p>
            <p className="text-hero-foreground/70 text-base sm:text-lg text-left sm:text-center leading-relaxed">
              Não é mais um conteúdo sobre liderança e soft skills. É um método com frameworks, modelos prontos e cases reais de profissionais que usaram dados no lugar de política para chegar onde queriam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-navy-light/40 border border-gold/15 hover:border-gold/40 backdrop-blur-sm transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-hero-foreground/90 leading-relaxed text-sm sm:text-base">{bullet}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-14">
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
      </div>
    </section>
  );
};

export default BulletsSection;
