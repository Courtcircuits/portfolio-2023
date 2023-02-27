import React from 'react';

import {InView} from "react-intersection-observer";

function AppearingLine(props) {
    const [inView, setInView] = React.useState(false);

    let className;

    if (inView) {
        className = "hide";

    } else {
        className = "reset";
    }

    return (
        <span>
            <InView triggerOnce={true} onChange={setInView}>
                <div className={className}>{props.children}</div>
            </InView>
        </span>
    )

}

export default AppearingLine;