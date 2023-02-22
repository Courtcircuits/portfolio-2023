import React from "react";
import "./projectindex.css";

class ProjectIndex extends React.Component {
  render(){
      const projects = this.props.projects;
      const listProjects = projects.map((project, index) =>
          <div className="project-section" key={index}>
              <div className="index">
                  <p>{index}</p>
                  <div className="dotted-line"></div>
              </div>

              <h4>{project}</h4>
          </div>
      );

    return(
        <div id="project-index">
            <h3>{this.props.name}</h3>
            <div className="project-list">
                {listProjects}
            </div>
        </div>

    );
  }
}

export default ProjectIndex;