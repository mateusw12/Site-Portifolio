import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const projects = [
    {
        projectTitle: "Padaria",
        projectBody: "O sistema é desenvolvido no front-end em Angular e back-end em Java Spring Boot. é projetado para fornecer uma simulação de sistema comercial de uma padaria." +
            " Ele permite que os usuários possam realizar operações CRUD (criar, ler, atualizar e excluir)" +
            " em dados de padaria, como produtos, funcionários e estoque.",
        repositoryLink: "https://github.com/mateusw12/Padaria"
    },
    {
        projectTitle: "Clima Js",
        projectBody: "Aplicação que consulta o clima atual da cidade informada, feito puramente em java script.",
        repositoryLink: "https://github.com/mateusw12/Clima---Js"
    },
    {
        projectTitle: "Hospital System",
        projectBody: "Projeto tocador de música feito puramente em java script.",
        repositoryLink: "https://github.com/mateusw12/PlayerMusic"
    },
    {
        projectTitle: "Youtube Clone",
        projectBody: "Segundo projeto feito em React, é um clone do Youtube, usando as melhores boas práticas para o desenvolvimento." +
            " Utilizando algumas bibliotecas conhecidas como o boostrap, react icons e react boostrap." +
            "Para utilização de dados é usado a api gratuita do Youtube no rapidAPI",
        repositoryLink: "https://github.com/mateusw12/Youtube-Clone"
    }
];

export const socialMedias = [
    { link: "https://www.instagram.com/mateus_w12/", title: "Instagram", icon: <FaInstagram size={30} color="#C13584" /> },
    { link: "https://www.facebook.com/mateus.walz/", title: "Facebook", icon: <FaFacebook size={30} color="#1877F2" /> },
    { link: "https://www.linkedin.com/in/mateus-walz-b40866137/", title: "Linkedin", icon: <FaLinkedin size={30} color="#0077B5" /> },
    { link: "https://github.com/mateusw12", title: "GitHub", icon: <FaGithub size={30} color="#211F1F" /> },
];

export const pages = [
    { link: "/about", title: "Sobre" },
    { link: "/skills", title: "Habilidades" },
    { link: "/project", title: "Projetos" },
];

export const softSkills = [
    { skill: "Proativo" },
    { skill: "Organizado" },
    { skill: "Trabalho em equipe" },
    { skill: "Ágil" },
    { skill: "Criativo" },
    { skill: "Capacidade analítica" },
    { skill: "Resolução de conflitos" },
];

export const hardSkills = [
    { skill: "Bacharelado em Engenharia de Software" },
    { skill: "Inglês Técnico" },
    { skill: "Dominio JavaScript, TypeScript, HTML, CSS" },
    { skill: "Dominio Angular e React" },
    { skill: "Dominio java Spring Boot, Phyton e .NET" },
];