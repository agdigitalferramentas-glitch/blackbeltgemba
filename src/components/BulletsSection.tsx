import { CheckCircle } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-6">
            Veja tudo o que você vai receber neste guia
          </h2>

          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-muted-foreground text-lg text-center leading-relaxed mb-4">
              Quem aprende a traduzir indicadores operacionais em impacto financeiro para a diretoria muda de nível — sem depender de política.
            </p>
            <p className="text-muted-foreground text-lg text-center leading-relaxed">
              Não é mais um conteúdo sobre liderança e soft skills. É um método com frameworks, modelos prontos e cases reais de profissionais que usaram dados no lugar de política para chegar onde queriam.
            </p>
          </div>

          <div className="space-y-6">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <p className="text-foreground/90 leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button onClick={scrollToTop} className="btn-gold text-base md:text-lg font-bold">
              Quero o guia gratuito agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletsSection;
