import Reveal from "./Reveal";

const EliteProtocol = () => (
  <section className="relative overflow-hidden bg-background-alt py-24 md:py-32">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <Reveal variant="fade">
          <div className="badge-pastel mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-mauve animate-pulse-soft" />
            <span className="text-[10px] tracking-luxe uppercase text-mauve font-medium">
              Protocolo Exclusivo
            </span>
          </div>
        </Reveal>

        <Reveal delay={100} variant="fade">
          <h2 className="font-serif-display text-4xl md:text-5xl text-foreground font-light mb-6">
            Protocolo Elite Prime
          </h2>
        </Reveal>

        <Reveal delay={120} variant="fade">
          <div className="w-10 h-px bg-mauve/30 mb-8" />
        </Reveal>

        <Reveal delay={140} variant="fade">
          <p className="text-xl md:text-2xl text-foreground/65 font-light leading-relaxed max-w-2xl italic font-serif-display">
            "Excelência que você vê. Confiança que você sente."
          </p>
        </Reveal>

        <Reveal delay={160} variant="fade">
          <p className="mt-6 text-foreground/55 font-light leading-relaxed max-w-2xl text-base md:text-lg">
            O Protocolo Elite Prime foi desenvolvido para oferecer uma experiência completa de harmonização
            com os mais altos padrões de técnica, cuidado e personalização. Um protocolo pensado para quem
            busca resultados reais com sofisticação.
          </p>
        </Reveal>

        <Reveal delay={180} variant="fade" className="w-full">
          <div className="mt-10 max-w-xl mx-auto grid sm:grid-cols-2 gap-4 text-left border border-mauve/10 p-6 md:p-8 bg-card shadow-soft" style={{ borderRadius: "4px" }}>
            {[
              "Avaliação estética individualizada",
              "Combinação estratégica de procedimentos",
              "Materiais e insumos premium",
              "Acompanhamento exclusivo pós-procedimento",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-mauve shrink-0" />
                <span className="text-sm text-foreground/70 font-light">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} variant="fade">
          <div className="mt-12">
            <a
              href="https://wa.me/5551952039994"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-4 bg-mauve text-white text-[10px] tracking-luxe uppercase shadow-mauve font-medium hover:opacity-90 transition-opacity duration-300"
              style={{ borderRadius: "2px" }}
            >
              <span>Quero conhecer o Elite Prime</span>
              <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default EliteProtocol;
