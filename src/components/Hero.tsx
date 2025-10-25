import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/1.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Suave scroll com offset para navbar fixa
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Página inicial The Sisters Vision"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Schema.org markup para a página */}
      <meta itemProp="name" content="The Sisters Vision - Holding Empresarial em Angola" />
      <meta itemProp="description" content="Holding angolana especializada em empreendedorismo feminino e gestão de marcas inovadoras como Organik, The Good Café e Culturas Catering" />
      
      {/* Background Image com atributos SEO */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Sisters Vision - Equipe de liderança feminina angolana reunida em Luanda"
          className="w-full h-full object-cover"
          itemProp="image"
          loading="eager" // Hero image carrega prioritariamente
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" 
          aria-hidden="true"
        />
      </div>

      {/* Content com Schema.org */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center px-4"
          itemScope
          itemType="https://schema.org/Organization"
          itemProp="mainEntity"
        >
          <meta itemProp="name" content="The Sisters Vision" />
          <meta itemProp="url" content="https://thesistersvision.com" />
          
          {/* Heading principal - H1 para SEO */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight animate-fade-in"
            itemProp="headline"
          >
            The Sisters Vision
          </h1>
          
          {/* Subtítulo com Schema.org */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary mb-6 sm:mb-8 font-light animate-fade-in-delay-1"
            itemProp="slogan"
          >
            Construímos hoje os negócios que moldam o amanhã
          </p>
          
          {/* Descrição principal */}
          <p 
            className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-12 max-w-2xl leading-relaxed animate-fade-in-delay-2 mx-auto"
            itemProp="description"
          >
            Uma holding criada para gerir e impulsionar empresas que partilham um propósito comum:
            gerar impacto positivo, enriquecer a economia local e transformar vidas através de
            qualidade, ética e inovação.
          </p>
          
          {/* CTA Buttons com acessibilidade */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-3">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Conhecer a história da The Sisters Vision"
            >
              Conheça a Nossa História
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("companies")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-sm sm:text-base py-3 sm:py-6 transition-all duration-300"
              aria-label="Explorar as empresas da The Sisters Vision"
            >
              Nossas Empresas
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator com acessibilidade */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2"
        aria-label="Scroll para a próxima seção"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" aria-hidden="true" />
      </button>

      {/* CSS-in-JS para animações */}
      <style>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in { 
          animation: fade-in 1s ease-out forwards; 
        }
        .animate-fade-in-delay-1 { 
          animation: fade-in 1s ease-out 0.3s forwards; 
          opacity: 0; 
        }
        .animate-fade-in-delay-2 { 
          animation: fade-in 1s ease-out 0.6s forwards; 
          opacity: 0; 
        }
        .animate-fade-in-delay-3 { 
          animation: fade-in 1s ease-out 0.9s forwards; 
          opacity: 0; 
        }
        
        /* Melhorar acessibilidade para reduzir movimento */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-delay-1,
          .animate-fade-in-delay-2,
          .animate-fade-in-delay-3 {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>

      {/* Schema.org markup estruturado */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "The Sisters Vision - Holding Empresarial em Angola",
          "description": "Holding angolana especializada em empreendedorismo feminino e gestão de marcas inovadoras",
          "url": "https://thesistersvision.com",
          "mainEntity": {
            "@type": "Organization",
            "name": "The Sisters Vision",
            "alternateName": "TSV Holding",
            "description": "Holding angolana que gere e impulsiona empresas com propósito de gerar impacto positivo na economia local",
            "url": "https://thesistersvision.com",
            "logo": "https://thesistersvision.com/logo.png",
            "foundingDate": "2017",
            "founder": {
              "@type": "Person",
              "name": "Laeticia Makunga"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Luanda",
              "addressCountry": "AO"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+244-947-208-008",
              "contactType": "customer service",
              "areaServed": "AO"
            },
            "sameAs": [
              "https://www.linkedin.com/company/the-sisters-vision"
            ]
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": "https://thesistersvision.com"
            }]
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://thesistersvision.com/1.png",
            "width": "1920",
            "height": "1080",
            "caption": "The Sisters Vision - Liderança e equipa"
          }
        })}
      </script>
    </section>
  );
};

export default Hero;