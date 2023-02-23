import React from 'react';

const useElementOnScreen = (options) => {

    const containerRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState({'visible' :false, 'timeSeen':0});


    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible({'visible' :entry.isIntersecting, 'timeSeen':1});
    }

    React.useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options);
        if(containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if(containerRef.current) {
                observer.unobserve(containerRef.current);

            }
        }
    }, [containerRef, options]);

    return [containerRef, isVisible];
}

export default useElementOnScreen;

