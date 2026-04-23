import Reveal from "./Reveal";
import { Quote } from "lucide-react";

const items = [
  { name: "Mariana A.", role: "Paciente desde 2023", text: "Saí da Dra. Natália me sentindo eu mesma — só que mais leve e confiante. O olhar dela para a naturalidade é incrível." },
  { name: "Camila R.", role: "Harmonização Facial", text: "Cada detalhe foi cuidado. Desde a recepção até o pós, é uma experiência de outro nível. Resultado discreto e elegante, exatamente como eu queria." },
  { name: "Júlia M.", role: "Bioestimulador Corporal", text: "Profissional impecável. Senti segurança em cada etapa e o resultado superou expectativas. Indico de olhos fechados." },
  { name: "Luísa P.", role: "Preenchimento Labial", text: "Volume sutil, contorno perfeito. Ninguém percebe que fiz — só notam que estou mais bonita. É exatamente isso que eu buscava." },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-24 md:py-32 bg-background-alt">
    <div className="container mx-auto">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">Depoimentos</div>
          <h2 className="font-serif-display text-5xl md:text-6xl text-foreground font-light">
            Histórias que
            <br />
            <em className="text-mauve">inspiram autoestima.</em>
          </h2>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
            <figure className="group bg-card p-8 md:p-10 shadow-soft hover:shadow-elegant transition-shadow duration-500 h-full" style={{ borderRadius: "4px" }}>
              <Quote className="text-mauve/20 group-hover:text-mauve/40 transition-colors duration-500" size={28} strokeWidth={1.5} />
              <blockquote className="mt-4 font-serif-display text-xl md:text-2xl text-foreground italic font-light leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium text-sm text-foreground">{t.name}</div>
                <div className="text-[10px] tracking-luxe uppercase text-mauve/70 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
