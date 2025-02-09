import {
  FaAngular,
  FaBootstrap,
  FaGithub,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { ISkill } from "./interface";

export const SKILLS: ISkill[] = [
  { name: "Angular", icon: <FaAngular /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsLine /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: ".NET", icon: <AiOutlineDotNet /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];
