import Reveal from "./Reveal";

const pillars = [
  { title: "Olhar estético apurado", desc: "Cada plano é desenhado com sensibilidade e precisão para realçar a sua beleza única." },
  { title: "Foco em naturalidade", desc: "Resultados que respeitam suas proporções e expressões — você, em sua melhor versão." },
  { title: "Excelência técnica", desc: "Protocolos atualizados e materiais de alta performance para entregas seguras e refinadas." },
  { title: "Cuidado individualizado", desc: "Uma escuta atenta antes de qualquer procedimento. Você é o centro de tudo." },
];

const Authority = () => (
  <section id="sobre" className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(330 30% 88% / 0.4) 0%, transparent 70%)" }} />
    <div className="container mx-auto relative z-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Texto */}
        <Reveal variant="fade">
          <div className="flex flex-col items-center text-center">
            <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">
              Sobre a profissional
            </div>

            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light leading-tight">
              Beleza que
              <br />
              <em className="text-mauve">respeita</em>
              <br />
              a sua essência.
            </h2>

            <p className="mt-8 text-foreground/60 leading-relaxed font-light text-base md:text-lg max-w-2xl">
              A Dra. Natália Silvestrin combina técnica refinada, olhar estético sensível e
              cuidado verdadeiramente individualizado. Cada paciente é recebida em um ambiente
              exclusivo, com planejamento sob medida — porque a excelência mora na personalização.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} variant="fade">
              <div className="group/p p-6 bg-card shadow-soft hover:shadow-elegant transition-shadow duration-500 border border-mauve/5" style={{ borderRadius: "2px" }}>
                <div className="w-6 h-px bg-mauve/40 mb-4 transition-all duration-500 group-hover/p:w-10 group-hover/p:bg-mauve" />
                <h3 className="font-serif-display text-xl text-foreground font-light">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/55 leading-relaxed font-light">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} variant="fade">
          <div className="mt-12 flex justify-center">
            <div className="badge-pastel">
              <span className="w-1.5 h-1.5 rounded-full bg-mauve/60" />
              <span className="text-[10px] tracking-luxe uppercase text-mauve">CRBM 5-13377 · Registrada</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Authority;
