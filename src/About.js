import React from 'react';
import './about.css';

class About extends React.Component {


    render() {
        return (
            <div id="about">
                <div id="about-description">
                    <div className="side">
                        <span>
                            <p>ABOUT</p>
                        </span>
                        <span>
                            <p> ME...</p>
                        </span>

                    </div>
                    <div className="content-about">
                        <span>
                            <p>
                                HI I’M TRISTAN ! I LIKE TO BUILD BACKEND INFRASTRUCTURES FROM SCRATCH WHILE APPLYING DEVOPS
                                PHILOSOPHY.
                            </p>
                        </span>
                        <span>
                            <p>
                                WHEN I’M NOT CODING I MIGHT BE SKATEBOARDING OR PLAYING THE GUITAR WITH MY BAND.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;