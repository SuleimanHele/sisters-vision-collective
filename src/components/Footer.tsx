const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-foreground text-background py-8 sm:py-12"
      role="contentinfo"
      aria-label="Rodapé do site"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand com Schema.org */}
          <div 
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content="The Sisters Vision" />
            <meta itemProp="url" content="https://thesistersvision.com" />
            
            <h3 
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
              itemProp="legalName"
            >
              The Sisters Vision
            </h3>
            <p 
              className="text-background/80 leading-relaxed text-sm sm:text-base"
              itemProp="description"
            >
              Construímos hoje os negócios que moldam o amanhã
            </p>
            
            {/* Informações de contacto no footer */}
            <div className="mt-4 space-y-1 text-background/70 text-xs sm:text-sm">
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">kinaxixi, rua cónego Manuel das Neves</span>,{" "}
                <span itemProp="addressLocality">Luanda</span>
              </p>
              <p>
                <a 
                  href="tel:+244947208008" 
                  className="hover:text-secondary transition-colors"
                  itemProp="telephone"
                >
                  +244 947 208 008
                </a>
              </p>
              <p>
                <a 
                  href="mailto:culturascatering@thesistervision.com" 
                  className="hover:text-secondary transition-colors"
                  itemProp="email"
                >
                  culturascatering@thesistervision.com
                </a>
              </p>
            </div>
          </div>

          {/* Companies com Schema.org */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Nossas Empresas
            </h4>
            <ul 
              className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base"
              role="list"
            >
              <li itemProp="subOrganization" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Organik_ Tudo Fresco</span>
              </li>
              <li itemProp="subOrganization" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">The Good Café</span>
              </li>
              <li itemProp="subOrganization" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Culturas Catering</span>
              </li>
              <li itemProp="subOrganization" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Sweet Catering Industrial</span>
              </li>
              <li itemProp="subOrganization" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Look A La Glamour SPA</span>
              </li>
            </ul>
          </div>

          {/* Quick Links com acessibilidade */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Navegação
            </h4>
            <nav aria-label="Navegação rápida">
              <ul 
                className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base"
                role="list"
              >
                <li>
                  <a 
                    href="#about" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                    aria-label="Ir para a seção Sobre Nós"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a 
                    href="#companies" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                    aria-label="Ir para a seção Empresas"
                  >
                    Empresas
                  </a>
                </li>
                <li>
                  <a 
                    href="#founder" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                    aria-label="Ir para a seção Liderança"
                  >
                    Liderança
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-foreground rounded"
                    aria-label="Ir para a seção Contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright com Schema.org */}
        <div 
          className="border-t border-background/20 pt-6 sm:pt-8 text-center text-background/60 text-sm sm:text-base"
          itemProp="copyrightYear"
          content={currentYear.toString()}
        >
          <p>
            &copy; {currentYear} {" "}
            <span itemProp="copyrightHolder" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">The Sisters Vision, LDA</span>
            </span>
            . Todos os direitos reservados.
          </p>
          
          {/* Informações legais adicionais */}
          <div className="mt-2 text-background/50 text-xs">
            <p>NIF: [Inserir NIF quando disponível]</p>
          </div>
        </div>
      </div>

      {/* Schema.org markup para o Footer */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Sisters Vision",
          "legalName": "The Sisters Vision, LDA",
          "description": "Holding angolana especializada em empreendedorismo feminino e gestão de marcas inovadoras",
          "url": "https://thesistersvision.com",
          "foundingDate": "2017",
          "founder": {
            "@type": "Person",
            "name": "Laeticia Makunga"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "kinaxixi, rua cónego Manuel das Neves",
            "addressLocality": "Luanda",
            "addressCountry": "AO"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+244-947-208-008",
            "email": "culturascatering@thesistervision.com",
            "contactType": "customer service",
            "areaServed": "AO",
            "availableLanguage": ["Portuguese"]
          },
          "subOrganization": [
            {
              "@type": "Organization",
              "name": "Organik_ Tudo Fresco",
              "description": "Mercado de produtos naturais e orgânicos em Angola"
            },
            {
              "@type": "Organization",
              "name": "The Good Café",
              "description": "Cafetaria especializada em Luanda com opções gluten free"
            },
            {
              "@type": "Organization",
              "name": "Culturas Catering",
              "description": "Serviço de catering industrial e eventos em Angola"
            },
            {
              "@type": "Organization",
              "name": "Sweet Catering Industrial",
              "description": "Serviço de catering industrial especializado"
            },
            {
              "@type": "Organization",
              "name": "Look A La Glamour SPA",
              "description": "SPA e centro de beleza em Angola"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/the-sisters-vision"
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;