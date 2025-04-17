"use client"

import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
    delay: string; // in milliseconds
}

/* Pass in a delay to make the feature appear delay milliseconds after
 * being mounted. */
export function Feature(props: Props) {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setLoaded(true), parseInt(props.delay));
        return () => clearTimeout(timeout); // in case component gets unmounted
    }, [props.delay]);

    var className = "p-0 m-0 transition ease-in-out";

    return (
        <div className={loaded ? className + " opacity-100 scale-100" : className + " opacity-0 scale-125"}>
            {props.children}
        </div>
    );
}

