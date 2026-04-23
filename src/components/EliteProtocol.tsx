import Reveal from "./Reveal";
import eliteImg from "@/assets/elite.jpeg";

const EliteProtocol = () => (
  <section className="relative overflow-hidden bg-background-alt">
    <div className="grid lg:grid-cols-2 min-h-[85vh]">

      {/* Imagem — mostra completa sempre */}
      <Reveal variant="left" className="relative">
        <div className="w-full">
          {/* Mobile: imagem em aspect ratio natural (não corta) */}
          <img
            src={eliteImg}
            alt="Protocolo Elite Prime — Dra. Natália Silvestrin"
            className="w-full h-auto object-contain lg:hidden"
            loading="eager"
          />
          {/* Desktop: cobre a altura do grid */}
          <img
            src={eliteImg}
            alt="Protocolo Elite Prime — Dra. Natália Silvestrin"
            className="hidden lg:block w-full h-full object-cover object-center absolute inset-0"
            loading="eager"
          />
          {/* Fade lateral para direita (desktop) */}
          <div className="absolute inset-y-0 right-0 w-40 hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent, hsl(var(--background-alt)))" }}
          />
        </div>
      </Reveal>

      {/* Conteúdo */}
      <Reveal delay={120} variant="right">
        <div className="flex flex-col justify-center px-8 md:px-16 py-12 lg:py-24 h-full">

          <div className="badge-pastel self-start mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-mauve animate-pulse-soft" />
            <span className="text-[10px] tracking-luxe uppercase text-mauve font-medium">
              Protocolo Exclusivo
            </span>
          </div>

          <div className="w-10 h-px bg-mauve/30 mb-8" />

          <p className="text-lg text-foreground/65 font-light leading-relaxed max-w-md italic font-serif-display">
            "Excelência que você vê. Confiança que você sente."
          </p>

          <p className="mt-6 text-foreground/55 font-light leading-relaxed max-w-md">
            O Protocolo Elite Prime foi desenvolvido para oferecer uma experiência completa de harmonização
            com os mais altos padrões de técnica, cuidado e personalização. Um protocolo pensado para quem
            busca resultados reais com sofisticação.
          </p>

          <div className="mt-10 space-y-4">
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
        </div>
      </Reveal>
    </div>
  </section>
);

export default EliteProtocol;
