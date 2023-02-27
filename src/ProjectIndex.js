import React from "react";
import "./projectindex.css";
import AppearingLine from "./AppearingLine";

class ProjectIndex extends React.Component {
    render() {
        const projects = this.props.projects;
        const listProjects = projects.map((project, index) =>
            <a href={"#" + project}  key={index} className="project-link">
                <div className="project-section">

                    <div className="index">
                        <p>{index}</p>
                        <div className="dotted-line"></div>
                    </div>
                    <AppearingLine>
                        <h4>{project}</h4>
                    </AppearingLine>

                </div>
            </a>
        );

        return (
            <div id="project-index">
                <AppearingLine>
                    <h3>{this.props.name}</h3>
                </AppearingLine>
                <div className="project-list">
                    {listProjects}
                </div>
            </div>

        );
    }
}

export default ProjectIndex;