import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing/landingpage';
import Contact from './contact/contact';
import Projects from './projects/projects';
import Resume from './resume/resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;   