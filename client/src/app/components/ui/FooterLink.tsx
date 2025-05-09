import React from "react";

interface Props {
        children: React.ReactNode;
        href: string;
}

export function FooterLink({ children, href }: Props) {
        return (
                <a className="hover:text-indigo1 dark:hover:text-indigo1 text-black dark:text-white cursor-pointer no-underline flex items-center gap-1" href={href} target="_blank" rel="noreferrer">{children}</a>
        );
}

