import { useInView } from "react-intersection-observer";
import { Layout } from "../../components/layout";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const fullProfile = `
const perfil = {
  nome: 'Mateus Walz',
  local: 'Jaraguá do Sul - SC',
  graduacao: 'Engenharia de Software - Univille',
  area: 'Full Stack | Front-end',
  foco: 'Qualidade tecnica + performance + produto',
};
`;

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const typedText = useTypingEffect(fullProfile, 20, inView);

  return (
    <Layout subtitle="<!-- sobre -->" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 max-w-6xl mx-auto">
        <div className="flex items-center flex-col gap-6 lg:border-r border-light-accent dark:border-dark-accent lg:pr-8">
          <img
            src="icon-profile.webp"
            alt="Profile"
            width={240}
            height={240}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 shadow-xl border-light-secondary/40 dark:border-dark-secondary/40 object-cover"
          />
          <div ref={ref} className="w-full max-w-md rounded-xl border border-light-accent dark:border-dark-accent bg-light-inputBackground/80 dark:bg-dark-inputBackground/80 p-4">
            <pre className="font-mono text-sm md:text-base font-medium text-light-text dark:text-dark-text min-w-[17rem] min-h-[12rem] text-left whitespace-pre-wrap">
              <code>{typedText}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <h3 className="section-title">Perfil profissional</h3>
          <p className="text-base md:text-lg font-medium text-light-text dark:text-dark-text leading-relaxed">
            Engenheiro de Software com experiencia em todo o ciclo de desenvolvimento,
            da descoberta da demanda ate a entrega e sustentacao da solucao em producao.
          </p>
          <p className="text-base md:text-lg font-medium text-light-text dark:text-dark-text leading-relaxed">
            Tenho atuacao em projetos com React, Next.js, Angular, .NET, Java e NestJS,
            desenvolvendo interfaces complexas, APIs REST e integracoes orientadas a confiabilidade e escalabilidade.
          </p>
          <p className="text-base md:text-lg font-medium text-light-text dark:text-dark-text leading-relaxed">
            Em times ageis, colaboro com design, produto e engenharia para priorizar entregas,
            reduzir retrabalho e elevar o padrao tecnico das implementacoes.
          </p>
          <div className="rounded-lg border border-light-accent/80 dark:border-dark-accent px-4 py-4 bg-light-inputBackground/70 dark:bg-dark-inputBackground/60 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-light-secondary dark:text-dark-secondary">Diferenciais</p>
            <p className="text-base text-light-text dark:text-dark-text">Arquitetura de front-end, performance, acessibilidade e boas praticas de codigo.</p>
            <p className="text-base text-light-text dark:text-dark-text">Comunicacao clara com stakeholders e foco continuo em impacto de negocio.</p>
          </div>
          <p className="rounded-lg border border-light-accent/80 dark:border-dark-accent px-4 py-3 bg-light-inputBackground/70 dark:bg-dark-inputBackground/60">
            <b className="text-base font-medium text-light-primary dark:text-dark-primary">
              "Consistencia, ownership e melhoria continua orientam meu trabalho."
            </b>
          </p>
        </div>
      </div>
    </Layout>
  );
}
