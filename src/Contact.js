import React from 'react';
import './contact.css';
import AppearingLine from "./AppearingLine";


class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <AppearingLine><p><i>Want to keep in touch ?</i></p></AppearingLine>
                <AppearingLine><p>Send me an email ...</p></AppearingLine>
                <AppearingLine>{this.props.mail}</AppearingLine>
                <AppearingLine><p>... or add me on socials</p></AppearingLine>
                <div id="socials">
                    <AppearingLine><a href="https://www.linkedin.com/in/tristan-mihai-radulescu-917859228/"
                                      target="_blank" rel="noopener noreferrer">LINKEDIN</a></AppearingLine>
                    <AppearingLine><a href="https://github.com/Milou666" target="_blank"
                                      rel="noopener noreferrer">GITHUB</a></AppearingLine>
                    <AppearingLine><a href="https://twitter.com/courtscircuit/" target="_blank"
                                      rel="noopener noreferrer">TWITTER</a></AppearingLine>
                </div>
                <AppearingLine><p>And if you're shy no worries !</p></AppearingLine>
                <Form></Form>
            </div>
        );

    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            text: ''
        }
    }

    handleChangeMail = (event) => {
        this.setState({mail: event.target.value});
    }

    handleChangeText = (event) => {
        this.setState({text: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <InputText type="mail" placeholder="Your mail..." value={this.state.mail}
                           handleChange={this.handleChangeMail.bind(this)}></InputText>
                <InputText type="text" placeholder="Your message..." value={this.state.text}
                           handleChange={this.handleChangeText.bind(this)}></InputText>
                <input type="submit" value="Submit" className="submit-button"></input>
            </form>
        )
    }


}

class InputText extends React.Component {
    handleChange = (event) => {
        this.props.handleChange(event);
    }

    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value}
                   onChange={this.handleChange.bind(this)}></input>
        )
    }
}

export default Contact;