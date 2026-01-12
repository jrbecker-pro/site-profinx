import { useState, useEffect } from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Omie',
    logo: '/omie-logo.png',
    url: 'https://www.omie.com.br'
  },
  {
    id: 2,
    name: 'Conta Azul',
    logo: '/contaazul-logo.svg',
    url: 'https://contaazul.com'
  },
  {
    id: 3,
    name: 'Nibo',
    logo: '/nibo-logo.png',
    url: 'https://nibo.com.br'
  },
  {
    id: 4,
    name: 'Sofia',
    logo: '/sofia-logo.svg',
    url: 'https://usesofia.com'
  },
  {
    id: 5,
    name: 'PlayBPO',
    logo: '/Logo-PlayBPO.png',
    url: 'https://playbpo.com.br'
  }
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    setIsAutoPlaying(false);
  };

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + partners.length) % partners.length;
      visible.push({ partner: partners[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Parceiros Tecnológicos
          </p>
          <h3 className="text-2xl font-bold text-[#004aac]">
            Integração com as Principais Plataformas
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Display */}
          <div className="relative h-[200px] flex items-center justify-center">
            {getVisiblePartners().map(({ partner, position }) => (
              <div
                key={partner.id}
                className={`absolute transition-all duration-700 ease-in-out ${
                  position === 0
                    ? 'z-30 scale-100 opacity-100'
                    : position === -1
                    ? 'z-20 -translate-x-[300px] scale-75 opacity-30'
                    : 'z-20 translate-x-[300px] scale-75 opacity-30'
                }`}
                style={{
                  pointerEvents: position === 0 ? 'auto' : 'none'
                }}
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-[280px] h-[160px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#079ef7] flex items-center justify-center"
                >
                  {/* Content */}
                  <div className="flex items-center justify-center p-6">
                    <div className="transform transition-all duration-500 group-hover:scale-110">
                      <div className={`${partner.name === 'Sofia' ? 'bg-black px-4 py-2 rounded-lg' : ''}`}>
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#079ef7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#004aac] hover:bg-[#079ef7] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Anterior"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#004aac] hover:bg-[#079ef7] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Próximo"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {partners.map((partner, index) => (
              <button
                key={partner.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#079ef7]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para ${partner.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
