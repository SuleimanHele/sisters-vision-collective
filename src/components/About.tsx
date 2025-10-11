import { Target, Heart, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nascida de espírito empreendedor e paixão por criar valor real, a holding é o alicerce 
            por trás de marcas que já inspiram confiança e crescimento. Acreditamos que negócios 
            fortes começam com valores sólidos, e que cada projeto pode ser um agente de mudança 
            para a comunidade e para o país.
          </p>
        </div>

        {/* Vision, Mission, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser um farol do empreendedorismo feminino em Angola, criando um ecossistema onde 
              negócios geridos por mulheres se tornam referências de inovação, ética e rentabilidade.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empoderar negócios e pessoas, gerindo e desenvolvendo empresas que combinam paixão, 
              propósito e rentabilidade, criando valor genuíno para a comunidade.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-2">
              <li>• Excelência e Inovação</li>
              <li>• Sustentabilidade</li>
              <li>• Desenvolvimento Humano</li>
              <li>• Ética e Transparência</li>
              <li>• Visão de Futuro</li>
            </ul>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-10 shadow-lg border border-border">
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-10 h-10 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Nossa História</h3>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A nossa trajetória iniciou-se em <strong className="text-foreground">2017</strong>, com um projeto pioneiro: 
              a instalação de uma cozinha inclusiva, especializada em produtos destinados a públicos gluten free, 
              veganos e lactose free.
            </p>
            <p>
              Em <strong className="text-foreground">2018</strong>, demos um passo importante com a abertura da primeira 
              loja de levantamento de produtos e take-away, e em <strong className="text-foreground">2020</strong> lançámos 
              o primeiro café 100% gluten free de Angola.
            </p>
            <p>
              Durante a pandemia, demonstrámos resiliência e capacidade de adaptação, ao migrar para o formato online, 
              assegurando continuidade e proximidade com os nossos clientes.
            </p>
            <p>
              Em <strong className="text-foreground">2025</strong>, realizámos uma restruturação e expansão integral, 
              inaugurando um novo espaço de referência com duas cozinhas especializadas, valorizando a diversidade e 
              autenticidade cultural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
