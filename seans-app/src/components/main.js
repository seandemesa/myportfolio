import React from 'react';
import {HashRouter, BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './homepage';
import NewProjectsPage from './aboutme';
import Contact from './contacts';
import Projects from './projects';


const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={HomePage} />
            <Route path ="/projects" component={NewProjectsPage} />
            <Route path ="/contact" component={Contact} />
            {/*<Route path ="/projects" component={Projects} />*/}
        </Switch>
    </BrowserRouter>

)
export default Main;




