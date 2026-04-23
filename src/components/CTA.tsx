import Reveal from "./Reveal";

const CTA = () => (
  <section id="contato" className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(330 35% 88% / 0.5) 0%, transparent 70%)" }} />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 30% 88% / 0.4) 0%, transparent 70%)" }} />

    <div className="container mx-auto relative z-10">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-8 justify-center flex">
            Sua avaliação exclusiva
          </div>

          <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light">
            Viva uma experiência
            <br />
            <em className="text-mauve">premium em harmonização.</em>
          </h2>

          <p className="mt-8 text-foreground/60 leading-relaxed font-light max-w-xl mx-auto">
            Agende sua avaliação personalizada com a Dra. Natália Silvestrin e descubra o que torna
            cada atendimento único — naturalidade, precisão clínica e exclusividade.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-5">
            <a href="https://wa.me/5551952039994" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-4 bg-mauve text-white text-[10px] tracking-luxe uppercase shadow-mauve font-medium w-full sm:w-auto hover:opacity-90 transition-opacity duration-300"
              style={{ borderRadius: "2px" }}>
              <span>Agendar minha avaliação</span>
              <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a href="https://wa.me/5551952039994" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-4 border border-mauve/30 text-mauve text-[10px] tracking-luxe uppercase hover:bg-mauve hover:text-white transition-all duration-500 w-full sm:w-auto font-medium"
              style={{ borderRadius: "2px" }}>
              Quero meu resultado
            </a>
          </div>

          <div className="mt-14 pt-10 border-t border-border flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {["CRBM 5-13377", "+2.000 atendimentos", "Atendimento exclusivo"].map(item => (
              <span key={item} className="flex items-center gap-2 text-[9px] tracking-luxe uppercase text-foreground/40">
                <span className="w-1.5 h-1.5 rounded-full bg-mauve/40" />{item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTA;
