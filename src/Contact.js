import React from 'react';
import './contact.css';
import AppearingLine from "./AppearingLine";

class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <AppearingLine><p><i>WANT TO KEEP IN TOUCH ?</i></p></AppearingLine>
                <AppearingLine><p>SEND ME AN EMAIL</p></AppearingLine>
                <AppearingLine>{this.props.mail}</AppearingLine>
                <AppearingLine><p>OR ADD ME ON SOCIALS</p></AppearingLine>
                <div id="socials">
                    <AppearingLine><a href="https://www.linkedin.com/in/tristan-mihai-radulescu-917859228/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></AppearingLine>
                    <AppearingLine><a href="https://github.com/Milou666" target="_blank" rel="noopener noreferrer">GITHUB</a></AppearingLine>
                    <AppearingLine><a href="https://twitter.com/courtscircuit/" target="_blank" rel="noopener noreferrer">TWITTER</a></AppearingLine>

                </div>
            </div>
        );

    }
}

export default Contact;