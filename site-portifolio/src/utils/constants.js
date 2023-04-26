import React from 'react';
import { BsFillBookFill, BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { SiAboutdotme } from 'react-icons/si';

export const menuItems = [
    { name: 'Sobre', icon: <SiAboutdotme />, link: '/about' },
    { name: 'Skills', icon: <BsFillBookFill />, link: '/skills' },
    { name: 'Projetos', icon: <BsFillFileEarmarkPostFill />, link: '/projects' },
];
