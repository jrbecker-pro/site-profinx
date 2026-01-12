import { useState, useEffect } from 'react';

interface Segment {
  id: number;
  name: string;
  image: string;
  description: string;
}

const segments: Segment[] = [
  {
    id: 1,
    name: 'Arquitetura',
    image: '/arquitetura-segment.jpg',
    description: 'Gestão especializada para escritórios de arquitetura'
  },
  {
    id: 2,
    name: 'Advocacia',
    image: '/advocacia-segment.jpg',
    description: 'Controle financeiro para escritórios de advocacia'
  },
  {
    id: 3,
    name: 'Medicina',
    image: '/medicina-segment.jpg',
    description: 'Gestão financeira para consultórios médicos'
  },
  {
    id: 4,
    name: 'Clínicas',
    image: '/clinicas-segmento.jpg',
    description: 'Soluções completas para clínicas de saúde'
  },
  {
    id: 5,
    name: 'Agências de Marketing',
    image: '/agenciasmarketing-segment.jpg',
    description: 'Gestão financeira para agências criativas'
  },
  {
    id: 6,
    name: 'Psicologia',
    image: '/psicologia-segment.jpg',
    description: 'Controle financeiro para consultórios de psicologia'
  },
  {
    id: 7,
    name: 'Tecnologia e Startups (SaaS)',
    image: '/tecnologia-segment.jpg',
    description: 'Gestão financeira para empresas de tecnologia'
  },
  {
    id: 8,
    name: 'Estética e Bem-estar',
    image: '/estetica-segment.jpg',
    description: 'Controle financeiro para clínicas de estética'
  },
  {
    id: 9,
    name: 'Escolas de Cursos Livres',
    image: '/cursos-segment.jpg',
    description: 'Gestão financeira para instituições de ensino'
  },
  {
    id: 10,
    name: 'Academias',
    image: '/academia-segment.jpg',
    description: 'Soluções financeiras para academias e centros fitness'
  },
  {
    id: 11,
    name: 'Engenharia e Consultoria',
    image: '/engenharia-segment.jpg',
    description: 'Gestão especializada para empresas de engenharia'
  }
];

export default function SegmentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % segments.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + segments.length) % segments.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % segments.length);
    setIsAutoPlaying(false);
  };

  const getVisibleSegments = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + segments.length) % segments.length;
      visible.push({ segment: segments[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-4">
            Sua empresa sob a ótica de quem entende o seu mercado
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Gestão financeira com o DNA do seu mercado. Dominamos os fluxos e leis específicos de cada setor para profissionalizar sua decisão
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Display */}
          <div className="relative h-[450px] md:h-[420px] flex items-center justify-center overflow-hidden">
            {getVisibleSegments().map(({ segment, position }) => (
              <div
                key={segment.id}
                className={`absolute transition-all duration-700 ease-in-out ${
                  position === 0
                    ? 'z-30 scale-100 opacity-100'
                    : position === -1
                    ? 'z-20 -translate-x-[400px] scale-75 opacity-30'
                    : 'z-20 translate-x-[400px] scale-75 opacity-30'
                }`}
                style={{
                  pointerEvents: position === 0 ? 'auto' : 'none'
                }}
              >
                <div className="group relative w-[380px] h-[360px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-[#14B8A6] transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.name}
                      className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004aac]/80 via-[#004aac]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#004aac] mb-3 text-center group-hover:text-[#14B8A6] transition-colors">
                      {segment.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center px-2 leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#004aac] hover:bg-[#14B8A6] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Anterior"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#004aac] hover:bg-[#14B8A6] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Próximo"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            {segments.map((segment, index) => (
              <button
                key={segment.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? 'w-10 h-2.5 bg-[#14B8A6]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para ${segment.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
