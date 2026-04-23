import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif-display text-xl md:text-2xl text-foreground font-light">Natália Silvestrin</span>
          <span className="text-[8px] tracking-luxe uppercase text-mauve mt-0.5">Harmonização Facial & Corporal</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-[10px] tracking-refined uppercase text-foreground/55 hover:text-mauve transition-colors duration-300 draw-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato"
          className="hidden lg:inline-flex items-center text-[10px] tracking-luxe uppercase border border-mauve/40 px-6 py-2.5 text-mauve hover:bg-mauve hover:text-white transition-all duration-400 font-medium"
          style={{ borderRadius: "2px" }}>
          Agendar
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground/70 hover:text-mauve transition-colors p-1" aria-label="Menu">
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in absolute top-full left-0 w-full shadow-elegant">
          <div className="container mx-auto py-8 flex flex-col gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[11px] tracking-refined uppercase text-foreground/60 hover:text-mauve transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)}
              className="mt-2 text-center text-[10px] tracking-luxe uppercase bg-mauve py-4 text-white font-medium shadow-mauve">
              Agendar avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
