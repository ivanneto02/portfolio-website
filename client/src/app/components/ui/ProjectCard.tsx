import React from "react";
import Image from "next/image";

interface Props {
    children: React.ReactNode;
    name: string;
    href: string;
    description: string;
}

export function ProjectCard(props: Props) {
    return (
        <div className="flex flex-col gap-[1em] content-center lg:flex-row">
            <div>
                <Image className="w-[100%] h-[100%]" width={100} height={100} src="/favicon.ico" alt={props.name} />
            </div>
            <div>
                <h4>{props.name}</h4>
                <p>Description: {props.description}</p>
            </div>
        </div>
    );
}
