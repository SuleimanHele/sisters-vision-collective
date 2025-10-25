import { Award, Briefcase, GraduationCap } from "lucide-react";
import founder3 from "@/assets/founder-2.jpg";

const Founder = () => {
  return (
    <section 
      id="founder" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background"
      aria-labelledby="founder-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header com Schema.org */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 
              id="founder-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
              itemProp="name"
            >
              Liderança Visionária
            </h2>
            <p 
              className="text-base sm:text-lg text-muted-foreground"
              itemProp="description"
            >
              Conheça a força por trás da The Sisters Vision
            </p>
          </div>

          <div 
            className="bg-card rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-border mx-4 sm:mx-0"
            itemProp="mainEntity"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                {/* Photo com Schema.org */}
                <div className="md:w-48 lg:w-64 mx-auto md:mx-0">
                  <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={founder3} 
                      alt="Laeticia Makunga, Fundadora e Diretora Geral da The Sisters Vision - Líder em empreendedorismo feminino em Angola"
                      className="w-full h-64 sm:h-80 object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Info com microdados */}
                <div className="flex-1 space-y-4 sm:space-y-6">
                  <div>
                    <h3 
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2"
                      itemProp="name"
                    >
                      Laeticia Makunga
                    </h3>
                    <p 
                      className="text-lg sm:text-xl text-secondary font-light"
                      itemProp="jobTitle"
                    >
                      Fundadora & Diretora Geral
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Formação */}
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Formação</h4>
                        <p 
                          className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                          itemProp="hasCredential"
                        >
                          Licenciada em Contabilidade e Auditoria, pós-graduada em Marketing e 
                          Gestão de Empresas
                        </p>
                      </div>
                    </div>

                    {/* Cargo Atual */}
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Cargo Atual</h4>
                        <p 
                          className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                          itemProp="worksFor"
                          itemScope
                          itemType="https://schema.org/Organization"
                        >
                          <span itemProp="name">Diretora Geral da CIF LOWENDA BREWERY COMPANY.LDA - CERVEJA BELA</span>
                        </p>
                      </div>
                    </div>

                    {/* Experiência */}
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Experiência</h4>
                        <p 
                          className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                          itemProp="description"
                        >
                          Mais de 12 anos de experiência em liderança empresarial, com histórico 
                          comprovado na gestão de equipas multidisciplinares e implementação de 
                          projetos de crescimento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements com Schema.org */}
              <div 
                className="mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 border-t border-border"
                itemProp="knowsAbout"
              >
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Principais Conquistas
                </h4>
                <ul 
                  className="space-y-2 sm:space-y-3 text-muted-foreground"
                  role="list"
                >
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" 
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base">
                      Fundadora e CEO de uma holding que integra quatro empresas em sectores estratégicos
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" 
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base">
                      Responsável pela expansão nacional da Cerveja BELA e sua internacionalização para a RDC
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <span 
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" 
                      aria-hidden="true"
                    />
                    <span className="text-sm sm:text-base">
                      Diretora Comercial e Gestora com sólida experiência em planeamento estratégico e desenvolvimento de negócios
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org markup para Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Laeticia Makunga",
          "jobTitle": "Fundadora & Diretora Geral",
          "description": "Fundadora da The Sisters Vision, holding angolana com mais de 12 anos de experiência em liderança empresarial e empreendedorismo feminino",
          "image": "https://thesistersvision.com/founder-2.jpg",
          "knowsAbout": [
            "Empreendedorismo Feminino",
            "Gestão Empresarial",
            "Expansão de Negócios",
            "Liderança Estratégica",
            "Desenvolvimento de Marcas"
          ],
          "hasCredential": [
            "Licenciada em Contabilidade e Auditoria",
            "Pós-graduada em Marketing e Gestão de Empresas"
          ],
          "worksFor": [
            {
              "@type": "Organization",
              "name": "The Sisters Vision",
              "description": "Holding angolana especializada em empreendedorismo feminino"
            },
            {
              "@type": "Organization", 
              "name": "CIF LOWENDA BREWERY COMPANY.LDA - CERVEJA BELA",
              "description": "Empresa de cerveja angolana"
            }
          ],
          "memberOf": {
            "@type": "Organization",
            "name": "The Sisters Vision",
            "foundingDate": "2017"
          },
          "award": [
            "Fundadora de holding com 4 empresas em sectores estratégicos",
            "Expansão nacional da Cerveja BELA e internacionalização para RDC",
            "Mais de 12 anos de experiência em liderança empresarial"
          ],
          "sameAs": [
            "https://www.linkedin.com/in/laeticia-makunga"
          ]
        })}
      </script>
    </section>
  );
};

export default Founder;