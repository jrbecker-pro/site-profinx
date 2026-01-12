export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-file-list-3-line',
      title: 'Gestão de Contas',
      description: 'Controle rigoroso de obrigações e recebíveis',
      details: [
        'Processamento de até 120 pagamentos mensais',
        'Gestão completa de recebíveis',
        'Zero multas e atrasos',
        'Controle de múltiplas contas bancárias'
      ]
    },
    {
      icon: 'ri-exchange-line',
      title: 'Conciliação Diária',
      description: 'Batimento total para garantir saldo real',
      details: [
        'Conciliação bancária automática',
        'Gestão de cartões de crédito',
        'Integração com gateways de pagamento',
        'Relatórios de saldo em tempo real'
      ]
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Dashboards de Performance',
      description: 'Relatórios mensais com KPIs de saúde do negócio',
      details: [
        'Indicadores financeiros personalizados',
        'Análise de desvios orçamentários',
        'Comparativos mês a mês',
        'Reuniões estratégicas mensais'
      ]
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Projeções Financeiras',
      description: 'Modelagem de caixa para os próximos 6 meses',
      details: [
        'Planejamento orçamentário detalhado',
        'Cenários de crescimento',
        'Análise de viabilidade',
        'Consultoria estratégica VIP'
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transformamos rotinas operacionais em inteligência estratégica para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#14B8A6]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#004aac] mb-3 group-hover:text-[#14B8A6] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <i className="ri-check-line text-[#14B8A6] text-lg mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
