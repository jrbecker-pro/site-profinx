export default function TrustSection() {
  return (
    <>
      {/* Unified About Us and Leadership Section */}
      <section className="py-24 bg-white" id="sobre">
        <div className="max-w-7xl mx-auto px-6">
          {/* Who We Are */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#14B8A6]/10 text-[#14B8A6] px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Sobre Nós
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-6">
              Nossa Missão e Propósito
            </h2>
          </div>

          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 md:p-12 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Profinx nasceu com a missão de <strong className="text-[#004aac]">democratizar o acesso à gestão financeira de alto nível</strong> para pequenas e médias empresas. Acreditamos que todo empreendedor merece a liberdade de focar no crescimento do seu negócio sem se perder na burocracia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa entrega vai além de organizar contas: <strong className="text-[#004aac]">profissionalizamos sua estrutura</strong> para torná-la mais forte e competitiva. Através da tecnologia e de uma execução assertiva, transformamos dados em poder de decisão, garantindo que você tenha o controle total e a segurança necessária para construir o futuro da sua empresa.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#079ef7]/10 text-[#079ef7] px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Experiência Internacional em Gestão Latino-Americana
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-4">
              Liderança e Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sua empresa sob a guarda de quem domina as leis, os processos e a tecnologia financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Bianka Souza Card - Moved to Left */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="mb-6">
                <img
                  src="https://static.readdy.ai/image/18671f7eb99f08d461ba955a5a647ddc/b2c1a606238d4e48df8de15dd97adbf3.png"
                  alt="Bianka Souza - Fundadora e Especialista em Consultoria Financeira Estratégica"
                  className="w-48 h-48 rounded-xl object-cover object-top mx-auto shadow-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#004aac] mb-2 text-center">
                Bianka Souza
              </h3>
              <p className="text-[#079ef7] font-semibold text-center mb-4">
                Fundadora - Consultoria Financeira Estratégica
              </p>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-6">
                <p>
                  <strong className="text-[#004aac]">Fundadora da Profinx</strong>, com <strong className="text-[#004aac]">16 anos de experiência</strong> e <strong className="text-[#004aac]">6 anos na América Latina</strong>, Bianka possui um perfil altamente técnico e consultivo que garante rigor absoluto na entrega.
                </p>
                <p>
                  Especialista em gestão de excelência, ela lidera processos de conciliação, controle de obrigações e análise de performance com precisão cirúrgica.
                </p>
                <p>
                  Sua capacidade de oferecer consultoria financeira de alto nível transforma dados complexos em insights estratégicos claros, permitindo que empresários tomem decisões seguras e fundamentadas.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/bianka-de-souza-becker-8a32995b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-[#004aac] hover:text-[#079ef7] transition-colors text-sm font-semibold cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
                <span>Ver perfil no LinkedIn</span>
              </a>
            </div>

            {/* Junior Becker Card - Moved to Right */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="mb-6">
                <img
                  src="https://static.readdy.ai/image/18671f7eb99f08d461ba955a5a647ddc/fff3b3ff02dfb79f758f56bde198f5a4.png"
                  alt="Junior Becker - Co-fundador e Líder em Inovação e Tecnologia Financeira"
                  className="w-48 h-48 rounded-xl object-cover object-top mx-auto shadow-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#004aac] mb-2 text-center">
                Junior Becker
              </h3>
              <p className="text-[#079ef7] font-semibold text-center mb-4">
                Co-fundador - Inovação e Tecnologia Financeira
              </p>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-6">
                <p>
                  <strong className="text-[#004aac]">Co-fundador da Profinx</strong>, com <strong className="text-[#004aac]">18 anos de experiência no mercado</strong> e <strong className="text-[#004aac]">6 anos atuando na América Latina</strong>, Junior é especialista em transformação digital e uso estratégico de dados financeiros.
                </p>
                <p>
                  Domina as principais tecnologias de gestão (Omie, Conta Azul, ERPs) e lidera a implementação de soluções que convertem rotinas operacionais em inteligência de negócio.
                </p>
                <p>
                  Sua visão inovadora garante que cada cliente tenha acesso a dashboards, projeções e análises que realmente impulsionam o crescimento com segurança tecnológica.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/beckerjr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-[#004aac] hover:text-[#079ef7] transition-colors text-sm font-semibold cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
                <span>Ver perfil no LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Results Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004aac] mb-6">
              Impacto e Resultados
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mais que processar dados, entregamos a inteligência necessária para você tomar decisões estratégicas com segurança
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#14B8A6] cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className="ri-money-dollar-circle-line text-4xl text-white"></i>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#14B8A6] mb-3">R$ 3M+</div>
                <p className="text-gray-600 font-semibold leading-relaxed">
                  Em recursos financeiros geridos com rigor técnico e segurança absoluta
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-[#14B8A6] font-semibold">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform"></i>
                  <span className="text-sm">Gestão de excelência</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#004aac] cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#004aac] to-[#137dc5] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className="ri-file-list-3-line text-4xl text-white"></i>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#004aac] mb-3">6.000+</div>
                <p className="text-gray-600 font-semibold leading-relaxed">
                  Boletos e obrigações processados sem atrasos ou multas
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-[#004aac] font-semibold">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform"></i>
                  <span className="text-sm">Zero atrasos</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#079ef7] cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#079ef7] to-[#0284c7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className="ri-line-chart-line text-4xl text-white"></i>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#079ef7] mb-3">100%</div>
                <p className="text-gray-600 font-semibold leading-relaxed">
                  De precisão em conciliações e análises de performance financeira
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-[#079ef7] font-semibold">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform"></i>
                  <span className="text-sm">Precisão total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Economia vs CLT */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#14B8A6] cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className="ri-wallet-3-line text-4xl text-white"></i>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#14B8A6] mb-3">R$ 23 mil</div>
                <div className="text-lg font-semibold text-[#004aac] mb-4">
                  Economia Anual vs CLT
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Elimine custos com salários, encargos trabalhistas, férias, 13º e benefícios. Invista essa economia no crescimento do seu negócio.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-[#14B8A6] font-semibold">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform"></i>
                  <span className="text-sm">Mais rentabilidade</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Tempo Devolvido */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#004aac] cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#004aac] to-[#137dc5] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className="ri-time-line text-4xl text-white"></i>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#004aac] mb-3">16 horas</div>
                <div className="text-lg font-semibold text-[#004aac] mb-4">
                  Devolvidas por Mês
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Pare de perder tempo com tarefas operacionais. Foque no que realmente importa: estratégia, vendas e crescimento do seu negócio.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-[#004aac] font-semibold">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform"></i>
                  <span className="text-sm">Mais produtividade</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Métricas Vitais */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#079ef7] cursor-pointer">
              <div className="w-20 h-20 bg-gradient-to-br from-[#079ef7] to-[#0284c7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className="ri-dashboard-3-line text-4xl text-white"></i>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#079ef7] mb-3">5 Métricas</div>
                <div className="text-lg font-semibold text-[#004aac] mb-4">
                  Vitais de Gestão
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Receba mensalmente os 5 indicadores essenciais que revelam a real saúde financeira do seu negócio e orientam decisões estratégicas.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-[#079ef7] font-semibold">
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform"></i>
                  <span className="text-sm">Mais inteligência</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specialization Badge */}
          <div className="bg-gradient-to-br from-[#004aac] to-[#137dc5] rounded-2xl p-12 text-center shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-[#14B8A6] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Especialização Setorial
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Especialistas em Gestão Financeira para Prestadores de Serviços e Empresas de Tecnologia
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Dominamos as particularidades do seu setor: fluxo de caixa irregular, gestão de recebíveis complexos, múltiplas formas de pagamento e a necessidade de projeções precisas para crescimento sustentável
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Controle de Recebíveis Complexos
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Gestão especializada para múltiplos clientes, projetos e formas de pagamento
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Projeções de Crescimento
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Modelagem financeira adaptada à realidade de empresas em expansão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
