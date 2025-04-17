"use client"

import React, { useState, isValidElement, useEffect } from "react";

type Props = {
    cols: string;
    children: React.ReactNode;
    delay: string;
}

type FeatureProps = {
    delay: string;
    className: string;
}

export function FeatureGrid(props: Props) {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setLoaded(true), parseInt(props.delay));
        return () => clearTimeout(timeout); // in case component gets unmounted
    }, [props.delay]);

    /* We need this logic due to how TailwindCSS applies
     * styles...*/
    let cols = "";
    switch (props.cols) {
        case "1": cols = "lg:grid-cols-1"; break;
        case "2": cols = "lg:grid-cols-2"; break;
        case "3": cols = "lg:grid-cols-3"; break;
        case "4": cols = "lg:grid-cols-4"; break;
        default: cols = "lg:grid-cols-2"; break;
    }

    const className = `m-0 mb-4 p-0 grid grid-cols-1 gap-4 ${cols}`;

    return (
        <div className={loaded ? className + " opacity-100 scale-100" : className + " opacity-0 scale-125"}>
            {
                React.Children.map(props.children, (child, index) => {
                    if (isValidElement<FeatureProps>(child)) {
                        return React.cloneElement(child, { key: index, delay: (parseInt(props.delay) + parseInt(child.props.delay)).toString(), className: "object-cover h-[100%] w-[100%]" });
                    }
                    return child;
                })
            }
        </div >
    );
}

