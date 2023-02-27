import React from 'react';
import './projectdetail.css';
import AppearingLine from "./AppearingLine";

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            focus: false
        }

        this.screens = this.props.screenshots.map((screenshot) => {
            return React.createRef();
        });
    }

    handleClick = (e) => {
        e.preventDefault();

        this.props.handleClick();
    }

    selectScreenshot = (e) => {
        this.setState({
            index: parseInt(e.target.innerHTML) - 1,
            focus: true

        });
    }

    selectScreenshotById = (id) => {
        this.setState({index: id, focus: true});
    }

    focusOnDescription = () => {
        this.setState({index: 0, focus: false});
    }


    render() {
        let sum = 0;
        for(let i=0; i< this.state.index; i++){
            sum += this.screens[i].current.offsetWidth;
            sum+=20;
        }
        const transformProperty = "translateX(-" + sum + "px)";
        const transitionProperty = "transform " + 0.2 + "s ease";

        return (
            <div id="project-detail"
                 style={{backgroundColor: this.props.color.background, color: this.props.color.color}}
                 className="appear_background">
                <div id="header">
                    <ul>
                        <li className="appear_slow_line" onClick={this.focusOnDescription.bind(this)}>
                            <u>{this.props.name}</u></li>
                        <li className="appear_slow_line">{this.props.link}</li>
                        <li className="appear_slow_line">{this.props.category}</li>
                    </ul>
                    <div id="close">
                        <a href="#" style={{color: this.props.color.color}} className="appear_slow_line"
                           onClick={this.handleClick}>Back</a>
                    </div>
                </div>
                <div id="content">
                    <div id="description" className={this.state.focus ? "hide_description" : "appear_opacity"}>
                        <div id="text-description">
                            <p>
                                {this.props.children}
                            </p>
                        </div>
                        <div id="details">
                            <ul>
                                <li style={{borderTop: "1px solid" + this.props.color.color}}>
                                    <p>Role</p>
                                    <p>{this.props.role}</p>
                                </li>
                                <li style={{borderTop: "1px solid" + this.props.color.color}}>
                                    <p>Year</p>
                                    <p>{this.props.year}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="screenshots" className={this.state.focus ? "focus" : "unfocus"}>
                        <div id="screenshot-container">
                            <ul style={{transform: transformProperty, transition: transitionProperty}}
                                ref={this.screenContainer}>
                                {this.props.screenshots.map((screenshot, index) =>
                                    <li className="appear_slow_line" key={index} ref={this.screens[index]}
                                        onClick={this.selectScreenshotById.bind(this, index)}>
                                        <span>
                                            <h4 className={index === this.state.index ? "fullFocus" : "halfFocus"}
                                                key={Math.random()}>{this.props.screenshots[index].name}</h4>
                                        </span>
                                        <img className={index === this.state.index ? "fullFocus" : "halfFocus"}
                                             src={screenshot.image} alt={screenshot.name}/>
                                    </li>)}
                            </ul>
                        </div>


                        <SelectScreen select={this.state.index} handleClick={this.selectScreenshot}
                                      screenshots={this.props.screenshots}/>

                    </div>
                </div>
            </div>
        )
    }
}

class SelectScreen extends React.Component {

    handleClick = (e) => {
        this.props.handleClick(e);
    }

    render() {
        let className = "appear_slow_line";

        return (
            <div id="select-screen">
                <ol>
                    {this.props.screenshots.map((screenshot, index) => <li key={index} onClick={this.props.handleClick}
                                                                           className={this.props.select === index ? "appear_slow_line selected" : "appear_slow_line"}>{index + 1}</li>)}
                </ol>
            </div>
        );
    }
}

export default ProjectDetail;