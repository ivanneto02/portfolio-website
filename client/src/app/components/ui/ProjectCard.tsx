import React from "react";
import Image from "next/image";

interface PropsType {
    title: string;
    img_src: string;
    date: string;
    description: string;
    href: string;
};

export function ProjectCard(props: PropsType) {
    return (
        <a href={props.href} className="flex no-underline text-black dark:text-white flex-col gap-[3em] content-center lg:flex-row hover:bg-gray-200 dark:hover:bg-dark1 p-[2em] mb-[1em]">
            <div className="lg:min-w-[2em] lg:max-w-[15em] lg:max-h-[15em]">
                <Image className="w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]" width={500} height={500} src={props.img_src} alt="" />
            </div>
            <div>
                <div className="flex flex-row gap-[1em] items-center">
                    <h2 className="p-0 m-0">{props.title}</h2>
                    <p className="p-0 m-0">{props.date}</p>
                </div>
                <p>{props.description}</p>
            </div>
        </a>
    );
}
