import React from "react";
import "./background.css";

class Background extends React.Component{
    render() {
        return(
            <div id="background">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="1.01" result="turbulence"/>
                    </filter>

                    <rect width="100%" height="100%"  filter="url(#noiseFilter)"/>
                </svg>
            </div>
        )
    }
}

export default Background;