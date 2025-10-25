import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Componente principal com Helmet Provider para gerenciamento de meta tags
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    {/* Meta Tags no Head - Versão simplificada e direta */}
    <Helmet>
      {/* Meta Tags Essenciais */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      
      {/* SEO Básico */}
      <title>The Sisters Vision - Holding Empresarial em Angola</title>
      <meta 
        name="description" 
        content="The Sisters Vision é uma holding angolana que gere marcas inovadoras como Organik, The Good Café e Culturas Catering. Empreendedorismo feminino de excelência." 
      />
      <meta 
        name="keywords" 
        content="holding Angola, empreendedorismo feminino, empresas Angola, Organik, The Good Café, Culturas Catering, The Sisters Vision, negócios Angola, Luanda" 
      />
      <meta name="author" content="The Sisters Vision" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thesistersvision.com/" />
      <meta property="og:title" content="The Sisters Vision - Holding Empresarial em Angola" />
      <meta 
        property="og:description" 
        content="The Sisters Vision é uma holding angolana que gere marcas inovadoras com foco em empreendedorismo feminino e desenvolvimento sustentável." 
      />
      <meta property="og:image" content="https://thesistersvision.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Sisters Vision - Holding Empresarial" />
      <meta property="og:site_name" content="The Sisters Vision" />
      <meta property="og:locale" content="pt_AO" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://thesistersvision.com/" />
      <meta property="twitter:title" content="The Sisters Vision - Holding Empresarial em Angola" />
      <meta 
        property="twitter:description" 
        content="The Sisters Vision é uma holding angolana que gere marcas inovadoras com foco em empreendedorismo feminino." 
      />
      <meta property="twitter:image" content="https://thesistersvision.com/twitter-image.jpg" />
      <meta property="twitter:image:alt" content="The Sisters Vision - Holding Empresarial" />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Sisters Vision",
          "alternateName": "TSV Holding",
          "url": "https://thesistersvision.com",
          "logo": "https://thesistersvision.com/logo.png",
          "description": "Holding angolana especializada em empreendedorismo feminino e gestão de marcas inovadoras",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "kinaxixi, rua cónego Manuel das Neves",
            "addressLocality": "Luanda",
            "addressCountry": "AO"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+244-947-208-008",
            "contactType": "customer service",
            "email": "culturascatering@thesistervision.com",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://www.linkedin.com/company/the-sisters-vision"
          ],
          "foundingDate": "2017",
          "founder": {
            "@type": "Person",
            "name": "Laeticia Makunga"
          }
        })}
      </script>
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://thesistersvision.com" />
    </Helmet>
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;