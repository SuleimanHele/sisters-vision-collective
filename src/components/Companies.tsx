import { useState } from "react";
import { ArrowRight, Leaf, Coffee, ChefHat, X, Utensils, Heart, Target, Users, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import organikImage from "@/assets/organik-image.jpg";
import cafeImage from "@/assets/cafe-image.jpg";
import cateringImage from "@/assets/catering-image.jpg";

const companies = [
  {
    id: "organik",
    name: "Organik_ Tudo Fresco",
    tagline: "Plantamos o futuro, cuidamos do presente",
    description: "Mais do que um mercado de produtos naturais — somos um movimento que inspira escolhas conscientes e fortalece o elo entre quem cultiva, quem prepara e quem saboreia.",
    mission: "Cuidar de vidas com verdade e propósito — oferecer alimentos frescos e orgânicos que nutrem o corpo, respeitam o planeta e inspiram escolhas conscientes.",
    icon: Leaf,
    image: organikImage,
    color: "primary",
    modalContent: {
      sobre: `O Organik_ Tudo Fresco nasceu com a missão de devolver às pessoas o sabor verdadeiro da terra. Somos mais do que um mercado de produtos naturais — somos um movimento que inspira escolhas conscientes e fortalece o elo entre quem cultiva, quem prepara e quem saboreia.

Acreditamos que plantamos o futuro e cuidamos do presente sempre que oferecemos alimentos frescos, autênticos e cheios de vida. Valorizamos o que vem diretamente da terra, mas também trazemos produtos importados de alta qualidade, ampliando as possibilidades e garantindo o melhor para os nossos clientes.

A nossa essência está em incentivar o consumo de alimentos frescos e orgânicos, promovendo saúde, sustentabilidade e respeito pelo planeta. Cada fruta, cada verdura e cada produto que chega às mãos dos nossos consumidores carrega o compromisso de qualidade e a paixão por uma alimentação que transforma vidas.

No Organik_ Tudo Fresco, não vendemos apenas alimentos — entregamos cuidado, transparência e a certeza de que cada escolha conta para um amanhã mais saudável e consciente.`,
      visao: "Transformar o Organik_ Tudo Fresco numa força que molda o futuro agroeconómico: impulsionar agricultores locais, gerar riqueza sustentável e elevar o padrão da alimentação saudável em Angola. Queremos ser reconhecidos como o motor que une tradição agrícola, inovação e impacto económico, criando um legado de crescimento e prosperidade que ultrapassa gerações.",
      missao: "Cuidar de vidas com verdade e propósito — oferecer alimentos frescos e orgânicos que nutrem o corpo, respeitam o planeta e inspiram escolhas conscientes. Somos guardiões do presente e semeadores do futuro, garantindo que cada produto entregue honra a saúde, a natureza e a confiança dos nossos consumidores.",
      valores: [
        "Raízes Fortes, Futuro Sustentável – Fortalecemos produtores locais e defendemos práticas agrícolas responsáveis que preservam a terra para as próximas gerações.",
        "Excelência Sem Compromissos – Frescor, autenticidade e qualidade superior são o coração de tudo o que oferecemos.",
        "Impacto que Inspira – Criamos oportunidades, fomentamos inovação e enriquecemos a economia local, provando que cada escolha alimentar pode transformar comunidades.",
        "Transparência e Integridade – Atuamos com ética inabalável e construímos relações de confiança genuína.",
        "Horizontes Abertos – Unimos o melhor da produção local com produtos importados de excelência, ampliando sabores e possibilidades para quem nos escolhe."
      ]
    }
  },
  {
    id: "the-good-cafe",
    name: "The Good Café",
    tagline: "Um bom café, um bom encontro",
    description: "Somos mais do que uma cafetaria — somos um espaço onde aromas despertam sonhos, onde sorrisos constroem pontes e onde cada chávena de café é um convite a encontros que aquecem o coração.",
    mission: "Transformar cada chávena de café num convite à vida — um lugar onde aromas despertam sonhos, conversas simples acendem grandes ideias.",
    icon: Coffee,
    image: cafeImage,
    color: "secondary",
    modalContent: {
      sobre: `O The Good Café nasceu do desejo de transformar uma simples pausa num momento cheio de significado. Somos mais do que uma cafetaria — somos um espaço onde aromas despertam sonhos, onde sorrisos constroem pontes e onde cada chávena de café é um convite a encontros que aquecem o coração e inspiram ideias.

Valorizamos a qualidade artesanal, o crescimento das pessoas e o impacto positivo na comunidade. Acreditamos que um bom café pode mover economias, fortalecer talentos e aproximar culturas. Por isso, investimos no desenvolvimento dos nossos colaboradores e na expansão sustentável da nossa presença em Luanda, contribuindo para o crescimento económico local.

Para cuidar de cada cliente com verdade e respeito, operamos duas cozinhas com conceitos distintos: uma dedicada a preparações gluten free, totalmente separada para evitar qualquer risco de contaminação, e outra para o menu tradicional. Essa escolha reflete o nosso compromisso com a saúde, a transparência e a experiência inclusiva de todos que nos visitam.

No The Good Café, cada detalhe importa: do grão selecionado com rigor ao ambiente caloroso que faz com que todos se sintam em casa. Somos apaixonados por criar experiências que unem sabor, propósito e humanidade — porque, para nós, um bom café é sempre um bom encontro.`,
      visao: "Ser uma força impulsionadora da economia local e um exemplo de crescimento empresarial sustentável, formando profissionais apaixonados e capacitados que crescem junto connosco. Expandir a nossa presença em Luanda, transformando o The Good Café numa rede de cafetarias que gera oportunidades, inspira carreiras e enriquece a cultura do café na cidade.",
      proposito: "Inspirar pessoas a desacelerar, conectar-se e apreciar os pequenos prazeres da vida, como apreciar os momentos cotidianos, celebrar conexões humanas, inspiração e bem-estar.",
      missao: "Transformar cada chávena de café num convite à vida — um lugar onde aromas despertam sonhos, conversas simples acendem grandes ideias e cada pessoa encontra mais do que uma bebida: encontra um pedaço de si mesma. Seremos o farol de inspiração e encontro, onde o sabor e a alma se unem para deixar uma marca inesquecível na comunidade e no mundo.",
      valores: [
        "Autenticidade com Alma – Honramos o sabor verdadeiro e as emoções que o acompanham.",
        "Sustentabilidade Viva – Respeitamos o planeta e apoiamos práticas justas e responsáveis.",
        "Comunidade em Primeiro Lugar – Somos ponto de encontro, escuta e partilha.",
        "Paixão pelo Detalhe – Cada gesto é pensado para criar experiências memoráveis.",
        "Hospitalidade Calorosa – Fazemos de cada visita um abraço em forma de café."
      ]
    }
  },
  {
    id: "culturas-catering",
    name: "Culturas Catering",
    tagline: "Unindo culturas através da arte gastronómica",
    description: "O catering não é apenas um serviço — é uma expressão de hospitalidade e excelência. Acreditamos que cada evento é único e merece uma experiência memorável.",
    mission: "Proporcionar experiências gastronómicas únicas que combinam sofisticação, versatilidade e respeito pela diversidade cultural.",
    icon: ChefHat,
    image: cateringImage,
    color: "accent",
    modalContent: {
      sobre: `Somos uma empresa especializada em catering industrial e eventos, comprometida em unir culturas através da arte gastronómica.

Na nossa empresa, o catering não é apenas um serviço — é uma expressão de hospitalidade e excelência. Acreditamos que cada evento é único e merece mais do que comida de qualidade: merece uma experiência memorável, onde sabores, aromas e apresentação criam momentos que ficam na memória.

A nossa cultura baseia-se em três pilares: respeito pelas tradições gastronómicas, inovação criativa e atenção ao detalhe. Valorizamos ingredientes frescos e fornecedores responsáveis, investimos na formação contínua da nossa equipa e buscamos superar expectativas a cada serviço.

Seja um encontro corporativo, uma celebração íntema ou um grande evento social, a nossa missão é transformar refeições em histórias partilhadas — elevando o padrão de catering em Luanda e fortalecendo a confiança que os nossos clientes depositam em nós.`,
      proposito: "Unir culturas através da arte gastronómica, promovendo encontros que celebram a diversidade e a sofisticação. Acreditamos que todo evento celebra uma CULTURA.",
      servicos: [
        "Catering Industrial",
        "Gestão de refeitórios",
        "Eventos Corporativos",
        "Celebrações Sociais",
        "Buffets Temáticos"
      ],
      missao: "A nossa missão é proporcionar experiências gastronómicas únicas e memoráveis, oferecendo um serviço de catering industrial e eventos que combina sofisticação, versatilidade e respeito pela diversidade cultural. Valorizamos as raízes e preferências dos nossos clientes, criando buffets cuidadosamente elaborados que tornam cada ocasião especial e exclusiva. Comprometemo-nos a servir com inovação, delicadeza e um elevado padrão de qualidade, promovendo um serviço personalizado que reflicta verdade, compromisso e profissionalismo, tornando cada evento uma experiência única e inesquecível.",
      visao: "Ser uma referência nacional e internacional no sector de catering industrial e de eventos, reconhecida pela capacidade de integrar diversas culturas em um serviço distinto, inovador e sofisticado. Almejamos consolidar uma marca que transcenda a prestação de serviços alimentares, tornando-se um símbolo de excelência, autenticidade e respeito pela diversidade cultural, posicionando a Cultura's Catering como um parceiro estratégico para clientes que exigem o mais alto nível de qualidade e atenção ao detalhe.",
      valores: [
        "Verdade e Integridade: Atuamos com transparência, ética e responsabilidade em todas as relações e processos.",
        "Valorização da Cultura Empresarial: Respeitamos e promovemos a diversidade cultural como pilar da nossa identidade e factor de diferenciação no mercado.",
        "Inovação Contínua: Buscamos constantemente a criatividade e a reinvenção dos nossos serviços, antecipando tendências e superando expectativas.",
        "Sofisticação e Excelência: Mantemos o compromisso com a qualidade superior, a estética refinada e a atenção meticulosa aos detalhes em cada projecto.",
        "Cuidado e Humanização: Valorizamos o respeito, a escuta activa e a atenção genuína às necessidades de cada cliente, colaborador e parceiro.",
        "Compromisso com a Sustentabilidade: Desenvolvemos práticas responsáveis que respeitam o meio ambiente e contribuem para o bem-estar social."
      ]
    }
  },
];

const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleLearnMore = (company) => {
    setSelectedCompany(company);
  };

  const closeModal = () => {
    setSelectedCompany(null);
  };

  const ModalSection = ({ title, children, icon: Icon }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="w-5 h-5 text-primary" aria-hidden="true" />}
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <section 
      id="companies" 
      className="py-16 sm:py-20 lg:py-24 bg-background"
      aria-labelledby="companies-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com Schema.org */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 
            id="companies-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            itemProp="name"
          >
            Nossas Empresas
          </h2>
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Cada empresa sob a The Sisters Vision representa um compromisso com a excelência,
            inovação e impacto positivo na comunidade.
          </p>
        </div>

        {/* Lista de empresas com Schema.org */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-10 items-center`}
              itemScope
              itemType="https://schema.org/Organization"
              itemProp="itemListElement"
            >
              {/* Meta tag com position convertida para string */}
              <meta itemProp="position" content={(index + 1).toString()} />
              
              {/* Image com atributos SEO */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={company.image}
                    alt={`${company.name} - ${company.tagline} - The Sisters Vision`}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    itemProp="image"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <company.icon 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" 
                      aria-hidden="true" 
                    />
                  </div>
                </div>
              </div>

              {/* Content com microdados */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                <div>
                  <h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3"
                    itemProp="name"
                  >
                    {company.name}
                  </h3>
                  <p 
                    className="text-lg sm:text-xl font-light text-primary mb-3 sm:mb-4"
                    itemProp="slogan"
                  >
                    {company.tagline}
                  </p>
                </div>

                <p 
                  className="text-muted-foreground leading-relaxed text-base sm:text-lg"
                  itemProp="description"
                >
                  {company.description}
                </p>

                <div 
                  className="bg-muted/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-primary"
                >
                  <p className="text-sm font-semibold text-foreground mb-2">Missão</p>
                  <p 
                    className="text-muted-foreground leading-relaxed text-sm sm:text-base"
                    itemProp="mission"
                  >
                    {company.mission}
                  </p>
                </div>

                <Button
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                  size="lg"
                  onClick={() => handleLearnMore(company)}
                  aria-label={`Saiba mais sobre ${company.name}`}
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal com acessibilidade */}
        {selectedCompany && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
              <div className="relative">
                {/* Header do Modal */}
                <div className="sticky top-0 bg-white rounded-t-xl sm:rounded-t-2xl border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <selectedCompany.icon 
                      className="w-6 h-6 sm:w-8 sm:h-8 text-primary" 
                      aria-hidden="true" 
                    />
                    <div>
                      <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-gray-900">
                        {selectedCompany.name}
                      </h2>
                      <p id="modal-description" className="text-base sm:text-lg text-gray-600">
                        {selectedCompany.tagline}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-gray-100 rounded-full p-1 sm:p-2 hover:bg-gray-200 transition-colors"
                    aria-label="Fechar modal"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Content do Modal */}
                <div className="p-4 sm:p-6">
                  {/* Sobre Nós */}
                  <ModalSection title="Sobre Nós" icon={Users}>
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                      <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                        {selectedCompany.modalContent.sobre}
                      </p>
                    </div>
                  </ModalSection>

                  {/* Propósito (se existir) */}
                  {selectedCompany.modalContent.proposito && (
                    <ModalSection title="Propósito" icon={Heart}>
                      <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                          "{selectedCompany.modalContent.proposito}"
                        </p>
                      </div>
                    </ModalSection>
                  )}

                  {/* Missão */}
                  <ModalSection title="Missão" icon={Target}>
                    <div className="bg-green-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-500">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {selectedCompany.modalContent.missao}
                      </p>
                    </div>
                  </ModalSection>

                  {/* Visão */}
                  <ModalSection title="Visão" icon={Globe}>
                    <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-500">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {selectedCompany.modalContent.visao}
                      </p>
                    </div>
                  </ModalSection>

                  {/* Serviços (se existir) */}
                  {selectedCompany.modalContent.servicos && (
                    <ModalSection title="Serviços" icon={Utensils}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedCompany.modalContent.servicos.map((servico, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                            <span className="text-gray-700 text-sm sm:text-base">{servico}</span>
                          </div>
                        ))}
                      </div>
                    </ModalSection>
                  )}

                  {/* Valores */}
                  <ModalSection title="Valores" icon={Sparkles}>
                    <div className="space-y-3">
                      {selectedCompany.modalContent.valores.map((valor, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 bg-white rounded-lg p-3 sm:p-4 border border-gray-200"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{valor}</p>
                        </div>
                      ))}
                    </div>
                  </ModalSection>

                  {/* CTA Button */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white py-2 sm:py-3 text-base sm:text-lg"
                    >
                      <a
                        href={`mailto:${selectedCompany.id === "organik"
                            ? "organik@thesistervision.com"
                            : selectedCompany.id === "the-good-cafe"
                              ? "thegoodcafe@thesistervision.com"
                              : "culturascatering@thesistervision.com"
                          }?subject=Contato%20-%20${encodeURIComponent(selectedCompany.name)}&body=Olá,%20gostaria%20de%20entrar%20em%20contacto%20sobre...`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Entrar em contacto com ${selectedCompany.name}`}
                      >
                        Entrar em Contacto
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Schema.org markup para a lista de empresas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Empresas da The Sisters Vision",
            "description": "Portfólio de empresas da holding The Sisters Vision incluindo Organik Tudo Fresco, The Good Café e Culturas Catering",
            "numberOfItems": companies.length,
            "itemListElement": companies.map((company, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Organization",
                "name": company.name,
                "description": company.description,
                "slogan": company.tagline,
                "url": `https://thesistersvision.com/#${company.id}`
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default Companies;