import React from 'react';
import './projectdetail.css';

class ProjectDetail extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.handleClick();
    }



    render() {
        return (
            <div id="project-detail" className="appear_background">
                <div id="header">
                    <ul>
                        <li className="appear_slow_line"><u>{this.props.name}</u></li>
                        <li className="appear_slow_line">{this.props.link}</li>
                        <li className="appear_slow_line">{this.props.category}</li>
                    </ul>
                    <div id="close">
                        <a href="#" className="appear_slow_line" onClick={this.handleClick}>Back</a>
                    </div>
                </div>
                <div id="content">
                    <div id="description" className="appear_opacity">
                        <div id="text-description">
                            <p>
                                {this.props.children}
                            </p>
                        </div>
                        <div id="details">
                            <ul>
                                <li>
                                    <p>Role</p>
                                    <p>{this.props.role}</p>
                                </li>
                                <li>
                                    <p>Year</p>
                                    <p>{this.props.year}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="screenshots" >
                        <ul>
                            {this.props.screenshots.map((screenshot, index) => <li className="appear_slow_line"  key={index}><img src={screenshot}
                                                                                                    alt=""/></li>)}
                        </ul>
                        <ol>
                            {this.props.screenshots.map((screenshot, index) => <li key={index} className="appear_slow_line">{index + 1}</li>)}

                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetail;