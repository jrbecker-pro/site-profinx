import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Esclarecemos suas principais dúvidas sobre nosso serviço
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-[#14B8A6] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#004aac] pr-8">
                  {faq.question}
                </span>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-[#14B8A6] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
