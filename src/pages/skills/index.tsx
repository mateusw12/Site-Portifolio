import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { Layout } from "../../components/layout";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Layout subtitle="<!-- habilidades -->" id="skills">
      <div className="mb-8 max-w-2xl mx-auto text-center">
        <h3 className="section-title mb-2">Stack principal</h3>
        <p className="text-light-text dark:text-dark-text">
          Tecnologias que utilizo para construir produtos escalaveis, performaticos e com boa manutencao.
        </p>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-4 py-4 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <TooltipProvider key={index} delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={`flex flex-col gap-2 items-center justify-center p-4 sm:p-6 rounded-xl border border-light-accent dark:border-dark-accent bg-light-surface/80 dark:bg-dark-surface/80 shadow-lg opacity-0 transition-all duration-500 ${
                    inView ? "animate-fade-in-up" : ""
                  } w-[6.5rem] h-[6.5rem] md:w-[7rem] md:h-[7rem]`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl text-light-secondary dark:text-dark-secondary">
                    {skill.icon}
                  </div>
                  <p className="md:hidden text-xs text-center text-light-secondary dark:text-dark-secondary font-semibold">
                    {skill.name}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top">
                <span className="sm:hidden md:block text-sm font-bold bg-light-secondary dark:bg-dark-secondary text-white dark:text-dark-background px-2 py-1 rounded-lg">
                  {skill.name}
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </Layout>
  );
}
