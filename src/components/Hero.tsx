import React from "react";

const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
    {/* Orbs pastel decorativos */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, hsl(330 35% 88% / 0.5) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, hsl(270 30% 88% / 0.4) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, hsl(315 20% 92% / 0.3) 0%, transparent 65%)" }} />
    </div>

    <div className="container mx-auto relative z-10">
      <div className="max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="animate-fade-up flex justify-center">
          <div className="badge-pastel">
            <span className="w-1.5 h-1.5 rounded-full bg-mauve animate-pulse-soft" />
            <span className="text-[10px] tracking-luxe uppercase text-mauve font-medium">
              Estética & Excelência · Canoas RS
            </span>
          </div>
        </div>

        {/* Título editorial */}
        <h1 className="mt-10 font-serif-display font-light text-foreground animate-fade-up" style={{ animationDelay: "100ms", fontSize: "clamp(3.5rem, 10vw, 8rem)", lineHeight: 1.0 }}>
          Dra. Natália
          <br />
          <em className="text-mauve" style={{ fontStyle: "italic" }}>Silvestrin</em>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 font-serif-display italic text-xl md:text-2xl text-foreground/50 font-light animate-fade-up" style={{ animationDelay: "180ms" }}>
          Biomédicа Esteta · CRBM 5-13377
        </p>

        {/* Linha */}
        <div className="mt-8 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(var(--mauve) / 0.5))" }} />
          <div className="w-2 h-2 rounded-full bg-mauve/40" />
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(var(--mauve) / 0.5))" }} />
        </div>

        <p className="mt-8 text-base md:text-lg text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up" style={{ animationDelay: "300ms" }}>
          Harmonização Facial &amp; Corporal — esculpindo a sua melhor versão com naturalidade,
          precisão técnica e sofisticação absoluta.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <a href="https://wa.me/5551952039994" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-4 bg-mauve text-white text-[10px] tracking-luxe uppercase shadow-mauve font-medium w-full sm:w-auto hover:opacity-90 transition-opacity duration-300"
            style={{ borderRadius: "2px" }}>
            <span>Agendar avaliação</span>
            <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a href="#resultados"
            className="group inline-flex items-center justify-center px-10 py-4 border border-mauve/30 text-mauve text-[10px] tracking-luxe uppercase hover:bg-mauve hover:text-white transition-all duration-500 w-full sm:w-auto font-medium"
            style={{ borderRadius: "2px" }}>
            Ver procedimentos
          </a>
        </div>

        {/* Stats em pastéis */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "500ms" }}>
          {[
            { value: "+2.000", label: "Atendimentos" },
            { value: "5★", label: "Avaliações" },
            { value: "Elite", label: "Protocolo Prime" },
          ].map((s, i) => (
            <div key={i} className="text-center p-4 bg-card shadow-soft" style={{ borderRadius: "2px" }}>
              <div className="font-serif-display text-2xl md:text-3xl text-mauve font-light">{s.value}</div>
              <div className="mt-1 text-[9px] tracking-luxe uppercase text-foreground/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 animate-float-slow">
      <span className="text-[9px] tracking-luxe uppercase text-foreground/40">Explore</span>
      <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, hsl(var(--mauve) / 0.4), transparent)" }} />
    </div>
  </section>
);

export default Hero;
