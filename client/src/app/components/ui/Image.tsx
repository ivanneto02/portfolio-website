"use client"

import { default as NextImage } from "next/image";

type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

/* Wrapper for NextJS image with Tailwind styles */
export function Image(props: ImageProps) {

    return (
        <NextImage className="object-cover h-[100%] w-[100%]" src={props.src} width={props.width} height={props.height} alt={props.alt} />
    );
}

