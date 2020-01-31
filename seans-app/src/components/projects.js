import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className = "projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>Some card text some card text some card text</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>


                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #2</CardTitle>
                        <CardText>Some card text some card text some card text</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style = {{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #3</CardTitle>
                        <CardText>Some card text some card text some card text</CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
                
            )
        }
        else if (this.state.activeTab === 1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }
        else if (this.state.activeTab === 2){
            return(
                <div><h1>This is VueJS</h1></div>
            )
        }
        else if (this.state.activeTab === 3){
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render(){
        return(
         <div className = "catergory-tabs">
            <Tabs activeTab = {this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJS</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>

                <Grid>
                    <Cell col = {12}>
                        <div className = "content">{this.toggleCategories()}</div>
                    </Cell>
                
                </Grid>)
         </div>   
        )
    }
}

export default Projects