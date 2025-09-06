import { useInView } from "react-intersection-observer";
import { Layout } from "../../components/layout";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const fullProfile = `
const perfil = {
  nome: 'Mateus Walz',
  idade: 25,
  local: 'Jaraguá do Sul - SC',
  graduacao: 'Engenharia de Software - Univille',
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
            <pre className="font-mono text-base font-medium text-light-text dark:text-dark-text min-w-[17rem] min-h-[12rem] text-left">
              <code>{typedText}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Sou engenheiro de software apaixonado por tecnologia e
            desenvolvimento full stack, com foco atual em front-end. Adoro criar
            interfaces intuitivas e performáticas, resolver problemas complexos
            e otimizar processos por meio do código.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Minha trajetória começou em 2021 como desenvolvedor júnior, atuando
            com Angular e .NET no desenvolvimento de novas funcionalidades e
            correção de bugs. Sempre busquei explorar novas tecnologias,
            passando por Python, Java com Spring Boot e NestJS, desenvolvendo
            APIs REST e ampliando meus conhecimentos em back-end. Além disso,
            trabalhei com diversos bancos de dados relacionais e não
            relacionais, como SQL Server, MySQL, Oracle e MongoDB.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Com o tempo, direcionei meu foco para tecnologias front-end,
            especialmente React e Next.js, aprimorando habilidades em
            performance, interfaces complexas e experiências intuitivas. Tenho
            experiência também em metodologias ágeis, como Kanban e Scrum,
            garantindo entregas mais organizadas e eficientes.
          </p>
          <p className="text-base font-medium text-light-text dark:text-dark-text">
            Fora do ambiente profissional, sou apaixonado por música, adoro
            maratonar séries, passar tempo em ar livre, mas como sempre gosto de
            passar algumas horas jogando. 🚀
          </p>
          <p>
            <b className="text-base font-medium text-light-text dark:text-dark-text">
              "Vencedores não dão desculpas quando o outro lado joga o jogo." –
              Suits
            </b>
          </p>
        </div>
      </div>
    </Layout>
  );
}
