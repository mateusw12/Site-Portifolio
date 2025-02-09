import { MdEmail } from "react-icons/md";
import { ISocials } from "./interface";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export const SOCIALS: ISocials[] = [
    {
        href: "mailto:giovanaraphaelli@outlook.com",
        icon: MdEmail,
        label: "E-mail"
    },
    {
        href: "https://www.linkedin.com/in/giovanaraphaelli",
        icon: FaLinkedin,
        label: "Linkedin"
    },
    {
        href: "https://github.com/giovanaraphaelli",
        icon: SiGithub,
        label: "Github"
    },
]