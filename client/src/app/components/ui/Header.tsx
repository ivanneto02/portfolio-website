import { IoDocumentTextSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HeaderLink } from "@/app/components/";
import { ThemeButton } from "@/app/components/";
import { DarkModeContext } from "@/app/context";
import { useContext } from "react";

export function Header() {

        const darkMode = useContext(DarkModeContext);

        const className = "flex flex-wrap min-h-20 border-b-1 border-b-gray1 dark: border-b-dark4 font-medium justify-between items-center mx-auto max-w-screen-x1 bg-white dark:bg-dark4 h-[10%] pl-[10%] pr-[10%] pt-[1%] pb-[2%]";

        return (
                <div className={darkMode ? className + "dark" : className}>
                        <div><HeaderLink href="https://ivanneto.dev">ivanneto.dev</HeaderLink></div>
                        <div>
                                <ul className="flex gap-7">
                                        <HeaderLink href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing"> <IoDocumentTextSharp /> Resume</HeaderLink>
                                        <HeaderLink href="https://www.linkedin.com/in/ivan-neto/"><FaLinkedin /> Linkedin</HeaderLink>
                                        <HeaderLink href="https://github.com/ivanneto02/"><FaGithub />Github</HeaderLink>
                                </ul>
                        </div>
                        <div><ThemeButton /></div>
                </div>
        );
}
