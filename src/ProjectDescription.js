import React from "react";
import "./projectdescription.css";
import AppearingLine from "./AppearingLine";
import AppearingImage from "./AppearingImage";

class ProjectDescription extends React.Component {

    render() {
        return (
            <div id={this.props.link}>
                <div id="project-description">
                    <div id="infos">
                        <h3 onClick={this.props.handleClick}>{this.props.name}</h3>
                        <AppearingLine>{this.props.children}</AppearingLine>
                    </div>
                    <div onClick={this.props.handleClick}>

                        <AppearingImage text="See more !" path={this.props.image} alt={this.props.name} direction="right"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDescription;