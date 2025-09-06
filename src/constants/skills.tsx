import { FaAngular, FaJava, FaPython, FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { ISkill } from "./interface";
import { TbSql } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";

export const SKILLS: ISkill[] = [
  { name: "Angular", icon: <FaAngular /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsLine /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
  { name: "Python", icon: <FaPython /> },
  { name: ".NET", icon: <AiOutlineDotNet /> },
  { name: "Nest Js", icon: <SiNestjs /> },
  { name: "SQL", icon: <TbSql /> },
  { name: "Git", icon: <FaGitAlt /> },
];
