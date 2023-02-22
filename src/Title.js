import React from 'react';
import './title.css';

class Title extends React.Component {

    render() {
        return (
            <div key={this.props.alignright ? Math.random() : null} className={`title ${this.props.alignright ? "right" : ""}`}>
                <span>
                    <h2 className="up">{this.props.up}</h2>
                </span>
                <span>
                    <h2 className="bottom">{this.props.down}</h2>
                </span>
            </div>
        )
    }
}

export default Title;