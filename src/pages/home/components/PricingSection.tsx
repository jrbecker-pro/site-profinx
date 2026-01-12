export default function PricingSection() {
  const plans = [
    {
      name: 'STARTER',
      focus: 'Organização, Conformidade e Ganho de Tempo',
      target: 'Ideal para pequenas empresas e prestadores de serviços',
      features: [
        'Onboarding Estratégico (Implantação e treinamento)',
        'Gestão de Recebíveis (Até 20 documentos/mês)',
        'Gestão de Obrigações (Até 40 pagamentos/mês, sem multas)',
        'Conciliação Bancária Diária (1 conta bancária)',
        'Visibilidade de Caixa (Relatório Realizado vs. Previsto)',
        'Atendimento Consultivo com Gerente de Contas Exclusivo'
      ],
      highlighted: false
    },
    {
      name: 'PRO',
      badge: 'Mais Escolhido',
      focus: 'Controle Total, Previsibilidade e Análise de Dados',
      target: 'Ideal para empresas em crescimento que precisam de dados para decisões seguras',
      features: [
        'Tudo do STARTER, mais:',
        'Escopo Ampliado (Até 40 recebíveis e 80 pagamentos/mês)',
        'Call de Alinhamento e Performance (Reunião Mensal Estratégica de KPIs)',
        'Planejamento Orçamentário de 6 meses (Projeção detalhada)',
        'Gestão de Cartões de Crédito (Conciliação e classificação de fatura)',
        'Inteligência de Dados (Análise de desvios orçamentários)',
        'Atendimento Prioritário por Gerente de Contas Sênior'
      ],
      highlighted: true
    },
    {
      name: 'PREMIUM',
      focus: 'Gestão Avançada, Inteligência de Dados e Consultoria Estratégica',
      target: 'Empresas consolidadas que exigem controle rigoroso e parceria estratégica total',
      features: [
        'Tudo do PRO, mais:',
        'Escopo de Alta Performance (Até 60 recebíveis e 120 pagamentos em 2 contas)',
        'Consultoria Estratégica VIP (1 hora mensal individual de análise de lucro)',
        'Ecossistema de Recebimentos (Conciliação de PagSeguro, Stone e cartões)',
        'Painel de Indicadores (Dashboard dinâmico em tempo real)',
        'Análise de Resultados Comentada com sugestões de ações corretivas',
        'Modelagem de Cenários e Projeções Financeiras completas',
        'Onboarding Premium com auditoria inicial de gargalos ocultos'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-4">
            Planos e Investimento
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Da organização básica à inteligência estratégica completa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-500 ${
                plan.highlighted
                  ? 'shadow-2xl scale-105 border-2 border-[#079ef7] bg-gradient-to-br from-[#004aac]/5 to-white'
                  : 'shadow-lg hover:shadow-xl border-2 border-gray-100'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#079ef7] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-3xl font-bold mb-3 ${plan.highlighted ? 'text-[#079ef7]' : 'text-[#004aac]'}`}>
                  {plan.name}
                </h3>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  {plan.focus}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {plan.target}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <i className={`ri-check-line text-lg mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-[#079ef7]' : 'text-[#137dc5]'}`}></i>
                    <span className={`text-sm leading-relaxed ${feature.startsWith('Tudo do') ? 'font-semibold text-[#004aac]' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5541992382026"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  plan.highlighted
                    ? 'bg-[#14B8A6] text-white hover:bg-[#0D9488] shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-[#004aac] hover:bg-[#14B8A6] hover:text-white'
                }`}
              >
                Falar com um Especialista
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
