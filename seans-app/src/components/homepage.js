import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class HomePage extends Component {
    render(){
        return(

         <div style = {{width: '100%', margin: 'auto', overflow: 'auto'}}>
            <Grid className = "landing-grid" style = {{overflow: 'auto', 
            background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)',
            textAlign: 'center',
            position: 'fixed',
            top: '5',
            left: '0',
            width: '100%',
            height: '100%'}}>
                <Cell col = {12}>
                    {/*<img
                        src = "https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                        alt = "avatar"
                        className = "avatar-img"
                    />
                    */}

                    <div className = "banner-text" style={{fontFamily: "Courier New",
                    opacity: '100%',
                    width: '75%',
                    margin: 'auto',
                    borderRadius: '10px',
                    color: 'white'}}>
                        <h1 style={{fontFamily: "Courier New",
                        fontSize: '5vw',
                        fontWeight: 'bold'}}>Sean de Mesa</h1>
                            <h2 style={{fontFamily: "Courier New",
                            fontSize: '3vw',
                            fontWeight: 'bold'}}>Full Stack Developer</h2>
                        <p style={{fontSize: '1.25vw',
                            padding: '1em'}}>C++ | Python | HTML | CSS | JavaScript | React | NodeJS | MySQL</p>

                        <hr style={{width: '50%', margin: 'auto'}}/>
                        
                        <p style={{fontSize: '1vw',
                        padding: '1em'}}>Hi, I'm Sean! I recently graduated from the University of Houston with a B.S. in computer science.
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
        )
    }
}

export default HomePage