import React from "react";
import logo from './images/mihai.png';
import './menu.css'

class Menu extends React.Component {
    render() {
        return (

                <div id="menu">
                    <div id="menu-content">
                    <img src={logo} alt="Mihai"/>
                    <ul>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>

        )
    }
}

export default Menu;