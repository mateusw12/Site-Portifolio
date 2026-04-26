import { MdEmail } from "react-icons/md";
import { ISocials } from "./interface";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export const SOCIALS: ISocials[] = [
    {
        href: "mailto:mateus.walz@gmail.com",
        icon: MdEmail,
        label: "E-mail"
    },
    {
        href: "https://www.linkedin.com/in/mateus-walz-b40866137/",
        icon: FaLinkedin,
        label: "Linkedin"
    },
    {
        href: "https://github.com/mateusw12",
        icon: SiGithub,
        label: "Github"
    },
]