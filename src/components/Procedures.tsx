import Reveal from "./Reveal";
import { Sparkles, Heart, FlaskConical } from "lucide-react";

const facial = [
  { name: "Harmonização Facial", desc: "Planejamento completo da face com leitura de proporções e identidade estética individual.", benefit: "Equilíbrio facial refinado" },
  { name: "Botox", desc: "Suavização de linhas de expressão preservando a naturalidade e autenticidade do olhar.", benefit: "Aparência rejuvenescida" },
  { name: "Preenchimento Labial", desc: "Volume e contorno em harmonia com sua face, com acabamento delicado e natural.", benefit: "Lábios definidos e naturais" },
  { name: "Skin Booster", desc: "Hidratação profunda intradérmica para uma pele saudável, luminosa e sedosa.", benefit: "Pele iluminada e hidratada" },
  { name: "Bioestimulador no Pescoço", desc: "Estimulação de colágeno na região cervical para firmeza e rejuvenescimento.", benefit: "Pescoço firme e jovem" },
  { name: "Bioestimulador no Rosto", desc: "Estímulo gradual à produção de colágeno para uma pele facial firme e luminosa.", benefit: "Firmeza e viço progressivos" },
];
const corporal = [
  { name: "Descolamento de Celulite", desc: "Técnica especializada para tratamento da celulite com protocolo individualizado.", benefit: "Pele lisa e uniforme" },
  { name: "Preenchimento de Glúteo", desc: "Modelagem e volume dos glúteos com resultados naturais, seguros e harmoniosos.", benefit: "Contorno corporal elevado" },
];
const pele = [
  { name: "Peelings para Melasma", desc: "Protocolo especializado com ácidos de alta performance para tratar o melasma.", benefit: "Manchas reduzidas, pele renovada", highlight: true },
  { name: "Peelings para Manchas", desc: "Tratamento de manchas superficiais com peelings de precisão.", benefit: "Tom de pele uniforme", highlight: true },
  { name: "Suplementação para Melasma", desc: "Suplementação oral com ativos específicos para potencializar o tratamento.", benefit: "Tratamento sistêmico" },
];

const Card = ({ name, desc, benefit, highlight }: { name: string; desc: string; benefit: string; highlight?: boolean }) => (
  <div className={`group bg-card p-6 md:p-8 hover-lift h-full flex flex-col shadow-soft ${highlight ? "border border-mauve/30" : "border border-border"}`} style={{ borderRadius: "2px" }}>
    {highlight && (
      <div className="self-start mb-4 badge-pastel">
        <FlaskConical size={10} className="text-mauve" />
        <span className="text-[9px] tracking-luxe uppercase text-mauve font-medium">Destaque</span>
      </div>
    )}
    <h4 className="font-serif-display text-2xl text-foreground font-light group-hover:text-mauve transition-colors duration-300">{name}</h4>
    <p className="mt-3 text-sm text-foreground/55 leading-relaxed font-light flex-1">{desc}</p>
    <div className="mt-6 pt-4 border-t border-border">
      <div className="text-[9px] tracking-luxe uppercase text-foreground/40 mb-1">Benefício</div>
      <div className="text-sm text-mauve font-medium">{benefit}</div>
    </div>
  </div>
);

const SectionTitle = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <Reveal>
    <div className="flex items-center gap-3 mb-10">
      <div className="w-9 h-9 rounded-full bg-mauve/10 flex items-center justify-center">
        <Icon className="text-mauve" size={18} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif-display text-3xl md:text-4xl text-foreground font-light">{label}</h3>
    </div>
  </Reveal>
);

const Procedures = () => (
  <section id="procedimentos" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">Procedimentos</div>
          <h2 className="font-serif-display text-5xl md:text-6xl text-foreground font-light">
            Protocolos exclusivos,
            <br />
            <em className="text-mauve">resultados naturais.</em>
          </h2>
        </div>
      </Reveal>

      <div className="space-y-20">
        <div>
          <SectionTitle icon={Sparkles} label="Harmonização Facial" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facial.map((p, i) => <Reveal key={p.name} delay={i * 70} variant="up"><Card {...p} /></Reveal>)}
          </div>
        </div>
        <div>
          <SectionTitle icon={Heart} label="Harmonização Corporal" />
          <div className="grid md:grid-cols-2 gap-5">
            {corporal.map((p, i) => <Reveal key={p.name} delay={i * 70} variant="scale"><Card {...p} /></Reveal>)}
          </div>
        </div>
        <div>
          <SectionTitle icon={FlaskConical} label="Pele & Melasma" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pele.map((p, i) => <Reveal key={p.name} delay={i * 70} variant="up"><Card {...p} /></Reveal>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Procedures;
