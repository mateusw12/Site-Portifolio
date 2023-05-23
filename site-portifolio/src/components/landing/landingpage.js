import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { socialLinks } from '../../constant/socialMediaItems'
import './styled.css';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://mitadmissions.org/wp-content/uploads/2018/07/avatar_5492.jpg" alt=" Black Avatar" className="avatar-img" />
                    </Cell>

                    <div className="banner-text">
                        <h1>Desenvolvedor Full Stack</h1>
                        <hr />
                        <p> Bootstrap | React | Angular | NodeJs | Java | Spring Boot | Python | .NET | Sql Server</p>

                        <div className="social-links">
                            {
                                socialLinks.map(el => (
                                    <a href={el.link} rel="noopener noreferrer" target="_blank">
                                        <i className={el.icon} aria-hidden="true" />
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landing;