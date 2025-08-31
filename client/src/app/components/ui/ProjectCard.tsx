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
        <a href={props.href} className="flex bg-gray-100 dark:bg-indigo-950 rounded items-center no-underline text-black flex-wrap lg:flex-nowrap dark:text-white flex-row lg:flex-col gap-[1em] lg:gap-[3em] lg:flex-row hover:bg-gray-200 dark:hover:bg-dark1 p-[1em] mb-[1em] lg:h-[100px]">
            <div className="w-20 m-0 items-center lg:min-w-[2em] lg:max-w-[15em] lg:max-h-[15em]">
                <Image className="w-[100%] lg:w-[100%] lg:h-[100%]" width={500} height={500} src={props.img_src} alt="" />
            </div>
            <div className="w-60 lg:w-100 m-0 self-start">
                <div className="flex flex-col p-0 m-0 lg:flex-row gap-[1em] items-start lg:items-center">
                    <h3 className="p-0 m-0">{props.title}</h3>
                    <p className="p-0 m-0">{props.date}</p>
                </div>
            </div>
            <div className="w-100 m-0 lg:w-200 flex-stretch">
                <p className="m-0 text-lg">{props.description}</p>
            </div>
        </a>
    );
}
