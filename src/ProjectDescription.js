import React from "react";
import "./projectdescription.css";
import AppearingLine from "./AppearingLine";
import AppearingImage from "./AppearingImage";

class ProjectDescription extends React.Component {

    render() {
        const tags = this.props.tags.map((tag, index) => <div key={index} className="tag">
            <AppearingLine>
                <p>{tag}</p>
            </AppearingLine>
        </div>);

        return (
            <div id={this.props.link}>
                <div id="project-description">
                    <div id="infos">
                        <h3 onClick={this.props.handleClick}>{this.props.name}</h3>
                        <div id="tags">
                            {tags}
                        </div>
                        <AppearingLine>{this.props.children}</AppearingLine>

                    </div>

                    <div onClick={this.props.handleClick} id="illustration">

                        <AppearingImage text="See more !" path={this.props.image} alt={this.props.name}
                                        direction="right"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDescription;