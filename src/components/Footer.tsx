const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">The Sisters Vision</h3>
            <p className="text-background/80 leading-relaxed">
              Construímos hoje os negócios que moldam o amanhã
            </p>
          </div>

          {/* Companies */}
          <div>
            <h4 className="font-semibold mb-4">Nossas Empresas</h4>
            <ul className="space-y-2 text-background/80">
              <li>Organik_ Tudo Fresco</li>
              <li>The Good Café</li>
              <li>Culturas Catering</li>
              <li>Sweet Catering Industrial</li>
              <li>Look A La Glamour SPA</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#companies" className="hover:text-secondary transition-colors">Empresas</a></li>
              <li><a href="#founder" className="hover:text-secondary transition-colors">Liderança</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} The Sisters Vision, LDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
