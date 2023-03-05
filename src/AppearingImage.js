import React from 'react';

import {InView} from "react-intersection-observer";


import "./appearingimage.css";

function AppearingImage(props){
    const [state, setState] = React.useState({inView: false, mouseOn:false, x:0, y:0});

    const setInView = (inView, entry) => {
        setState({inView: inView, mouseOn: state.mouseOn, x: state.x, y: state.y});
    }



    const handleMouseMove = (e) => {
        setState({inView: true, mouseOn:true, x: e.clientX,y: e.clientY});
    }

    const handleMouseLeave = (e) => {
        setState({inView: true, mouseOn:false, x: e.clientX, y: e.clientY});
    }

    let className;

    if(props.direction==="right"){
        if(state.inView){
            className = "hideImageRight overflow image";
        }else{
            className = "resetImageRight overflow image";
        }
    }else{
        if(state.inView){
            className = "hideImageLeft image";
        }else{
            className = "resetImageLeft image";
        }
    }

    return (
        <span>
            <InView triggerOnce={true} onChange={setInView} threshold={0.3}>
                <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className}>
                    <img src={props.path} alt={props.alt}/>
                    {state.mouseOn ? <div id="cursor" style={{ position:"fixed", left:state.x+"px", top:state.y+"px", transform:" translate(-50%, -50%)"}}><p>{props.text}</p></div> : null}
                </div>
            </InView>
        </span>
    );

}

export default AppearingImage;