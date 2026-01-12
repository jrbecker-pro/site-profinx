import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object;
}

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (ogTitle) {
      updateMetaTag('og:title', ogTitle, true);
      updateMetaTag('twitter:title', ogTitle);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('twitter:image', ogImage);
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Add structured data
    if (structuredData) {
      const scriptId = 'structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(structuredData);
    }

    // Update last-modified
    const today = new Date().toISOString().split('T')[0];
    updateMetaTag('last-modified', today);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, structuredData]);
}

export function generateOrganizationSchema() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://profinx.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Profinx',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Consultoria Financeira e Contábil B2B Premium com mais de 16 anos de experiência',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-41-99184-2024',
      contactType: 'customer service',
      availableLanguage: ['pt-BR'],
    },
    sameAs: [
      'https://www.linkedin.com/in/juniorbecker/',
      'https://www.linkedin.com/in/biankabecker/',
    ],
  };
}

export function generateWebPageSchema(pageName: string, description: string) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://profinx.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageName,
    description: description,
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Profinx',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}

export function generateServiceSchema() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://profinx.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Consultoria Financeira e Contábil',
    provider: {
      '@type': 'Organization',
      name: 'Profinx',
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Consultoria Financeira',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestão de Contas',
            description: 'Controle rigoroso de obrigações e recebíveis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Conciliação Diária',
            description: 'Batimento total para garantir saldo real',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dashboards de Performance',
            description: 'Relatórios mensais com KPIs de saúde do negócio',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Projeções Financeiras',
            description: 'Modelagem de caixa para os próximos 6 meses',
          },
        },
      ],
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://profinx.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
