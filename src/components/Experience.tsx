import Reveal from "./Reveal";
import clinic from "@/assets/clinic-experience.jpg";

const steps = [
  { n: "01", title: "Avaliação personalizada", desc: "Conversa cuidadosa, escuta atenta e leitura estética individualizada." },
  { n: "02", title: "Planejamento individual", desc: "Plano exclusivo desenhado para realçar sua identidade com naturalidade." },
  { n: "03", title: "Procedimento com técnica", desc: "Execução precisa, com materiais premium e foco total em segurança." },
  { n: "04", title: "Acompanhamento contínuo", desc: "Cuidado dedicado no pós, garantindo evolução e tranquilidade." },
];

const Experience = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal variant="left">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden shadow-elegant img-zoom-hover bg-muted" style={{ borderRadius: "4px" }}>
              <img src={clinic} alt="Ambiente premium da clínica"
                className="w-full h-full object-cover animate-ken-burns" loading="lazy" width={1024} height={1024} />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-card px-7 py-5 shadow-elegant hidden md:block animate-float-slow" style={{ borderRadius: "2px" }}>
              <div className="text-[9px] tracking-luxe uppercase text-mauve mb-1">Ambiente</div>
              <div className="font-serif-display text-xl text-foreground font-light">Boutique & sereno</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} variant="right">
          <div>
            <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">A experiência</div>
            <h2 className="font-serif-display text-5xl md:text-6xl text-foreground font-light">
              Uma jornada
              <br />
              <em className="text-mauve">do início ao cuidado contínuo.</em>
            </h2>

            <div className="mt-14 space-y-0 divide-y divide-border">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80} variant="fade">
                  <div className="group flex gap-6 py-7 cursor-default hover:bg-card hover:px-4 transition-all duration-500 -mx-0 hover:-mx-4" style={{ borderRadius: "2px" }}>
                    <div className="font-serif-display text-3xl text-mauve/30 group-hover:text-mauve transition-colors duration-500 font-light w-12 shrink-0">{s.n}</div>
                    <div>
                      <h3 className="font-serif-display text-2xl text-foreground font-light group-hover:text-mauve transition-colors duration-400">{s.title}</h3>
                      <p className="mt-2 text-sm text-foreground/55 leading-relaxed font-light">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Experience;
