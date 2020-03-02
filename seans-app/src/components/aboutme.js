import React, {Component, createRef} from 'react';
import {Grid, Cell, Menu, MenuItem, IconButton, Tabs, Tab} from 'react-mdl';
import img01 from '../machineLearning03.png'
import img02 from '../citruscideLogo2.png';
import img03 from '../A_Star2.png';
import img04 from '../HowlsCastleNew03.png';
import img05 from '../themepark02.png';

class NewProjectsPage extends Component {

    constructor(props){
        super(props);
        this.scrollDiv01 = createRef();
        this.scrollDiv02 = createRef();
        this.scrollDiv03 = createRef();
        this.scrollDiv04 = createRef();
        this.scrollDiv05 = createRef();
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
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/yvd8nlgwLDU"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu1Option == 2){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/CxnGp9lrSL0"
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
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/8Q-wQxd4IzM"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu2Option == 2){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/6B5im93P0C8"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu2Option == 3){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/J4ymak72zKk"
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
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/jdmUFOq2Ve4"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu3Option == 2){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/L8HOsSR7giQ"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            )
        }
        else if (this.state.menu3Option == 3){
            return(
                <a><iframe width="80%" height="315" src="https://www.youtube.com/embed/Tq4B4yTPS6o"
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

        <div className="header-color" style={{background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)',
        textAlign: 'center', 
        height: '150px', 
        width: '100%'}} ref={this.scrollDiv01}>
            <div className="demo-tabs" style={{position: 'fixed', width: '100%', margin: 'auto', background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)'}}>
                <Tabs activeTab={this.state.activeTab} ripple >
                    <Tab style = {{fontSize: '1.5vw',fontWeight: 'bold', color: 'white', fontFamily: 'Courier New'}} onClick={() => {
                        this.scrollDiv01.current.scrollIntoView({ behavior: 'smooth' });
                      }}>PROJECT 1</Tab>
                    <Tab style = {{fontSize: '1.5vw',fontWeight: 'bold', color: 'white', fontFamily: 'Courier New'}} onClick={() => {
                        this.scrollDiv02.current.scrollIntoView({ behavior: 'smooth' });
                      }}>PROJECT 2</Tab>
                    <Tab style = {{fontSize: '1.5vw',fontWeight: 'bold', color: 'white', fontFamily: 'Courier New'}} onClick={() => {
                        this.scrollDiv03.current.scrollIntoView({ behavior: 'smooth' });
                      }}>PROJECT 3</Tab>
                    <Tab style = {{fontSize: '1.5vw',fontWeight: 'bold', color: 'white', fontFamily: 'Courier New'}} onClick={() => {
                        this.scrollDiv04.current.scrollIntoView({ behavior: 'smooth' });
                      }}>PROJECT 4</Tab>
                    <Tab style = {{fontSize: '1.5vw',fontWeight: 'bold', color: 'white', fontFamily: 'Courier New'}} onClick={() => {
                        this.scrollDiv05.current.scrollIntoView({ behavior: 'smooth' });
                      }}>PROJECT 5</Tab>
                </Tabs>
            </div>    
        <br/>
        <br/>

        <p style={{color: 'white',
        fontWeight:'bold', 
        fontSize:'40px', 
        paddingTop:'30px', 
        fontFamily: 'Courier New'}}>PROJECT 1</p> 
        </div>
                

        <div className='parallax' style={{paddingLeft:'22%', 
        paddingTop:'5%',
        backgroundImage: "url(" + img04 + ")",
        minHeight: '400px', 
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
        <Grid>
            <Cell col={1}>
            </Cell>
            <Cell col={6}>
                <a><iframe width="80%" height="315" 
                src="https://www.youtube.com/embed/0TTV1U64OYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a><p style={{fontSize: '20px'}}><b><a href="https://stuffyouwatch.herokuapp.com/" target="_blank">Click here to visit website.</a></b></p>
            </Cell>
            <Cell col={4}>
                <p><b><u>DESCRIPTION</u>: A web application that allows users to create a personalized list
                of movies or TV shows that they've watched into 1 convinient place. Users can search for
                their movie/show using a search function that utilizes an <a href="https://www.imdb.com/" target="_blank">IMDb</a> API.
                They can adjust the dates they watched, add a personal rating, or add a description, all of which
                gets stored to a database.
                </b></p>
                <br/>
                <p><b><u>MY RESPONSIBILITIES</u>: Self-project (i.e. everything)</b></p>
                <br/>
                <p><b><u>TECHNOLOGIES USED</u>: AWS RDS (MySQL), Express, React, Node.js, Heroku </b></p>
            </Cell>
        </Grid>
        </div>

        <div className="header-color" style={{ background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)', 
        textAlign: 'center', 
        height: '250px', 
        width: '100%'}}>
        <p style={{color: 'white', 
        fontWeight:'bold', 
        fontSize:'40px', 
        fontFamily: 'Courier New'}} ref={this.scrollDiv02}><br/><br/><br/><br/>PROJECT 2</p> 
        </div>
        

        <div className='parallax' style={{paddingLeft:'22%', 
        paddingTop:'5%',
        backgroundImage: "url(" + img01 + ")",
        minHeight: '400px', 
        backgroundAttachment: 'fixed',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
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
                <p><b><u>DESCRIPTION</u>: An application which has an agent that is tasked with the objective of finding "pickup" spots to "carry" over to a "dropoff" spot 
                and repeat this process until every pickup spot is empty and every dropoff spot is full. It utilizes a combination of different reinforcement learning algorithms
                (<a href="https://en.wikipedia.org/wiki/Q-learning" target="_blank">Q-Learning</a> & <a href="https://en.wikipedia.org/wiki/State-action-reward-state-action" target="_blank">SARSA</a>)
                 and policies which decide its behavior to try and effectively learn the world.
                 </b></p>
                <br/>
                <p><b><u>MY RESPONSIBILITIES</u>: I was tasked with combining the code of my team members whilst also creating a visual to see the agent
                act in near real-time.</b></p>
                <br/>
                <p><b><u>TECHNOLOGIES USED</u>: Python, pygame </b></p>
            </Cell>
        </Grid>
        </div>
        

        
        <div className="header-color" style={{ background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)', 
        textAlign: 'center', 
        height: '250px', 
        width: '100%'}}>
        <p style={{color: 'white', 
        fontWeight:'bold', 
        fontSize:'40px', 
        fontFamily: 'Courier New'}} ref={this.scrollDiv03}><br/><br/><br/><br/>PROJECT 3</p> 
        </div>
        

        <div className='parallaxThree' style={{paddingLeft:'22%', 
        paddingTop:'5%',
        backgroundImage: "url(" + img02 + ")",
        minHeight: '400px', 
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
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
                <p><b><u>DESCRIPTION</u>: An 8-bit/retro <a href="https://en.wikipedia.org/wiki/Metroidvania" target="_blank">metroidvania</a> style game
                that was also heavily inspired by <a href="http://www.cupheadgame.com/" target="_blank">Cuphead.</a> Includes 5 short levels along with
                6 bosses that ramp up with difficulty and intensity.
                </b></p>
                <br/>
                <p><b><u>MY RESPONSIBILITIES</u>:  Design and implementation of all 6 bosses.</b></p>
                <br/>
                <p><b><u>TECHNOLOGIES USED</u>:  Unity2D, C#, GitHub</b></p>
            </Cell>
        </Grid>
        </div>

        <div className="header-color" style={{background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)', 
        textAlign: 'center', 
        height: '250px', 
        width: '100%'}}>
        <p style={{color: 'white', fontWeight:'bold', fontSize:'40px', fontFamily: 'Courier New'}} ref={this.scrollDiv04}><br/><br/><br/><br/>PROJECT 4</p> 
        </div>

        <div className='parallaxTwo' style={{paddingLeft:'22%', 
        paddingTop:'5%',
        backgroundImage: "url(" + img03 + ")",
        minHeight: '400px', 
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
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
                <p><b><u>DESCRIPTION</u>: A visualization of the <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank">A* search algorithm</a>. 
                   Includes the option to scale the matrix, select the starting and destination nodes, create unique walls, and/or generate random walls.
                  </b></p>
                <br/>
                <p><b><u>MY RESPONSIBILITIES</u>: Self-project (i.e. everything) </b></p>
                <br/>
                <p><b><u>TECHNOLOGIES USED</u>: Python, pygame </b></p>
            </Cell>
        </Grid>
        </div>
        
        <div className="header-color" style={{background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)', 
        textAlign: 'center', 
        height: '250px', 
        width: '100%'}}>
        <p style={{color: 'white', fontWeight:'bold', fontSize:'40px', fontFamily: 'Courier New'}} ref={this.scrollDiv05}><br/><br/><br/><br/>PROJECT 5</p> 
        </div>
        <div className='parallaxTwo' style={{paddingLeft:'22%', 
        paddingTop:'5%',
        backgroundImage: "url(" + img05 + ")",
        minHeight: '400px', 
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'}}>
        <Grid>
            <Cell col={1}>
            </Cell>
            <Cell col={6}>
                <a><iframe width="80%" height="315"
                 src="https://www.youtube.com/embed/Cf9CQ7qkc8Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
            </Cell>
            <Cell col={4}>
                <p><b><u>DESCRIPTION</u>: A web application to emulate a system for themepark employees and managers. For employees,
                their accounts would show a calendar of who is working when and in what zone. For higher-ups such as managers, the application
                allowed them to update information on rides, employees, etc. and provided graphs to visualize data and performance.
                </b></p>
                <br/>
                <p><b><u>MY RESPONSIBILITIES</u>: Connecting the frontend and backend to communicate data to and from database</b></p>
                <br/>
                <p><b><u>TECHNOLOGIES USED</u>: PHP, AWS RDS (MySQL), JavaScript, CSS </b></p>
            </Cell>
        </Grid>
        </div>

        </div>
            
        )
    }
}

export default NewProjectsPage