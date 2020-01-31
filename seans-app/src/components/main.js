import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import HomePage from './homepage';
import NewProjectsPage from './aboutme';
import Contact from './contacts';
import Projects from './projects';


const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path ="/" component={HomePage} />
            <Route path ="/projects" component={NewProjectsPage} />
            <Route path ="/contact" component={Contact} />
            {/*<Route path ="/projects" component={Projects} />*/}
        </Switch>
    </HashRouter>


)
export default Main;




