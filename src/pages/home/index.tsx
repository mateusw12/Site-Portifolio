import { Button } from "@/components/ui/button";
import { RiArrowDownDoubleFill } from "react-icons/ri";

interface HomeProps {
  id: string;
}

export function Home(props: HomeProps) {
  return (
    <div id={props.id} className="bg-light-background dark:bg-dark-background">
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

        <RiArrowDownDoubleFill className="absolute bottom-5 text-4xl animate-bounce text-light-secondary dark:text-dark-primary" />
      </div>
    </div>
  );
}
