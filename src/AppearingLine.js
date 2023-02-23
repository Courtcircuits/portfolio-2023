import React from 'react';

import useElementOnScreen from './UseElementOnScreen';


function AppearingLine(props) {
    const [containerRef, isVisible] = useElementOnScreen({root: null, rootMargin: "0px", threshold: 0.5});


    return (
        <span ref={containerRef}>
            <div className={isVisible ? "hide" : "reset"}>{props.children}</div>
        </span>
    )

}

export default AppearingLine;