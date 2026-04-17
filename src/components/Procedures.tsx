import Reveal from "./Reveal";
import { Sparkles, Heart, FlaskConical } from "lucide-react";

const facial = [
  { name: "Harmonização Facial", desc: "Planejamento completo da face com leitura de proporções e identidade estética individual.", benefit: "Equilíbrio facial refinado" },
  { name: "Botox", desc: "Suavização de linhas de expressão preservando a naturalidade e a autenticidade do olhar.", benefit: "Aparência rejuvenescida" },
  { name: "Preenchimento Labial", desc: "Volume e contorno em harmonia com sua face, com acabamento delicado e natural.", benefit: "Lábios definidos e naturais" },
  { name: "Skin Booster", desc: "Hidratação profunda intradérmica para uma pele saudável, luminosa e sedosa.", benefit: "Pele iluminada e hidratada" },
  { name: "Bioestimulador no Pescoço", desc: "Estimulação de colágeno na região cervical para firmeza e rejuvenescimento do pescoço.", benefit: "Pescoço firme e jovem" },
  { name: "Bioestimulador no Rosto", desc: "Estímulo gradual à produção de colágeno para uma pele facial firme e luminosa.", benefit: "Firmeza e viço progressivos" },
];

const corporal = [
  { name: "Descolamento de Celulite", desc: "Técnica especializada para tratamento da celulite com protocolo individualizado e seguro.", benefit: "Pele lisa e uniforme" },
  { name: "Preenchimento de Glúteo", desc: "Modelagem e volume dos glúteos com resultados naturais, seguros e harmoniosos.", benefit: "Contorno corporal elevado" },
];

const pele = [
  { name: "Peelings Químicos para Melasma", desc: "Protocolo especializado com ácidos de alta performance para tratar o melasma de forma segura, controlada e progressiva. Resultados visíveis desde as primeiras sessões.", benefit: "Manchas reduzidas, pele renovada", highlight: true },
  { name: "Peelings para Manchas de Pele", desc: "Tratamento de manchas superficiais e irregularidades de tom com peelings de precisão, promovendo equilíbrio e luminosidade.", benefit: "Tom de pele uniforme", highlight: true },
  { name: "Suplementação para Melasma", desc: "Protocolo de suplementação oral com ativos específicos que agem de dentro pra fora, potencializando o tratamento e prevenindo o retorno das manchas.", benefit: "Tratamento de dentro pra fora", highlight: false },
];

const Card = ({ name, desc, benefit, highlight }: { name: string; desc: string; benefit: string; highlight?: boolean }) => (
  <div className={`group relative border p-7 md:p-8 hover-lift transition-all duration-700 overflow-hidden ${
    highlight
      ? "bg-gradient-to-br from-[#f5ede0] via-[#fdf8f2] to-[#f0e8d8] border-gold/50 shadow-md"
      : "bg-card border-border"
  }`}>
    <div className="absolute top-0 left-0 w-12 h-px bg-gold transition-all duration-700 group-hover:w-full" />
    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    {highlight && (
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gold/10 border border-gold/30 px-2.5 py-1 rounded-full">
        <FlaskConical size={11} className="text-gold" strokeWidth={1.5} />
        <span className="text-[9px] tracking-luxe uppercase text-gold font-medium">Destaque</span>
      </div>
    )}
    <h4 className="font-serif-display text-2xl text-ink mt-3 relative transition-transform duration-500 group-hover:translate-x-1">{name}</h4>
    <p className="mt-3 text-sm text-foreground/65 leading-relaxed relative">{desc}</p>
    <div className="mt-6 pt-5 border-t border-border/70 relative">
      <div className="text-[10px] tracking-luxe uppercase text-foreground/50">Principal benefício</div>
      <div className="mt-1 text-sm text-gold font-medium">{benefit}</div>
    </div>
  </div>
);

const Procedures = () => {
  return (
    <section id="procedimentos" className="py-24 md:py-32 gradient-rose">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
              Procedimentos
            </span>
            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Protocolos exclusivos,
              <br />
              <span className="italic font-light">resultados naturais.</span>
            </h2>
            <p className="mt-6 text-foreground/65 leading-relaxed">
              Cada técnica é cuidadosamente escolhida para realçar o que há de mais bonito em você,
              respeitando sua identidade e suas expressões.
            </p>
          </div>
        </Reveal>

        {/* Facial */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-4">
                <Sparkles className="text-gold" size={20} strokeWidth={1.2} />
                <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                  Harmonização Facial
                </h3>
              </div>
              <span className="text-xs tracking-refined uppercase text-foreground/50">
                Estética avançada
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facial.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} variant="up">
                <Card {...p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Corporal */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-4">
                <Heart className="text-gold" size={20} strokeWidth={1.2} />
                <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                  Harmonização Corporal
                </h3>
              </div>
              <span className="text-xs tracking-refined uppercase text-foreground/50">
                Cuidado refinado
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {corporal.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} variant="scale">
                <Card {...p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pele & Melasma */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-4">
                <FlaskConical className="text-gold" size={20} strokeWidth={1.2} />
                <h3 className="font-serif-display text-3xl md:text-4xl text-ink">
                  Pele &amp; Melasma
                </h3>
              </div>
              <span className="text-xs tracking-refined uppercase text-foreground/50">
                Tratamento especializado
              </span>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pele.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} variant="up">
                <Card {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
