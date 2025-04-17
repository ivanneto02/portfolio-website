"use client"

type Props = {
    cols: string;
    children: React.ReactNode;
}

export function ImageGrid(props: Props) {

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

    return (
        <div className={`grid ${cols} grid-cols-1 gap-4`}>
            {props.children}
        </div >
    );
}
