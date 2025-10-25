import { Target, Heart, TrendingUp, Users } from "lucide-react";
import sistersTogether2 from "@/assets/sisters-together-2.jpg";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro com microdados */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <h2 
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            itemProp="name"
          >
            Quem Somos
          </h2>
          <p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
            itemProp="description"
          >
            Nascida de espírito empreendedor e paixão por criar valor real, a holding é o alicerce 
            por trás de marcas que já inspiram confiança e crescimento. Acreditamos que negócios 
            fortes começam com valores sólidos, e que cada projeto pode ser um agente de mudança 
            para a comunidade e para o país.
          </p>
        </div>

        {/* Vision, Mission, Values Grid com Schema.org */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
          {/* Visão */}
          <div 
            className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            itemProp="knowsAbout"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Visão
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Ser um farol do empreendedorismo feminino em Angola, criando um ecossistema onde 
              negócios geridos por mulheres se tornam referências de inovação, ética e rentabilidade.
            </p>
          </div>

          {/* Missão */}
          <div 
            className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            itemProp="knowsAbout"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" aria-hidden="true" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Empoderar negócios e pessoas, gerindo e desenvolvendo empresas que combinam paixão, 
              propósito e rentabilidade, criando valor genuíno para a comunidade.
            </p>
          </div>

          {/* Valores */}
          <div 
            className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            itemProp="knowsAbout"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-accent" aria-hidden="true" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Valores
            </h3>
            <ul 
              className="text-muted-foreground leading-relaxed space-y-2 text-sm sm:text-base"
              role="list"
            >
              <li className="flex items-start">
                <span className="mr-2" aria-hidden="true">•</span>
                <span>Excelência e Inovação</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" aria-hidden="true">•</span>
                <span>Sustentabilidade</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" aria-hidden="true">•</span>
                <span>Desenvolvimento Humano</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" aria-hidden="true">•</span>
                <span>Ética e Transparência</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" aria-hidden="true">•</span>
                <span>Visão de Futuro</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Story Section com Schema.org e melhor acessibilidade */}
        <div className="max-w-6xl mx-auto px-4">
          <div 
            className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-border"
            itemScope
            itemType="https://schema.org/AboutPage"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" aria-hidden="true" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Nossa História
              </h3>
            </div>
            
            {/* Story Content with Image Grid */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Texto com microdados temporais */}
              <div 
                className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed order-2 lg:order-1"
                itemProp="mainContentOfPage"
              >
                <p className="text-sm sm:text-base">
                  A nossa trajetória iniciou-se em{" "}
                  <strong className="text-foreground" itemProp="foundingDate" content="2017">
                    2017
                  </strong>
                  , com um projeto pioneiro: a instalação de uma cozinha inclusiva, especializada 
                  em produtos destinados a públicos gluten free, veganos e lactose free.
                </p>
                
                <p className="text-sm sm:text-base">
                  Em{" "}
                  <strong className="text-foreground" itemProp="foundingLocation" content="Angola">
                    2018
                  </strong>
                  , demos um passo importante com a abertura da primeira loja de levantamento de 
                  produtos e take-away, e em{" "}
                  <strong className="text-foreground">2020</strong> lançámos o primeiro café 100% 
                  gluten free de Angola.
                </p>
                
                <p className="text-sm sm:text-base">
                  Durante a pandemia, demonstrámos resiliência e capacidade de adaptação, ao migrar 
                  para o formato online, assegurando continuidade e proximidade com os nossos clientes.
                </p>
                
                <p className="text-sm sm:text-base">
                  Em{" "}
                  <strong className="text-foreground">2025</strong>, realizámos uma restruturação e 
                  expansão integral, inaugurando um novo espaço de referência com duas cozinhas 
                  especializadas, valorizando a diversidade e autenticidade cultural.
                </p>
              </div>

              {/* Imagem com atributos SEO otimizados */}
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 order-1 lg:order-2 flex justify-center items-center">
                <img 
                  src={sistersTogether2} 
                  alt="Laeticia Makunga e equipa da The Sisters Vision - fundadoras unidas pela visão do empreendedorismo feminino em Angola"
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-contain transition-transform duration-300 hover:scale-105"
                  itemProp="image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Schema.org markup adicional para a história */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "Nossa História - The Sisters Vision",
                "description": "Trajetória da holding The Sisters Vision desde 2017, especializada em empreendedorismo feminino e desenvolvimento de negócios inovadores em Angola",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "The Sisters Vision",
                  "foundingDate": "2017",
                  "foundingLocation": "Luanda, Angola",
                  "description": "Holding angolana focada em empreendedorismo feminino e gestão de marcas inovadoras como Organik, The Good Café e Culturas Catering"
                }
              })}
            </script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;