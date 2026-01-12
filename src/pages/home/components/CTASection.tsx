export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#004aac] via-[#137dc5] to-[#079ef7] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para transformar sua gestão financeira?
        </h2>
        <p className="text-xl text-gray-100 mb-10 leading-relaxed">
          Agende um diagnóstico gratuito e descubra como podemos elevar sua empresa ao próximo nível de excelência financeira
        </p>
        <a
          href="https://wa.me/5541992382026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#14B8A6] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#0D9488] transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
        >
          Solicitar Diagnóstico Gratuito
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img
                src="https://static.readdy.ai/image/18671f7eb99f08d461ba955a5a647ddc/cee7bcbc6db7077abe2d6780cd0be7b5.png"
                alt="Profinx"
                className="h-10 mb-4 brightness-0 invert"
              />
              <p className="text-gray-200 text-sm leading-relaxed">
                BPO Financeiro especializado em transformar rotinas operacionais em inteligência estratégica para PMEs.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <div className="space-y-3 text-gray-200 text-sm">
                <a href="mailto:contato@profinx.com.br" className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-mail-line"></i>
                  <span>contato@profinx.com.br</span>
                </a>
                <a href="https://wa.me/5541992382026" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-whatsapp-line"></i>
                  <span>+55 (41) 99238-2026</span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/profinxbpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#004aac] transition-all cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/profinxbpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#004aac] transition-all cursor-pointer"
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-center text-gray-300 text-sm">
            <p>© 2025 Profinx. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
