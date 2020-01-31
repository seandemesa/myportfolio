import React, {Component} from 'react';
import {Grid, Cell, Menu, MenuItem, IconButton} from 'react-mdl';

class NewProjectsPage extends Component {

    constructor(props){
        super(props);
        this.state = { menu1Option: 0,
                       menu2Option: 0,
                       menu3Option: 0};
    }

    toggleMenu1Options(){
        //first 3 are for PD reinforcement learning videos
        if(this.state.menu1Option == 0){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/7EwIX77Ch0A" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu1Option == 1){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/yvd8nlgwLDU"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu1Option == 2){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/CxnGp9lrSL0"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        
    }

    toggleMenu2Options(){
        //Next 4 are for citruscide
        if (this.state.menu2Option == 0){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/AlHw-gq8gIg" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu2Option == 1){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/8Q-wQxd4IzM"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu2Option == 2){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/6B5im93P0C8"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu2Option == 3){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/J4ymak72zKk"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
    }

    toggleMenu3Options(){
        //Next 4 are for a* videos
        if (this.state.menu3Option == 0){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/T0W3cnP4er8" style={{}}
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu3Option == 1){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/jdmUFOq2Ve4"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu3Option == 2){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/L8HOsSR7giQ"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu3Option == 3){
            return(
                <a><iframe width="560" height="315" src="https://www.youtube.com/embed/Tq4B4yTPS6o"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
    }
        

    handleMenu1Option = event =>{
        this.setState({menu1Option: event.target.value})
    }

    handleMenu2Option = event =>{
        this.setState({menu2Option: event.target.value})
    }

    handleMenu3Option = event =>{
        this.setState({menu3Option: event.target.value})
    }



    render(){
        return(
            <div>

                {/*<div className="parallax"></div>

                <div style={{height: '500px', backgroundColor: 'red', fontSize: '36px'}}>
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
                </div>

        <div className="parallaxTwo"></div>*/}
        <div className="header-color"style={{color: '#777', backgroundColor: '#355C7D', textAlign: 'center', height: '100px', width: '100%'}}>
        <p style={{color: 'white', fontWeight:'bold', fontSize:'40px', paddingTop:'30px', fontFamily: 'Courier New'}}>PROJECT 1</p> 
        </div>
                

        <div className='parallax' style={{paddingLeft:'22%', paddingTop:'5%'}}>
        <Grid>
            <Cell col={1}>
                <div style={{position: 'relative'}}>
                    <p><b>Want to view other examples? Click below.</b></p>
                    <IconButton name="more_vert" id="demo-menu-lower-right"/>
                    <Menu target="demo-menu-lower-right" align="right" onClick = {this.handleMenu1Option}>
                        <MenuItem value = "0">1</MenuItem>
                        <MenuItem value = "1">2</MenuItem>
                        <MenuItem value = "2">3</MenuItem>
                    </Menu>
                </div>
            </Cell>
            <Cell col={6}>
                <a>{this.toggleMenu1Options()}</a>
            </Cell>
            <Cell col={4}>
                <p><b>Description: </b>There exists a matrix world with various locations known as "pickup spots" or "dropoff spots". An agent is
                tasked with the objective to find pickup spots and "carry" what it picked up to a dropoff spot and repeat this process until
                every pickup spot is empty and every dropoff spot is full. It utilizes a combination of different reinforcement learning algorithms
                (<a href="https://en.wikipedia.org/wiki/Q-learning" target="_blank">Q-Learning</a> & <a href="https://en.wikipedia.org/wiki/State-action-reward-state-action" target="_blank">SARSA</a>)
                 and policies which decide its behavior to try and effectively learn the world.
                 </p>
                <br/>
                <p><b>My Responsibilities:</b> I was tasked with combining the code of my team members whilst also creating a visual to see the agent
                act in near real-time.</p>
                <br/>
                <p><b>Technologies Used:</b> Python, pygame </p>
            </Cell>
        </Grid>
        </div>

        
        <div className="header-color"style={{color: '#777', backgroundColor: '#355C7D', textAlign: 'center', height: '250px', width: '100%'}}>
        <p style={{color: 'white', fontWeight:'bold', fontSize:'40px', fontFamily: 'Courier New'}}><br/><br/><br/><br/>PROJECT 2</p> 
        </div>

        <div className='parallaxThree' style={{paddingLeft:'22%', paddingTop:'5%'}}>
        <Grid>
            <Cell col={1}>
                <div style={{position: 'relative'}}>
                    <p><b>Want to view other bosses? Click below.</b></p>
                    <IconButton name="more_vert" id="demo-menu-lower-left"/>
                    <Menu target="demo-menu-lower-left" align="right" onClick = {this.handleMenu2Option}>
                        <MenuItem value = "0">Boss Fight 1</MenuItem>
                        <MenuItem value = "1">Boss Fight 2</MenuItem>
                        <MenuItem value = "2">Boss Fight 3</MenuItem>
                        <MenuItem value = "3">Boss Fight 5</MenuItem>
                    </Menu>
                </div>
            </Cell>
            <Cell col={6}>
                <a>{this.toggleMenu2Options()}</a>
            </Cell>
            <Cell col={4}>
                <p><b>Description: </b>An 8-bit/retro <a href="https://en.wikipedia.org/wiki/Metroidvania" target="_blank">metroidvania</a> style game
                that was also heavily inspired by <a href="http://www.cupheadgame.com/" target="_blank">Cuphead.</a> Includes 5 short levels along with
                6 bosses that ramp up with difficulty and intensity.
                </p>
                <br/>
                <p><b>My Responsibilities: </b> Design and implementation of all 6 bosses.</p>
                <br/>
                <p><b>Technologies Used: </b> Unity2D, C#, GitHub</p>
            </Cell>
        </Grid>
        </div>

        <div className="header-color"style={{color: '#777', backgroundColor: '#355C7D', textAlign: 'center', height: '250px', width: '100%'}}>
        <p style={{color: 'white', fontWeight:'bold', fontSize:'40px', fontFamily: 'Courier New'}}><br/><br/><br/><br/>PROJECT 3</p> 
        </div>

        <div className='parallaxTwo' style={{paddingLeft:'22%', paddingTop:'5%'}}>
        <Grid>
            <Cell col={1}>
                <div style={{position: 'relative'}}>
                    <p><b>Want to view other examples? Click below.</b></p>
                    <IconButton name="more_vert" id="demo-menu-top-right"/>
                    <Menu target="demo-menu-top-right" align="right" onClick = {this.handleMenu3Option}>
                        <MenuItem value = "0">Simple Wall</MenuItem> 
                        <MenuItem value = "1">Randomly Generated Walls</MenuItem>
                        <MenuItem value = "2">Division</MenuItem>
                        <MenuItem value = "3">Maze</MenuItem>
                    </Menu>        
                </div>
            </Cell>
            <Cell col={6}>
                <a>{this.toggleMenu3Options()}</a>
            </Cell>
            <Cell col={4}>
                <p><b>Description: </b>A visualization of the <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank">A* search algorithm.</a>
                  Includes the option to scale the matrix, select the starting and destination nodes, create unique walls, and/or generate random walls.
                </p>
                <br/>
                <p><b>My Responsibilities: </b>Self-project (i.e. everything) </p>
                <br/>
                <p><b>Technologies Used: </b>Python, pygame </p>
            </Cell>
        </Grid>
        </div>
        
        </div>
            
        )
    }
}

export default NewProjectsPage