import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clinicImg from "@/assets/clinic-experience.jpg";

const QualityVideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const imageScale = useTransform(scrollYProgress, [0.1, 0.45], [1, 0.65]);
  const imageBorderRadius = useTransform(scrollYProgress, [0.1, 0.45], ["0px", "8px"]);
  const imageY = useTransform(scrollYProgress, [0.1, 0.45], ["0vh", "10vh"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -60]);
  const aboutOpacity = useTransform(scrollYProgress, [0.38, 0.52], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.38, 0.52], [40, 0]);
  const containerOpacity = useTransform(scrollYProgress, [0.82, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-background">
      <motion.div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-background"
        style={{ opacity: containerOpacity }}>

        {/* Texto de fundo */}
        <motion.div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
          style={{ opacity: aboutOpacity, y: aboutY }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mauve-divider text-[10px] tracking-luxe uppercase text-mauve mb-8 justify-center flex">
              Nossa Essência
            </div>
            <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light leading-tight">
              Beleza lapidada
              <br />
              <em className="text-mauve">com maestria.</em>
            </h2>
            <p className="mt-8 text-lg text-foreground/60 leading-relaxed font-light max-w-xl mx-auto">
              Uma experiência de cuidado completo, do acolhimento inicial ao resultado final.
              Cada detalhe pensado para que você se sinta única.
            </p>
            <a href="#sobre" className="mt-12 inline-block text-[10px] tracking-luxe uppercase text-mauve border-b border-mauve/40 pb-1 hover:border-mauve transition-colors duration-300 pointer-events-auto font-medium">
              Conheça nossa história
            </a>
          </div>
        </motion.div>

        {/* Imagem sticky */}
        <motion.div className="absolute origin-center overflow-hidden z-10 shadow-elegant"
          style={{ scale: imageScale, borderRadius: imageBorderRadius, y: imageY, width: "100%", height: "100%" }}>
          <img src={clinicImg} alt="Clínica Dra. Natália Silvestrin" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))" }} />
        </motion.div>

        {/* Texto sobre imagem */}
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 pointer-events-none"
          style={{ opacity: heroOpacity, y: heroY }}>
          <h2 className="font-serif-display text-5xl md:text-7xl text-center font-light drop-shadow-lg">
            A arte da
            <br />
            <em>excelência clínica.</em>
          </h2>
          <div className="mt-12 flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-luxe uppercase text-white/70">Role para descobrir</span>
            <div className="w-px h-14 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QualityVideoSection;
