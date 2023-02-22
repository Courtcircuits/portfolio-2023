import React from 'react';
import hero_img from './images/hero.png';
import './hero.css';
import Title from './Title.js';
class Hero extends React.Component{
    render(){
        return (
            <div id="hero">
                <Title up="NETWORK" down="DEVELOPER"/>
                <div id="hero-img">
                    <img src={hero_img} alt="hero-img" border="0"/>
                </div>
                <div id="description">
                    <p>I HELP COMPANIES TO BUILD RELIABLE INFRASTRUCTURES</p>
                    <Title up="TRISTAN-MIHAI" down="RADULESCU" alignright={true}/>
                </div>
            </div>
        )
    }
}

export default Hero;
