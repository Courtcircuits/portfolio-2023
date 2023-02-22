import React from 'react';
import hero_img from './images/hero.png';
import './hero.css';
import Title from './Title.js';
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
        console.log(index);

        this.setState({indexTitle: index});
    }
    render(){
        const listTitles = [{"up": "NETWORK", "down": "DEVELOPER"}, {"up": "DEVOPS", "down": "ENGINEER"}, {"up": "FULLSTACK", "down": "DEVELOPER"}, {"up": "SCRUM", "down": "MASTER"}];

        return (
            <div id="hero">
                <Title up="TRISTAN-MIHAI" down="RADULESCU" />

                <div id="hero-img">
                    <img src={hero_img} alt="hero-img" border="0"/>
                </div>
                <div id="description">
                    <p>I HELP COMPANIES BUILD RELIABLE INFRASTRUCTURES</p>
                    <Title up={listTitles[this.state.indexTitle].up} down={listTitles[this.state.indexTitle].down} alignright={true}/>

                </div>
            </div>
        )
    }
}

export default Hero;
