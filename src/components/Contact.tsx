import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Entre em Contacto
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para construir o futuro juntos
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-10 border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Fale Connosco
                </h3>

                {/* Email */}
                <a
                  href="mailto:culturascatering@thesistervision.com"
                  className="flex items-start gap-4 hover:bg-primary/5 rounded-lg p-2 transition"
                  aria-label="Enviar email para Culturas Catering"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      culturascatering@thesistervision.com
                    </p>
                  </div>
                </a>

                {/* Telefone */}
                <a
                  href="tel:+244947208008"
                  className="flex items-start gap-4 hover:bg-primary/5 rounded-lg p-2 transition"
                  aria-label="Ligar para Culturas Catering"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">+244 947 208 008</p>
                  </div>
                </a>

                {/* Localização */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent("kinaxixi, rua cónego Manuel das Neves, Luanda, Angola")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:bg-primary/5 rounded-lg p-2 transition"
                  aria-label="Ver localização no Google Maps"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Localização
                    </h4>
                    <p className="text-muted-foreground">kinaxixi, rua cónego Manuel das Neves, Luanda, Angola</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/the-sisters-vision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:bg-primary/5 rounded-lg p-2 transition"
                  aria-label="Visitar perfil do LinkedIn"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      LinkedIn
                    </h4>
                    <p className="text-muted-foreground">The Sisters Vision</p>
                  </div>
                </a>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interessado em Parcerias?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estamos sempre abertos a novas oportunidades de colaboração e
                  crescimento mútuo.
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    (window.location.href = "mailto:culturascatering@thesistervision.com")
                  }
                >
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;