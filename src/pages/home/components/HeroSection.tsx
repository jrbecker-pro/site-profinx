import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner-principal.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#004aac]/85 via-[#004aac]/75 to-[#004aac]/85"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={scrolled ? "/logo-azul.svg" : "/logo-branco.svg"}
                alt="Profinx"
                className="h-11"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-[#004aac] hover:text-[#079ef7]' : 'text-white hover:text-[#079ef7]'}`}>
                Sobre Nós
              </a>
              <a href="#servicos" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-[#004aac] hover:text-[#079ef7]' : 'text-white hover:text-[#079ef7]'}`}>
                Serviços
              </a>
              <a href="#planos" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-[#004aac] hover:text-[#079ef7]' : 'text-white hover:text-[#079ef7]'}`}>
                Planos
              </a>
              <a href="#faq" className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${scrolled ? 'text-[#004aac] hover:text-[#079ef7]' : 'text-white hover:text-[#079ef7]'}`}>
                FAQ
              </a>
              <a
                href="https://wa.me/5541992382026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#079ef7] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#137dc5] transition-all whitespace-nowrap cursor-pointer"
              >
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          A inteligência financeira de uma multinacional agora ao alcance da sua PME
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transformamos sua rotina financeira em inteligência para tomada de decisão
        </p>
        <a
          href="https://wa.me/5541992382026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#14B8A6] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#0D9488] transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
        >
          Solicitar Diagnóstico Financeiro Gratuito
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
