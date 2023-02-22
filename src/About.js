import React from 'react';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div id="about-description">
                    <div className="side">
                        <p>ABOUT<br/> ME...</p>
                    </div>
                    <div className="content-about">
                        <p>
                            HI I’M TRISTAN ! I LIKE BUILDING BACKEND INFRASTRUCTURE FROM SCRATCH WHILE APPLYING DEVOPS
                            PHILOSOPHY.

                        </p>
                        <p>
                            WHEN I’M NOT CODING I MIGHT BE SKATEBOARDING OR PLAYING THE GUITAR WITH MY BAND.

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;