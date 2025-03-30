import { DarkModeContext } from "@/app/context";
import React from "react";
import { useContext } from "react";

interface Props {
        children?: React.ReactNode;
};

export function Content({ children }: Props) {

        const { darkMode } = useContext(DarkModeContext);

        const className = "dark:border-t-1 border-t-2 dark:shadow-md shadow-xs dark:bg-dark4 bg-white shadow-black dark:border-b-1 border-b-2 border-solid border-y-indigo1 min-h-screen content prose mt-[5%] pb-[5%] pl-[5%] pr-[5%] dark:prose-dark ml-[15%] mr-[15%] mb-[10%]";

        return (
                <div className={darkMode ? className + " dark" : className}>
                        {children}
                </div>
        );
}
