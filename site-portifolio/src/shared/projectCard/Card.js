import React, { Component } from 'react';
import { Button, Card, CardActions, CardMenu, CardText, CardTitle } from 'react-mdl';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto', height: '500px', backgroundColor: "#F5F5F5" }}>
                <CardTitle style={{
                    color: '#fff',
                    height: '200px',
                    background: `url(${this.props.imgUrl}) center / cover `
                }} >
                </CardTitle>
                    <b>  <h5 style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "10px", color: "#000" }}>{this.props.projectName}</h5></b>
                <CardText style={{ height: '250px', color: "#000", overflow: "auto" }}>
                    <p>{this.props.description}</p>
                </CardText>
                <CardActions border>
                    <a href={this.props.link} target="_blank" without rel="noreferrer"> <Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                </CardMenu>
            </Card >
        )
    }
}

export default ProjectCard;