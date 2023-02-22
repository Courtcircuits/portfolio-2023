import React from 'react';
import './title.css';
class Title extends React.Component{


    render(){
        return (
            <div className={`title ${this.props.alignright ? "right" : ""}`}>
                <h2 className="up">{this.props.up}</h2>
                <h2 className="bottom">{this.props.down}</h2>
            </div>
        )
    }
}

export default Title;