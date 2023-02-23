import React from "react";
import "./projectdescription.css";
import AppearingLine from "./AppearingLine";

class ProjectDescription extends React.Component{

    render() {
        return(
            <div id="project-description">
                <div>
                    <h3>{this.props.name}</h3>
                    <AppearingLine>{this.props.children}</AppearingLine>
                </div>
                <div>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
            </div>
        )
    }
}

export default ProjectDescription;