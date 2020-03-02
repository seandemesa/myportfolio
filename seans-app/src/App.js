import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
//import './App.css';
import {Layout, Header, Navigation, Drawer, Content, HeaderRow} from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout fixedHeader="True">
        <Header transparent waterfall className="header-color" title=" " scroll
        style={{background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        
        </Header>
        {/*
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        */}
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
