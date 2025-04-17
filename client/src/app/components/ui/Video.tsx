"use client"

type VideoProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
};

/* Wrapper for HTML video with Tailwind styles */
export function Video(props: VideoProps) {
    return (
        <video className="object-cover h-[100%] w-[100%]" src={props.src} width={props.width} height={props.height} autoPlay muted loop />
    );
}
