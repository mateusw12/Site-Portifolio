import { IProject } from "./interface";

export const PROJECTS: IProject[] = [
  {
    title: "Chat App",
    description: "Aplicação de chat em tempo real com autenticação via Github.",
    stacks: ["Next.js 15", "Supabase", "Zustand", "Tailwind CSS"],
    repo: "https://github.com/mateusw12/chat-app",
  },
  {
    title: "MET Museum",
    description:
      "Projeto experimental desenvolvido para estudo e prática de Next.js 13+, integrando a API pública do The Metropolitan Museum of Art.",
    stacks: ["Next.js 15", "Tailwind CSS", "API REST"],
    repo: "https://github.com/mateusw12/met-museum",
  },
  {
    title: "Youtube Clone",
    description:
      "Projeto clone do youtube feito com React puro.",
    stacks: ["React", "TypeScript"],
    repo: "https://github.com/mateusw12/Youtube-Clone",
  },
  {
    title: "Weather",
    description:
      "Projeto desenvolvido para estudo e prática de Angular, integrando a API pública sobr eprevisão de tempo.",
    stacks: ["Angular", "API REST", "Java"],
    repo: "https://github.com/mateusw12/Weather",
  },
  {
    title: "Snake Game",
    description:
      "Projeto do jogo da cobrinha desenvolvido para estudo e prática de JavaScript.",
    stacks: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/mateusw12/SnakeGame---Js",
  },
];
