import React from 'react';
import './about.css';
import AppearingLine from './AppearingLine';

import image from './images/blackapril.webp';
import gif from './images/portfolio.webp';


class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            viewingGif: false
        }
    }

    renderGif = () => {
        this.setState({viewingGif: true});
    }
    renderImg = () => {
        this.setState({viewingGif: false});
    }


    render() {
        return (
            <div id="about" onMouseEnter={this.renderGif.bind(this)} onMouseLeave={this.renderImg.bind(this)}>
                <div id="about-description" >
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

                        <AppearingLine>
                            <a href="https://drive.google.com/file/d/1JD7NfW4xhqVQx9K-G89ZB3JQKTgLBWyw/view?usp=sharing">Get my resume right here !</a>
                        </AppearingLine>
                    </div>
                </div>
                <div id="image">
                    <img src={this.state.viewingGif ? gif : image} alt="black april"/>
                </div>
            </div>
        )
    }

}

export default About;
