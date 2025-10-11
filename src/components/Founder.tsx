import { Award, Briefcase, GraduationCap } from "lucide-react";
import founder3 from "@/assets/founder-3.jpg";
import founder4 from "@/assets/founder-4.jpg";

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Liderança Visionária
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça a força por trás da The Sisters Vision
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photos */}
                <div className="flex flex-col gap-4 md:w-64">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={founder3} 
                      alt="Laeticia Makunga, Fundadora da The Sisters Vision" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={founder4} 
                      alt="Laeticia Makunga, CEO" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      Laeticia Makunga
                    </h3>
                    <p className="text-xl text-secondary font-light">
                      Fundadora & Diretora Geral
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Formação</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Licenciada em Contabilidade e Auditoria, pós-graduada em Marketing e 
                          Gestão de Empresas
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Cargo Atual</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Diretora Geral da CIF LOWENDA BREWERY COMPANY.LDA - CERVEJA BELA
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Experiência</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Mais de 12 anos de experiência em liderança empresarial, com histórico 
                          comprovado na gestão de equipas multidisciplinares e implementação de 
                          projetos de crescimento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Principais Conquistas
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Fundadora e CEO de uma holding que integra quatro empresas em sectores estratégicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Responsável pela expansão nacional da Cerveja BELA e sua internacionalização para a RDC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Diretora Comercial e Gestora com sólida experiência em planeamento estratégico e desenvolvimento de negócios</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
