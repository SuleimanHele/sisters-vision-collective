import { ArrowRight, Leaf, Coffee, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import organikImage from "@/assets/organik-image.jpg";
import cafeImage from "@/assets/cafe-image.jpg";
import cateringImage from "@/assets/catering-image.jpg";

const companies = [
  {
    name: "Organik_ Tudo Fresco",
    tagline: "Plantamos o futuro, cuidamos do presente",
    description: "Mais do que um mercado de produtos naturais — somos um movimento que inspira escolhas conscientes e fortalece o elo entre quem cultiva, quem prepara e quem saboreia.",
    mission: "Cuidar de vidas com verdade e propósito — oferecer alimentos frescos e orgânicos que nutrem o corpo, respeitam o planeta e inspiram escolhas conscientes.",
    icon: Leaf,
    image: organikImage,
    color: "primary",
  },
  {
    name: "The Good Café",
    tagline: "Um bom café, um bom encontro",
    description: "Somos mais do que uma cafetaria — somos um espaço onde aromas despertam sonhos, onde sorrisos constroem pontes e onde cada chávena de café é um convite a encontros que aquecem o coração.",
    mission: "Transformar cada chávena de café num convite à vida — um lugar onde aromas despertam sonhos, conversas simples acendem grandes ideias.",
    icon: Coffee,
    image: cafeImage,
    color: "secondary",
  },
  {
    name: "Culturas Catering",
    tagline: "Unindo culturas através da arte gastronómica",
    description: "O catering não é apenas um serviço — é uma expressão de hospitalidade e excelência. Acreditamos que cada evento é único e merece uma experiência memorável.",
    mission: "Proporcionar experiências gastronómicas únicas que combinam sofisticação, versatilidade e respeito pela diversidade cultural.",
    icon: ChefHat,
    image: cateringImage,
    color: "accent",
  },
];

const Companies = () => {
  return (
    <section id="companies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Nossas Empresas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada empresa sob a The Sisters Vision representa um compromisso com a excelência, 
            inovação e impacto positivo na comunidade.
          </p>
        </div>

        <div className="space-y-20">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={company.image} 
                    alt={company.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <company.icon className={`w-12 h-12 text-${company.color}`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                    {company.name}
                  </h3>
                  <p className={`text-xl font-light text-${company.color} mb-4`}>
                    {company.tagline}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {company.description}
                </p>

                <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-foreground mb-2">Missão</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {company.mission}
                  </p>
                </div>

                <Button 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
