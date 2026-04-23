import Reveal from "./Reveal";
import draNatalia from "@/assets/dra-natalia.jpg";

const pillars = [
  { title: "Olhar estético apurado", desc: "Cada plano é desenhado com sensibilidade e precisão para realçar a sua beleza única." },
  { title: "Foco em naturalidade", desc: "Resultados que respeitam suas proporções e expressões — você, em sua melhor versão." },
  { title: "Excelência técnica", desc: "Protocolos atualizados e materiais de alta performance para entregas seguras e refinadas." },
  { title: "Cuidado individualizado", desc: "Uma escuta atenta antes de qualquer procedimento. Você é o centro de tudo." },
];

const Authority = () => (
  <section id="sobre" className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(330 30% 88% / 0.4) 0%, transparent 70%)" }} />
    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Imagem */}
        <Reveal variant="left">
          <div className="relative group">
            <div className="aspect-[3/4] overflow-hidden shadow-elegant img-zoom-hover bg-muted" style={{ borderRadius: "4px" }}>
              <img src={draNatalia} alt="Dra. Natália Silvestrin"
                className="w-full h-full object-cover animate-ken-burns"
                loading="lazy" width={800} height={1000} />
            </div>
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -right-5 bg-card px-8 py-5 shadow-elegant hidden md:block animate-float-slow" style={{ borderRadius: "2px" }}>
              <div className="font-serif-display text-3xl text-mauve font-light">+2k</div>
              <div className="mt-1 text-[9px] tracking-luxe uppercase text-foreground/50">Atendimentos</div>
            </div>
            {/* Moldura decorativa */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-mauve/20 hidden md:block" style={{ borderRadius: "4px", zIndex: -1 }} />
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal delay={100} variant="right">
          <div>
            <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">
              Sobre a profissional
            </div>

            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light">
              Beleza que
              <br />
              <em className="text-mauve">respeita</em>
              <br />
              a sua essência.
            </h2>

            <p className="mt-8 text-foreground/60 leading-relaxed font-light">
              A Dra. Natália Silvestrin combina técnica refinada, olhar estético sensível e
              cuidado verdadeiramente individualizado. Cada paciente é recebida em um ambiente
              exclusivo, com planejamento sob medida — porque a excelência mora na personalização.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="group/p p-5 bg-card shadow-soft hover:shadow-elegant transition-shadow duration-500" style={{ borderRadius: "2px" }}>
                    <div className="w-6 h-px bg-mauve/40 mb-4 transition-all duration-500 group-hover/p:w-10 group-hover/p:bg-mauve" />
                    <h3 className="font-serif-display text-lg text-foreground font-light">{p.title}</h3>
                    <p className="mt-2 text-sm text-foreground/55 leading-relaxed font-light">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 badge-pastel self-start">
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
