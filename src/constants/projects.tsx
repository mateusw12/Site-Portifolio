import { IProject } from "./interface";

export const PROJECTS: IProject[] = [
  {
    title: "Chat App",
    description: "Aplicação de chat em tempo real com autenticação via Github.",
    img: "chat-app.png",
    stacks: ["Next.js 15", "TypeScript", "Supabase", "Zustand", "Tailwind CSS"],
    repo: "https://github.com/mateusw12/chat-app",
  },
  {
    title: "MET Museum",
    description:
      "Projeto experimental desenvolvido para estudo e prática de Next.js 13+, integrando a API pública do The Metropolitan Museum of Art.",
    img: "met-museum.png",
    stacks: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/mateusw12/met-museum",
  },
];
