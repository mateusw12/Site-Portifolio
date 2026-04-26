import { Button } from "@/components/ui/button";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";

interface HomeProps {
  id: string;
}

export function Home({ id }: HomeProps) {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const top = aboutSection.offsetTop;

    animate(window.scrollY, top, {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], 
      onUpdate(value) {
        window.scrollTo(0, value);
      },
    });
  };

  return (
    <section id={id} className="min-h-screen flex items-center pt-24 md:pt-28 pb-8">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto section-shell p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-light-highlight/20 dark:bg-dark-highlight/20 blur-2xl animate-float" />
          <div className="absolute -bottom-20 -left-12 w-44 h-44 rounded-full bg-light-secondary/15 dark:bg-dark-secondary/20 blur-2xl animate-float" />

          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] bg-light-accent/70 dark:bg-dark-accent text-light-secondary dark:text-dark-secondary animate-fade-in">
            Disponivel para novas oportunidades
          </span>

          <div className="mt-6 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-light-primary dark:text-dark-primary animate-slide-up">
              Mateus Walz
            </h1>
            <p className="text-lg md:text-2xl text-light-secondary dark:text-dark-secondary font-semibold">
              Engenheiro de Software Full Stack com foco em front-end de alta performance
            </p>
            <p className="max-w-2xl text-base md:text-lg text-light-text/90 dark:text-dark-text">
              Desenvolvo produtos digitais que unem experiencia do usuario, performance e qualidade tecnica.
              Tenho experiencia com React, Next.js, APIs robustas e times ageis orientados a entrega.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <Button aria-label="Baixar CV" variant="default" size="default">
              <a href="ca_mateus_walz.pdf" target="_blank" rel="noreferrer">
                Baixar CV
              </a>
            </Button>
            <Button aria-label="Ir para contato" variant="outline" size="default">
              <a href="#contact">Falar comigo</a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-light-accent dark:border-dark-accent bg-light-surface/70 dark:bg-dark-surface/75 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-light-secondary dark:text-dark-secondary">Experiencia</p>
              <p className="text-lg font-bold text-light-primary dark:text-dark-primary">+4 anos</p>
            </div>
            <div className="rounded-xl border border-light-accent dark:border-dark-accent bg-light-surface/70 dark:bg-dark-surface/75 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-light-secondary dark:text-dark-secondary">Especialidade</p>
              <p className="text-lg font-bold text-light-primary dark:text-dark-primary">React e Next.js</p>
            </div>
            <div className="rounded-xl border border-light-accent dark:border-dark-accent bg-light-surface/70 dark:bg-dark-surface/75 px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-light-secondary dark:text-dark-secondary">Localizacao</p>
              <p className="text-lg font-bold text-light-primary dark:text-dark-primary">Santa Catarina</p>
            </div>
          </div>
        </div>

        <motion.div
          onClick={handleScrollToAbout}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <RiArrowDownDoubleFill className="text-4xl text-light-secondary dark:text-dark-secondary" />
        </motion.div>
      </div>
    </section>
  );
}
