import React, { Component } from 'react';
import { Cell, Grid, Tab, Tabs } from 'react-mdl';
import { projectTabs } from '../../constant/projectTab';
import { repositoryProject } from '../../constant/repositoryProject';
import ProjectCard from '../../shared/projectCard/Card';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        const projectAngular = repositoryProject.filter(el => el.framework === "Angular")
        const projectReact = repositoryProject.filter(el => el.framework === "React")
        const projectBootstrapp = repositoryProject.filter(el => el.framework === "Bootstrap")
        const projectJava = repositoryProject.filter(el => el.framework === "Java")

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {
                        projectAngular.map(el => (
                            <ProjectCard projectName={el.name}
                                imgUrl={el.imgUrl}
                                link={el.link}
                                description={el.description}
                            ></ProjectCard>
                        ))
                    }

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {
                        projectBootstrapp.map(el => (
                            <ProjectCard projectName={el.name}
                                imgUrl={el.imgUrl}
                                link={el.link}
                                description={el.description}
                            ></ProjectCard>
                        ))
                    }
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {
                        projectReact.map(el => (
                            <ProjectCard projectName={el.name}
                                imgUrl={el.imgUrl}
                                link={el.link}
                                description={el.description}
                            ></ProjectCard>
                        ))
                    }
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {
                        projectJava.map(el => (
                            <ProjectCard projectName={el.name}
                                imgUrl={el.imgUrl}
                                link={el.link}
                                description={el.description}
                            ></ProjectCard>
                        ))
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    {
                        projectTabs.map(el => (
                            <Tab>{el.name}</Tab>
                        ))
                    }
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;