import Reveal from "./Reveal";
import { Crown, Gem, Users, ScanFace, Leaf, Heart, Sparkle } from "lucide-react";

const items = [
  { icon: Crown, title: "Atendimento exclusivo", desc: "Agenda restrita para garantir tempo, presença e cuidado em cada consulta." },
  { icon: Gem, title: "Excelência em cada detalhe", desc: "Materiais premium e protocolos atualizados para entregas impecáveis." },
  { icon: Users, title: "+2.000 atendimentos", desc: "Experiência consolidada com pacientes que retornam pelo resultado e pela experiência." },
  { icon: ScanFace, title: "Análise personalizada", desc: "Leitura facial e corporal individual antes de qualquer recomendação." },
  { icon: Leaf, title: "Resultados naturais", desc: "Estética que valoriza sua identidade — discreta, elegante e duradoura." },
  { icon: Heart, title: "Experiência acolhedora", desc: "Ambiente sereno, refinado e pensado em cada detalhe sensorial." },
  { icon: Sparkle, title: "Cuidado do início ao fim", desc: "Acompanhamento completo, da avaliação ao pós-procedimento." },
];

const Differentials = () => (
  <section id="diferenciais" className="py-24 md:py-32 bg-background-alt">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">Diferenciais</div>
          <h2 className="font-serif-display text-5xl md:text-6xl text-foreground font-light">
            Uma experiência
            <br />
            <em className="text-mauve">verdadeiramente exclusiva.</em>
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70} variant="up">
            <div className="group bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full" style={{ borderRadius: "2px" }}>
              <div className="w-10 h-10 rounded-full bg-mauve/10 flex items-center justify-center mb-5 group-hover:bg-mauve/20 transition-colors duration-300">
                <it.icon className="text-mauve" size={18} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif-display text-xl text-foreground font-light group-hover:text-mauve transition-colors duration-300">{it.title}</h3>
              <p className="mt-3 text-sm text-foreground/55 leading-relaxed font-light">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
