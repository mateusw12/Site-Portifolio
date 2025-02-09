import { IconType } from "react-icons/lib";

export interface ISocials {
  href: string;
  icon: IconType;
  label: string;
}

export interface ISkill {
  name: string;
  icon: JSX.Element;
}

export interface IProject {
  title: string;
  description: string;
  img: any;
  stacks: string[];
  repo: string;
}
