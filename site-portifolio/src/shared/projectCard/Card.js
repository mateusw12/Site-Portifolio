import React, { Component } from 'react';
import { Button, Card, CardActions, CardMenu, CardText, CardTitle, IconButton } from 'react-mdl';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //    function onGitHubClick(link) {
    //     window.open(String(link), "_blank")
    // }

    render() {
        return (
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '500px' }}>
                <CardTitle style={{
                    color: '#fff',
                    height: '176px',
                    background: `url(${this.props.imgUrl}) center / cover `
                }} >
                    {this.props.projectName}
                </CardTitle>
                <CardText style={{ height: '250px' }}>
                    <p>{this.props.description}</p>
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card >
        )
    }
}

export default ProjectCard;