import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'


class Contact extends Component {
    render(){
        return(
            <div className="contact-body" style={{background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)', 
            backgroundSize: 'cover', 
            overflow: 'auto',
            margin: 'auto',
            position: 'fixed',
            width: '100%',
            height: '94%',
            justifyContent: 'center',
            paddingTop: '2em'}}>
                <Grid className="contact-grid" style={{background: 'linear-gradient(to left, #C06C84, #6C5B7B, #355C7D)',
                backgroundSize: 'cover',
                textAlign: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                color: 'black',
                marginBottom: '20px'}}>
                    
                    <Cell col={4}>
                        <h2 style={{fontSize: '2vw', fontFamily: 'Oxygen'}}><b>Contact Me</b></h2> 
                        <hr style = {{borderTop: '5px dotted black',
                            width: '50%',
                            margin: 'auto'}}/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '2vw', fontFamily: 'Oxygen'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" style = {{fontSize: '4vw', paddingRIght: '5em'}}/>
                                        &ensp;(917) - 353 - 8073
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '1.25vw', fontFamily: 'Oxygen'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" style = {{fontSize: '4vw', paddingRIght: '5em'}}/>
                                        &ensp;seandemesa1@yahoo.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '0.75vw', fontFamily: 'Oxygen'}}>
                                        <i className="fa fa-linkedin-square"  aria-hidden="true" color="white" 
                                        style = {{color: 'black', fontSize: '5em'}}/>
                                        <a>&emsp;</a>
                                        <a href="https://www.linkedin.com/in/sean-de-mesa-54378b17a/" rel= "noopener noreferrer" target="_blank" className="social-links2">
                                        
                                        https://www.linkedin.com/in/sean-de-mesa-54378b17a/
                                        </a>
                                    </ListItemContent>
                                </ListItem>


                            </List>
                            <br/>
                        </div>

                    </Cell>
                    <Cell col={4}>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdqmsYuzNKBEiE-1irnFlvnmvrZU2p--1gdQlHGBBLkReuIGg/viewform?embedded=true"
                     width="640" height="55%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact