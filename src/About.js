import React from 'react';
import './about.css';
import AppearingLine from './AppearingLine';


function About() {


    return (
        <div id="about">
            <div id="about-description">
                <div className="side">
                    <AppearingLine>ABOUT</AppearingLine>
                    <AppearingLine>ME</AppearingLine>
                </div>
                <div className="content-about">


                    <AppearingLine>
                        <p>
                        HI, I’M TRISTAN !
                        </p>
                    </AppearingLine>
                    <AppearingLine>
                        <p>I LIKE TO BUILD BACKEND INFRASTRUCTURES FROM SCRATCH WHILE APPLYING DEVOPS
                            PHILOSOPHY.</p>
                    </AppearingLine>
                    <AppearingLine>
                        <p>WHEN I’M NOT CODING I MIGHT BE SKATEBOARDING OR PLAYING THE GUITAR WITH MY BAND.</p>
                    </AppearingLine>
                </div>
            </div>
        </div>
    )

}

export default About;
