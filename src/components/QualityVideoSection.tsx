import Reveal from "./Reveal";
import clinicImg from "@/assets/clinic-experience.jpg";

const QualityVideoSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background overflow-hidden border-t border-border/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal variant="left">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden shadow-elegant" style={{ borderRadius: "2px" }}>
                <img 
                  src={clinicImg} 
                  alt="Clínica Dra. Natália Silvestrin" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              {/* Elemento decorativo sutil */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mauve/5 -z-10 rounded-full blur-2xl" />
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-8">
            <Reveal variant="right">
              <div>
                <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-8">
                  Nossa Essência
                </div>
                <h2 className="font-serif-display text-5xl md:text-6xl text-foreground font-light leading-tight">
                  Beleza lapidada
                  <br />
                  <em className="text-mauve">com maestria.</em>
                </h2>
              </div>
            </Reveal>
            
            <Reveal variant="right" delay={200}>
              <div className="flex flex-col gap-6">
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  A arte da excelência clínica em cada detalhe. Nossa clínica foi projetada para oferecer uma experiência de cuidado completo, do acolhimento inicial ao acompanhamento pós-procedimento.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  Acreditamos que a verdadeira beleza reside na naturalidade. Cada detalhe é pensado para que você se sinta única, com resultados que exaltam sua melhor versão de forma elegante e sofisticada.
                </p>
              </div>
            </Reveal>
            
            <Reveal variant="right" delay={400}>
              <div className="pt-4">
                <a href="#contato" className="inline-block text-[10px] tracking-luxe uppercase text-mauve border-b border-mauve/40 pb-1 hover:border-mauve transition-colors duration-300 font-medium">
                  Conheça nossa infraestrutura
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityVideoSection;
