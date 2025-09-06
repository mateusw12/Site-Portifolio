import { useInView } from "react-intersection-observer";
import { Layout } from "../../components/layout";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const fullProfile = `
const perfil = {
  nome: 'Mateus Walz',
  idade: 25,
  local: 'Jaraguá do Sul - SC',
  area: 'Full Stack',
};
`;

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const typedText = useTypingEffect(fullProfile, 20, inView);

  return (
    <Layout subtitle="<!-- sobre mim -->" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-6xl">
        <div className="flex items-center flex-col gap-6">
          <img
            src="icon-profile.webp"
            alt="Profile"
            width={240}
            height={240}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full border-2 shadow-md border-light-secondary dark:border-dark-secondary"
          />
          <div ref={ref}>
            <pre className="font-mono text-base font-medium min-w-[30ch] min-h-[12rem] overflow-hidden">
              <code>{typedText}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Sou engenheiro de software pleno, apaixonado por tecnologia e
            desenvolvimento front-end. Gosto de criar interfaces intuitivas e
            performáticas, além de resolver problemas e otimizar processos
            através do código.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Minha trajetória começou em 2021 como desenvolvedor júnior, atuando
            com Angular e .NET no desenvolvimento de novas features e correções
            de bugs. Mais tarde, migrei para React e Next.js, trabalhando com
            Python, API REST e MongoDB.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Tenho experiência com diversas tecnologias, incluindo Python, React,
            Angular, Java, SQL Server, MongoDB e Oracle. Além disso, conheço
            metodologias ágeis como Kanban e Scrum.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Fora do trabalho, sou apaixonado por música e me perco em séries e
            gosto de passar algumas horas jogando. 🚀
          </p>
          <p>
            <b>
              "Vencedores não dão desculpas quando o outro lado joga o jogo." –
              Suits
            </b>
          </p>
        </div>
      </div>
    </Layout>
  );
}
