import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground pt-16 pb-8 relative">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-10 md:gap-12">
        <div className="md:col-span-2">
          <div className="font-serif-display text-3xl text-background font-light">Dra. Natália Silvestrin</div>
          <div className="mt-2 flex items-center gap-3">
            <span className="w-6 h-px bg-mauve/60" />
            <span className="text-[9px] tracking-luxe uppercase text-background/50">Harmonização Facial & Corporal</span>
          </div>
          <p className="mt-6 text-sm text-background/50 leading-relaxed font-light max-w-sm">
            Exclusividade e excelência em cada detalhe. Uma experiência premium em estética avançada, dedicada a realçar sua beleza natural.
          </p>
          <div className="mt-8 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-mauve/50" />
            <span className="text-[9px] tracking-luxe uppercase text-background/40">CRBM 5-13377</span>
          </div>
        </div>

        <div>
          <h4 className="text-[9px] tracking-luxe uppercase text-background/40 mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-background/60 font-light">
            <li>
              <a href="https://wa.me/5551952039994" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-background/5 flex items-center justify-center border border-background/10 group-hover:border-mauve/50 transition-colors duration-300">
                  <Phone size={13} className="text-mauve" />
                </div>
                <span className="group-hover:text-mauve transition-colors">(51) 9520-3994</span>
              </a>
            </li>
            <li>
              <a href="mailto:contato@dranatalia.com"
                className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-background/5 flex items-center justify-center border border-background/10 group-hover:border-mauve/50 transition-colors duration-300">
                  <Mail size={13} className="text-mauve" />
                </div>
                <span className="group-hover:text-mauve transition-colors">contato@dranatalia.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[9px] tracking-luxe uppercase text-background/40 mb-6">Redes</h4>
          <ul className="space-y-4 text-sm text-background/60 font-light">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-background/5 flex items-center justify-center border border-background/10 group-hover:border-mauve/50 transition-colors duration-300">
                  <Instagram size={13} className="text-mauve" />
                </div>
                <span className="group-hover:text-mauve transition-colors">@dranataliasilvestrin</span>
              </a>
            </li>
          </ul>
          <a href="https://wa.me/5551952039994" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center w-full text-[9px] tracking-luxe uppercase border border-mauve/30 px-6 py-3 text-mauve hover:bg-mauve hover:text-white transition-all duration-400 font-medium"
            style={{ borderRadius: "2px" }}>
            Agendar avaliação
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[9px] tracking-luxe uppercase text-background/30">
          © {new Date().getFullYear()} Dra. Natália Silvestrin. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-mauve/40" />
          <p className="text-[9px] tracking-luxe uppercase text-mauve/50">Estética de excelência · Resultados naturais</p>
          <span className="w-1 h-1 rounded-full bg-mauve/40" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
