import React from "react";

import "./footer.css";
import AppearingLine from "./AppearingLine";


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div>
                    <AppearingLine><p>Tristan-Mihai Radulescu</p></AppearingLine>
                    <AppearingLine><p>Fullstack developper</p></AppearingLine>
                </div>
                <div>
                    <AppearingLine>
                        <p>Design inspired from :</p>
                        <a href="https://www.richardekwonye.com">Richard Ekwonye's portfolio</a>
                    </AppearingLine>
                </div>
                <div>
                    <AppearingLine><a href="https://www.linkedin.com/in/tristan-mihai-radulescu-917859228/"
                                      target="_blank" rel="noopener noreferrer">LINKEDIN</a></AppearingLine>
                    <AppearingLine><a href="https://github.com/Milou666" target="_blank"
                                      rel="noopener noreferrer">GITHUB</a></AppearingLine>
                    <AppearingLine><a href="https://twitter.com/courtscircuit/" target="_blank"
                                      rel="noopener noreferrer">TWITTER</a></AppearingLine>
                </div>
            </div>
        )
    }
}

export default Footer;