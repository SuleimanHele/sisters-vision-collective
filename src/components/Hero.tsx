import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="The Sisters Vision" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            The Sisters Vision
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-secondary mb-8 font-light animate-fade-in-delay-1">
            Construímos hoje os negócios que moldam o amanhã
          </p>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-delay-2">
            Uma holding criada para gerir e impulsionar empresas que partilham um propósito comum: 
            gerar impacto positivo, enriquecer a economia local e transformar vidas através de 
            qualidade, ética e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <Button 
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Conheça a Nossa História
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("companies")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              Nossas Empresas
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ChevronDown className="w-8 h-8 text-primary-foreground" />
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
