import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 stlye={{paddingTop: '2em'}}>Sean de Mesa</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>2 Hello Way Park, 11111</p>
                        <h5>Phone</h5>
                        <p>(123) - 456 - 7890</p>
                        <h5>Email</h5>
                        <p>someEmail@gmail.com</p>
                        <h5>Web</h5>
                        <p>website.com</p>
                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2000}
                            endYear={2006}
                            schoolName={"Some University"}
                            schoolDescription={"Some text for a description"}
                        />
                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName={"Some 2nd University"}
                            schoolDescription={"Some text for a description"}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="some text for a description"

                        />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="some text for a description"

                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        
                    
                    
                    </Cell>
                </Grid>
            
            </div>
        )
    }
}

export default Resume