import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class HomePage extends Component {
    render(){
        return(
        <div>
        <div>
            <a>NEW BUILD NEW BUILD</a>
        </div>
         <div style = {{width: '100%', margin: 'auto', overflow: 'auto'}}>
            <Grid className = "landing-grid" style = {{background: 'black', overflow: 'auto'}}>
                <Cell col = {12}>
                    {/*<img
                        src = "https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                        alt = "avatar"
                        className = "avatar-img"
                    />
                    */}

                    <div className = "banner-text" >
                        <h1 style={{color: 'white'}}>Sean de Mesa</h1>
                            <h2 style={{color: 'gray'}}>Full Stack Developer</h2>
                        <p>C++ | Python | HTML | CSS | JavaScript | React | NodeJS | MySQL</p>

                        <hr/>
                        
                        <p>Hi, I'm Sean! I recently graduated from the University of Houston with a B.S. in computer science.
                        <br/>
                        I'm passionate about learning new technologies and strive for excellence.
                        <br/>
                        I am knowledgeable in both front-end and back-end technologies, as well as object-oriented programming, data structures and algorithms.
                        <br/>
                        <br/>
                        </p>
                    
                    </div>
                </Cell>
            </Grid>
         </div> 
         </div>  
        )
    }
}

export default HomePage