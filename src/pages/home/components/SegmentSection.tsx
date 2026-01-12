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
    image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20architecture%20office%20workspace%20with%20clean%20design%20blueprints%20and%20professional%20tools%20on%20elegant%20desk%2C%20sophisticated%20corporate%20environment%20emphasizing%20precision%20and%20creativity%20in%20architectural%20profession%2C%20natural%20lighting%20creating%20professional%20atmosphere&width=600&height=400&seq=architecture-segment-profinx&orientation=landscape',
    description: 'Gestão especializada para escritórios de arquitetura'
  },
  {
    id: 2,
    name: 'Advocacia',
    image: 'https://readdy.ai/api/search-image?query=Professional%20law%20office%20environment%20with%20elegant%20legal%20books%20and%20modern%20workspace%2C%20sophisticated%20corporate%20setting%20emphasizing%20trust%20and%20expertise%20in%20legal%20profession%2C%20clean%20minimalist%20design%20with%20natural%20lighting%20creating%20authoritative%20atmosphere&width=600&height=400&seq=law-segment-profinx&orientation=landscape',
    description: 'Controle financeiro para escritórios de advocacia'
  },
  {
    id: 3,
    name: 'Medicina',
    image: 'https://readdy.ai/api/search-image?query=Modern%20medical%20professional%20office%20with%20clean%20minimalist%20design%20and%20sophisticated%20workspace%2C%20professional%20healthcare%20environment%20emphasizing%20precision%20and%20care%2C%20elegant%20consultation%20room%20with%20natural%20lighting%20creating%20trustworthy%20atmosphere&width=600&height=400&seq=medical-segment-profinx&orientation=landscape',
    description: 'Gestão financeira para consultórios médicos'
  },
  {
    id: 4,
    name: 'Clínicas',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20healthcare%20clinic%20reception%20area%20with%20modern%20minimalist%20design%2C%20professional%20medical%20facility%20environment%20emphasizing%20cleanliness%20and%20efficiency%2C%20sophisticated%20waiting%20room%20with%20natural%20lighting%20creating%20welcoming%20atmosphere&width=600&height=400&seq=clinic-segment-profinx&orientation=landscape',
    description: 'Soluções completas para clínicas de saúde'
  },
  {
    id: 5,
    name: 'Agências de Marketing',
    image: 'https://readdy.ai/api/search-image?query=Creative%20modern%20marketing%20agency%20workspace%20with%20collaborative%20environment%20and%20innovative%20design%20elements%2C%20professional%20office%20emphasizing%20creativity%20and%20strategy%2C%20clean%20contemporary%20space%20with%20natural%20lighting%20fostering%20productive%20atmosphere&width=600&height=400&seq=marketing-segment-profinx&orientation=landscape',
    description: 'Gestão financeira para agências criativas'
  },
  {
    id: 6,
    name: 'Psicologia',
    image: 'https://readdy.ai/api/search-image?query=Serene%20professional%20psychology%20consultation%20room%20with%20comfortable%20minimalist%20design%2C%20therapeutic%20environment%20emphasizing%20trust%20and%20confidentiality%2C%20elegant%20office%20space%20with%20natural%20lighting%20creating%20calm%20peaceful%20atmosphere&width=600&height=400&seq=psychology-segment-profinx&orientation=landscape',
    description: 'Controle financeiro para consultórios de psicologia'
  },
  {
    id: 7,
    name: 'Tecnologia e Startups (SaaS)',
    image: 'https://readdy.ai/api/search-image?query=Modern%20innovative%20technology%20startup%20office%20workspace%20with%20collaborative%20open%20space%20design%2C%20contemporary%20SaaS%20company%20environment%20emphasizing%20innovation%20and%20growth%2C%20sleek%20minimalist%20tech%20workspace%20with%20natural%20lighting%20creating%20dynamic%20productive%20atmosphere%20for%20software%20development%20teams&width=600&height=400&seq=tech-startup-segment-profinx&orientation=landscape',
    description: 'Gestão financeira para empresas de tecnologia'
  },
  {
    id: 8,
    name: 'Estética e Bem-estar',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20modern%20aesthetic%20clinic%20spa%20interior%20with%20luxurious%20minimalist%20design%2C%20sophisticated%20wellness%20center%20environment%20emphasizing%20beauty%20and%20relaxation%2C%20premium%20treatment%20room%20with%20natural%20lighting%20creating%20serene%20tranquil%20atmosphere%20for%20aesthetic%20procedures%20and%20wellness%20services&width=600&height=400&seq=aesthetic-clinic-segment-profinx&orientation=landscape',
    description: 'Controle financeiro para clínicas de estética'
  },
  {
    id: 9,
    name: 'Escolas de Cursos Livres',
    image: 'https://readdy.ai/api/search-image?query=Contemporary%20modern%20educational%20training%20center%20classroom%20with%20professional%20learning%20environment%2C%20sophisticated%20course%20school%20interior%20emphasizing%20knowledge%20and%20development%2C%20clean%20organized%20teaching%20space%20with%20natural%20lighting%20creating%20inspiring%20atmosphere%20for%20professional%20education%20and%20skill%20development&width=600&height=400&seq=education-school-segment-profinx&orientation=landscape',
    description: 'Gestão financeira para instituições de ensino'
  },
  {
    id: 10,
    name: 'Academias',
    image: 'https://readdy.ai/api/search-image?query=Modern%20premium%20fitness%20gym%20facility%20with%20professional%20equipment%20and%20clean%20minimalist%20design%2C%20sophisticated%20health%20club%20environment%20emphasizing%20wellness%20and%20performance%2C%20spacious%20training%20area%20with%20natural%20lighting%20creating%20motivating%20energetic%20atmosphere%20for%20fitness%20and%20exercise%20activities&width=600&height=400&seq=gym-fitness-segment-profinx&orientation=landscape',
    description: 'Soluções financeiras para academias e centros fitness'
  },
  {
    id: 11,
    name: 'Engenharia e Consultoria',
    image: 'https://readdy.ai/api/search-image?query=Professional%20engineering%20consulting%20firm%20office%20with%20technical%20blueprints%20and%20modern%20workspace%2C%20sophisticated%20corporate%20environment%20emphasizing%20expertise%20and%20precision%2C%20clean%20organized%20workspace%20with%20natural%20lighting%20creating%20authoritative%20atmosphere%20for%20engineering%20projects%20and%20strategic%20consulting%20services&width=600&height=400&seq=engineering-consulting-segment-profinx&orientation=landscape',
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
