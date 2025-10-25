import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header com Schema.org */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
              itemProp="name"
            >
              Entre em Contacto
            </h2>
            <p 
              className="text-base sm:text-lg text-muted-foreground"
              itemProp="description"
            >
              Estamos prontos para construir o futuro juntos
            </p>
          </div>

          <div 
            className="bg-card rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-border"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content="The Sisters Vision" />
            <meta itemProp="url" content="https://thesistersvision.com" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Info com Schema.org */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Fale Connosco
                </h3>

                {/* Email */}
                <a
                  href="mailto:culturascatering@thesistervision.com"
                  className="flex items-start gap-3 sm:gap-4 hover:bg-primary/5 rounded-lg p-2 sm:p-3 transition"
                  aria-label="Enviar email para The Sisters Vision"
                  itemProp="email"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      culturascatering@thesistervision.com
                    </p>
                  </div>
                </a>

                {/* Telefone */}
                <a
                  href="tel:+244947208008"
                  className="flex items-start gap-3 sm:gap-4 hover:bg-primary/5 rounded-lg p-2 sm:p-3 transition"
                  aria-label="Ligar para The Sisters Vision Angola"
                  itemProp="telephone"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefone</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">+244 947 208 008</p>
                  </div>
                </a>

                {/* Localização com Schema.org completo */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent("kinaxixi, rua cónego Manuel das Neves, Luanda, Angola")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 sm:gap-4 hover:bg-primary/5 rounded-lg p-2 sm:p-3 transition"
                  aria-label="Ver localização da The Sisters Vision no Google Maps"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Localização
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      <span itemProp="streetAddress">kinaxixi, rua cónego Manuel das Neves</span>,{" "}
                      <span itemProp="addressLocality">Luanda</span>,{" "}
                      <span itemProp="addressCountry">Angola</span>
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/the-sisters-vision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 sm:gap-4 hover:bg-primary/5 rounded-lg p-2 sm:p-3 transition"
                  aria-label="Visitar perfil do LinkedIn da The Sisters Vision"
                  itemProp="sameAs"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      LinkedIn
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">The Sisters Vision</p>
                  </div>
                </a>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg sm:rounded-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Interessado em Parcerias?
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Estamos sempre abertos a novas oportunidades de colaboração e
                  crescimento mútuo.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3"
                  onClick={() =>
                    (window.location.href = "mailto:culturascatering@thesistervision.com?subject=Parceria%20-%20The%20Sisters%20Vision&body=Olá,%20gostaria%20de%20discutir%20uma%20possível%20parceria%20com%20a%20The%20Sisters%20Vision.")
                  }
                  aria-label="Enviar mensagem para parcerias"
                >
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org markup para ContactPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Entre em Contacto - The Sisters Vision",
          "description": "Página de contacto da The Sisters Vision. Entre em contacto para parcerias, colaborações e mais informações sobre as nossas empresas.",
          "mainEntity": {
            "@type": "Organization",
            "name": "The Sisters Vision",
            "description": "Holding angolana especializada em empreendedorismo feminino e gestão de marcas inovadoras",
            "url": "https://thesistersvision.com",
            "email": "culturascatering@thesistervision.com",
            "telephone": "+244-947-208-008",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "kinaxixi, rua cónego Manuel das Neves",
              "addressLocality": "Luanda",
              "addressCountry": "AO"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+244-947-208-008",
              "email": "culturascatering@thesistervision.com",
              "availableLanguage": ["Portuguese", "English"],
              "areaServed": "AO",
              "contactOption": "TollFree"
            },
            "sameAs": [
              "https://www.linkedin.com/company/the-sisters-vision"
            ]
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://thesistersvision.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contacto",
                "item": "https://thesistersvision.com/#contact"
              }
            ]
          }
        })}
      </script>
    </section>
  );
};

export default Contact;