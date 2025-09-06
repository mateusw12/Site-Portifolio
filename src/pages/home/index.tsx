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
    <div id={id} className="bg-light-background dark:bg-dark-background">
      <div className="container mx-auto h-screen flex flex-col justify-center items-center gap-6 px-4 py-4 relative">
        <span className="text-lg sm:text-xl md:text-2xl text-light-text dark:text-dark-text animate-slide-up">
          hello world!
        </span>
        <code className="font-mono text-3xl md:text-6xl text-light-primary dark:text-dark-secondary">
          {"<Mateus Walz/>"}
        </code>
        <p className="text-2xl md:text-4xl text-light-secondary dark:text-dark-primary ">
          engenheiro de software
        </p>
        <Button aria-label="Baixar CV" variant="outline">
          <a href="ca_mateus_walz.pdf" target="_blank">
            download CV
          </a>
        </Button>

        <motion.div
          onClick={handleScrollToAbout}
          className="absolute bottom-5 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <RiArrowDownDoubleFill className="text-4xl text-light-secondary dark:text-dark-primary" />
        </motion.div>
      </div>
    </div>
  );
}
