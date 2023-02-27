import React from 'react';

import {InView} from "react-intersection-observer";


function AppearingImage(props){
    const [inView, setInView] = React.useState(false);

    let className;

    if(props.direction==="right"){
        if(inView){
            className = "hideImageRight";
        }else{
            className = "resetImageRight";
        }
    }else{
        if(inView){
            className = "hideImageLeft";
        }else{
            className = "resetImageLeft";
        }
    }

    return (
        <span>
            <InView triggerOnce={true} onChange={setInView} threshold={0.3}>
                <div className={className}>
                    <img src={props.path} alt={props.alt}/>
                </div>
            </InView>
        </span>
    );

}

export default AppearingImage;