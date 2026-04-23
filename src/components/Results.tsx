import { useState } from "react";
import Reveal from "./Reveal";
import { X } from "lucide-react";
import resultado1 from "@/assets/resultado1.jpg";
import resultado2 from "@/assets/resultado2.jpg";
import botox1 from "@/assets/botox1.jpeg";
import labial from "@/assets/labial.jpeg";

const results = [
  { img: resultado1, title: "Harmonização", caption: "Naturalidade" },
  { img: resultado2, title: "Contorno", caption: "Definição" },
  { img: botox1, title: "Botox", caption: "Rejuvenescimento natural" },
  { img: labial, title: "Preenchimento Labial", caption: "Volume & contorno" },
];

const Results = () => {
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? results[open] : null;

  return (
    <section id="resultados" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-6">Galeria de resultados</div>
            <h2 className="font-serif-display text-5xl md:text-6xl text-foreground font-light">
              Resultados que
              <br />
              <em className="text-mauve">valorizam a beleza natural.</em>
            </h2>
            <p className="mt-6 text-foreground/55 font-light leading-relaxed">
              Transformações reais com foco em naturalidade, equilíbrio e identidade estética individual.
            </p>
          </div>
        </Reveal>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <Reveal key={i} delay={i * 80} variant="up">
                <button onClick={() => setOpen(i)} className="group block w-full text-left outline-none">
                  <div className="relative overflow-hidden aspect-[3/4] bg-muted shadow-soft hover-lift" style={{ borderRadius: "4px" }}>
                    <img src={r.img} alt={r.title} loading="lazy" width={800} height={1000}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-6 h-px bg-white/60 mb-3" />
                      <div className="font-serif-display text-2xl text-white font-light">{r.title}</div>
                      {r.caption && <div className="mt-1 text-[10px] tracking-luxe uppercase text-white/70">{r.caption}</div>}
                    </div>
                    <div className="absolute top-4 right-4 badge-pastel opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <span className="text-[9px] tracking-luxe uppercase text-mauve font-medium">Ampliar</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="flex items-center justify-center min-h-[200px] border border-dashed border-mauve/30 bg-card" style={{ borderRadius: "4px" }}>
              <p className="text-foreground/40 text-[10px] tracking-luxe uppercase">Imagens em breve</p>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-20 text-center">
            <p className="font-serif-display italic text-2xl md:text-3xl text-foreground/70 max-w-2xl mx-auto font-light">
              "Sua melhor versão merece o cuidado de quem entende cada detalhe."
            </p>
            <a href="https://wa.me/5551952039994" target="_blank" rel="noopener noreferrer"
              className="mt-10 group inline-flex items-center justify-center px-10 py-4 bg-mauve text-white text-[10px] tracking-luxe uppercase shadow-mauve font-medium hover:opacity-90 transition-opacity duration-300"
              style={{ borderRadius: "2px" }}>
              Quero o meu resultado
              <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {current && (
        <div className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" aria-label="Fechar">
            <X size={28} strokeWidth={1.5} />
          </button>
          <div className="relative max-w-xl w-full bg-card overflow-hidden shadow-elegant" style={{ borderRadius: "4px" }}
            onClick={e => e.stopPropagation()}>
            <div className="aspect-[3/4] overflow-hidden">
              <img src={current.img} alt={current.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-serif-display text-2xl text-foreground font-light">{current.title}</h3>
              {current.caption && <div className="mt-2 text-[10px] tracking-luxe uppercase text-mauve">{current.caption}</div>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
