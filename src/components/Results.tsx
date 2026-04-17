import { useState } from "react";
import Reveal from "./Reveal";
import { X } from "lucide-react";
import resultado1 from "@/assets/resultado1.jpg";
import resultado2 from "@/assets/resultado2.jpg";

// ─── Adicione suas imagens aqui ───────────────────────────────────────────────
// Importe cada imagem e adicione um objeto na lista abaixo.
// Exemplo:
//   import foto1 from "@/assets/resultado-1.jpg";
//   { img: foto1, title: "Harmonização Facial", caption: "Resultado natural e delicado" },
// ─────────────────────────────────────────────────────────────────────────────

const results: { img: string; title: string; caption: string }[] = [
  { img: resultado1, title: "", caption: "" },
  { img: resultado2, title: "", caption: "" },
];

const Results = () => {
  const [open, setOpen] = useState<number | null>(null);
  const current = results[open ?? -1] ?? null;

  return (
    <section id="resultados" className="py-24 md:py-32 gradient-luxe relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-champagne/30 blur-3xl" />
      <div className="container mx-auto relative">

        {/* Cabeçalho */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="gold-divider text-[11px] tracking-luxe uppercase text-gold">
              Galeria de resultados
            </span>
            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Resultados que
              <br />
              <span className="italic font-light">valorizam a beleza natural.</span>
            </h2>
            <p className="mt-6 text-foreground/65 leading-relaxed">
              Uma seleção cuidadosa de transformações reais, sempre com foco em naturalidade,
              equilíbrio e identidade.
            </p>
          </div>
        </Reveal>

        {/* Galeria */}
        {results.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {results.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <button
                  onClick={() => setOpen(i)}
                  className="group block w-full text-left"
                >
                  <div className="relative overflow-hidden aspect-[4/5] bg-muted shadow-soft hover-lift">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      style={{
                        transitionDuration: "1200ms",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="font-serif-display text-2xl text-background">{r.title}</div>
                      {r.caption && (
                        <div className="mt-1 text-xs text-background/80 font-light">{r.caption}</div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 text-[10px] tracking-luxe uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Ampliar
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mt-14 flex items-center justify-center min-h-[200px] border border-dashed border-gold/40 rounded-sm">
              <p className="text-foreground/40 text-sm tracking-refined uppercase">
                Imagens serão adicionadas em breve
              </p>
            </div>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-serif-display italic text-2xl text-foreground/80 max-w-xl mx-auto">
              "Sua melhor versão merece o cuidado de quem entende cada detalhe."
            </p>
            <a
              href="https://wa.me/5551952039994"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-ink text-background text-xs tracking-refined uppercase hover:bg-foreground transition-all duration-500"
            >
              Quero o meu resultado
              <span className="ml-3">→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 text-background/80 hover:text-background"
            aria-label="Fechar"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-2xl w-full bg-background overflow-hidden shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={current.img} alt={current.title} className="w-full h-full object-cover" />
            </div>
            {(current.title || current.caption) && (
              <div className="p-6 md:p-8">
                {current.title && (
                  <h3 className="font-serif-display text-3xl text-ink">{current.title}</h3>
                )}
                {current.caption && (
                  <p className="mt-2 text-sm text-foreground/70">{current.caption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
