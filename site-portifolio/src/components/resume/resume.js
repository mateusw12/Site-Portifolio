import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from '../education/education';
import './styled.css';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                alt="Mateus Walz"
                                src={process.env.PUBLIC_URL + '/assets/perfil.png'}
                                className='image-settings'
                            />
                        </div>

                        <h3 style={{ paddingTop: '20px' }}>Mateus Walz</h3>
                        <h4 style={{ color: 'grey' }}>Desenvolvedor Full Stack</h4>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Sou Mateus Walz, um engenheiro de software formado, com 2 anos de experiência em Tecnologia da Informação. Trabalho como desenvolvedor full stack, utilizando React, Angular, Java Spring Boot, .NET e Python. Tenho experiência em melhorias e correções de bugs em aplicações existentes e projetos no GitHub. Sou adaptável, proativo, dedicado e organizado, além de ter paixão por tecnologia e hobbies como videogame, estudo de novas tecnologias e esportes, especialmente futebol..</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col format-education" col={8}>
                        <h2>Formação</h2>

                        <Education
                            startYear={2018}
                            endYear={2022}
                            schoolName="Universidade da Região de Joinville - UNIVILLE"
                            schoolDescription="É uma instituição de ensino superior reconhecida pela qualidade e excelência acadêmica. Oferece uma ampla variedade de cursos de graduação, pós-graduação e extensão, abrangendo diversas áreas do conhecimento"
                        />

                        <Education
                            startYear={2017}
                            endYear={2019}
                            schoolName="Centro de Treinamento WEG - CTW"
                            schoolDescription="O Centro de Treinamento WEG, localizado em Jaraguá do Sul, Santa Catarina, é uma instalação especializada no treinamento e capacitação de profissionais nas áreas de tecnologia, engenharia e automação industrial."
                        />

                        <Education
                            startYear="Inicio"
                            endYear={2017}
                            schoolName="Escola de Educação Básica Lilia Ayroso Oechsler"
                            schoolDescription="A Escola Lilia Ayroso Oechsler, localizada em Jaraguá do Sul, é uma instituição de ensino comprometida com a educação de qualidade e o desenvolvimento integral dos alunos."
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;