/* TODO: Make sure each <div> in the footer is its own component to minimize tailwind bloat */

import { DarkModeContext } from "@/app/context";
import { useContext } from "react";

export function Footer() {
        const { darkMode } = useContext(DarkModeContext);

        const className = "text-black dark:text-white divide-gray1 border-t-1 dark:border-t-gray1 border-t-dark4 divide-x-1 min-h-50 flex font-medium justify-between bg-white dark:bg-dark4 pl-[0%] pr-[0%] pt-[2%] pb-[2%] h-[20%]";
        return (
                <div className={darkMode ? className + " dark" : className} >
                        <div className="flex-grow text-center text-top">Item</div>
                        <div className="flex-grow text-center text-top">Item</div>
                        <div className="flex-grow text-center text-top">Item</div>
                        <div className="flex-grow text-center text-top">Item</div>
                </ div>
        );
}
