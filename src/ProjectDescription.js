import React from "react";
import "./projectdescription.css";
import AppearingLine from "./AppearingLine";

class ProjectDescription extends React.Component{

    render() {
        return(
            <div id="project-description">
                <div>
                    <h3 onClick={this.props.handleClick}>{this.props.name}</h3>
                    <AppearingLine>{this.props.children}</AppearingLine>
                </div>
                <div onClick={this.props.handleClick}>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        )
    }
}

export default ProjectDescription;