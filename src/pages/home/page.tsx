import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import SegmentSection from './components/SegmentSection';
import ServicesSection from './components/ServicesSection';
import TrustSection from './components/TrustSection';
import PricingSection from './components/PricingSection';
import PartnersCarousel from './components/PartnersCarousel';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { 
  useSEO, 
  generateOrganizationSchema, 
  generateWebPageSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../utils/seo';

export default function HomePage() {
  const faqs = [
    {
      question: 'Como funciona a segurança dos meus dados financeiros?',
      answer: 'Você mantém 100% do controle e autorização final no banco. Trabalhamos com acesso de visualização e processamento, mas todas as aprovações de pagamentos permanecem sob sua autorização. Utilizamos protocolos de segurança bancária e criptografia de ponta a ponta. Nossos processos seguem as normas da LGPD e melhores práticas internacionais de segurança da informação.'
    },
    {
      question: 'Vou perder o controle da minha empresa ao terceirizar o financeiro?',
      answer: 'Pelo contrário! Você ganha clareza estratégica sem perder o controle. Nossa metodologia transforma dados complexos em dashboards intuitivos e relatórios executivos que permitem decisões mais rápidas e fundamentadas. Você terá acesso em tempo real a todas as informações, com reuniões mensais estratégicas para análise de performance e planejamento.'
    },
    {
      question: 'Como funciona o processo de onboarding e transição?',
      answer: 'O onboarding é suave e estruturado em 3 fases: 1) Diagnóstico inicial e mapeamento de processos (1 semana), 2) Implantação e integração de sistemas (2 semanas), 3) Treinamento da equipe e acompanhamento próximo (1 mês). Durante todo o processo, você terá um gerente de contas dedicado garantindo uma transição sem impactos na operação.'
    },
    {
      question: 'Qual o diferencial do BPO Financeiro da Profinx?',
      answer: 'Não somos apenas executores de tarefas. Somos consultores estratégicos com 16-18 anos de experiência e atuação internacional na América Latina. Combinamos rigor técnico na execução operacional com inteligência de dados e consultoria de alto nível. Você recebe não apenas um serviço, mas um parceiro estratégico que entende profundamente o seu setor e transforma números em decisões.'
    }
  ];

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://profinx.com.br';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateOrganizationSchema(),
      generateWebPageSchema(
        'Profinx - Gestão e Consultoria Financeira para PME',
        'Gestão e Consultoria Financeira com mais de 16 anos de experiência. Gestão consultiva especializada para Arquitetura, Advocacia, Médicos, Clínicas, Agências de Marketing e Psicólogos.'
      ),
      generateServiceSchema(),
      generateFAQSchema(faqs),
    ],
  };

  useSEO({
    title: 'Profinx - Gestão e Consultoria Financeira para PME',
    description: 'Profinx - Gestão e Consultoria Financeira com mais de 16 anos de experiência. Gestão consultiva especializada para Arquitetura, Advocacia, Médicos, Clínicas, Agências de Marketing e Psicólogos. Dominamos as leis, os fluxos financeiros e os processos de gestão específicos para o seu segmento.',
    keywords: 'consultoria financeira, gestão empresarial, profinx, bpo financeiro, financeiro pmes',
    canonical: siteUrl,
    ogTitle: 'Profinx - Gestão e Consultoria Financeira para PME',
    ogDescription: 'Gestão e Consultoria Financeira com mais de 16 anos de experiência. Gestão consultiva especializada para Arquitetura, Advocacia, Médicos, Clínicas, Agências de Marketing e Psicólogos.',
    ogImage: `${siteUrl}/og-image.jpg`,
    structuredData,
  });

  return (
    <>
      <HeroSection />
      <SegmentSection />
      <ServicesSection />
      <TrustSection />
      <PricingSection />
      <PartnersCarousel />
      <FAQSection />
      <CTASection />
    </>
  );
}
