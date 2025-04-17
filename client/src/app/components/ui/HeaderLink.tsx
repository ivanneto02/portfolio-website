import React from "react";

interface Props {
    children: React.ReactNode;
    href: string;
    target?: string;
}

export function HeaderLink({ children, href, target }: Props) {

    return (
        <a className="text-black dark:text-white no-underline cursor-pointer flex items-center gap-1" href={href} target={target ? target : "_blank"} rel="noreferrer">{children}</a>
    );
} 

