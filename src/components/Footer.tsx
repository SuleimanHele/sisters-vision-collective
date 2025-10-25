// SOLUÇÃO:
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand - MELHORADA */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">The Sisters Vision</h3>
            <p className="text-background/80 leading-relaxed text-sm sm:text-base">
              Construímos hoje os negócios que moldam o amanhã
            </p>
          </div>

          {/* Companies - MELHORADA */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Nossas Empresas</h4>
            <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base">
              <li>Organik_ Tudo Fresco</li>
              <li>The Good Café</li>
              <li>Culturas Catering</li>
              <li>Sweet Catering Industrial</li>
              <li>Look A La Glamour SPA</li>
            </ul>
          </div>

          {/* Quick Links - MELHORADA */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Links Rápidos</h4>
            <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#companies" className="hover:text-secondary transition-colors">Empresas</a></li>
              <li><a href="#founder" className="hover:text-secondary transition-colors">Liderança</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center text-background/60 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} The Sisters Vision, LDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
