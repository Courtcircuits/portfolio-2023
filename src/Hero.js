import React from 'react';
import hero_img from './images/hero.webp';
import './hero.css';
import Title from './Title.js';
import AppearingLine from "./AppearingLine";
import AppearingImage from "./AppearingImage";

class Hero extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            indexTitle: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.changeTitle();
    }

    changeTitle = () => {
        const scroll = window.scrollY;
        const index = Math.floor(scroll / 200) % 4;
        if(index !== this.state.indexTitle){
            this.setState({indexTitle: index});

        }
    }
    render(){
        const listTitles = [{"up": "NETWORK", "down": "DEVELOPER"}, {"up": "DEVOPS", "down": "ENGINEER"}, {"up": "FULLSTACK", "down": "DEVELOPER"}, {"up": "SCRUM", "down": "MASTER"}];

        return (
            <div id="hero">
                <AppearingLine>
                    <Title up="TRISTAN-MIHAI" down="RADULESCU" />
                </AppearingLine>
                <div id="hero-img">
                    <AppearingImage text="Hi there !" path={hero_img} alt="hero-img" direction="left"/>
                </div>
                <div id="description">
                    <AppearingLine>
                        <p>
                        I HELP COMPANIES BUILD RELIABLE INFRASTRUCTURES
                        </p>
                    </AppearingLine>

                    <Title up={listTitles[this.state.indexTitle].up} down={listTitles[this.state.indexTitle].down} alignright={true}/>

                </div>
            </div>
        )
    }
}

export default Hero;
