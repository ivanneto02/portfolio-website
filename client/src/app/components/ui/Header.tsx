import { IoDocumentTextSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HeaderLink } from "@/app/components/";
import { ThemeButton } from "@/app/components/";
import { DarkModeContext } from "@/app/context";
import { FaArrowLeft } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { useContext } from "react";
import Image from "next/image";

export function Header() {

    const darkMode = useContext(DarkModeContext);

    const className = "header flex flex-col lg:flex-row lg:divide-gray-0 lg:divide-y-0 divide-gray1 lg:flex-wrap min-h-20 lg:border-b-1 lg:dark:border-b-gray1 lg:border-b-dark4 font-medium justify-between gap-3 lg:items-center mx-auto max-w-screen-x1 bg-white dark:bg-dark4 h-[10%] pl-[5%] pr-[5%] pt-[1%] lg:pb-[1%] mb-[2%] mt-[2%]";

    return (
        <div className={darkMode ? className + "dark" : className}>
            <div className="pb-[3%] lg:pb-[0%]"><HeaderLink href="https://ivanneto.dev"><FaArrowLeft /><Image width={100} height={100} className="w-10 h-10 rounded-full" src="/favicon.ico" alt="Rounded avatar"></Image>ivanneto.dev</HeaderLink></div>
            <div><HeaderLink href="/"><HiHome />Home</HeaderLink></div>
            <div className="lg:pb-[0%]"><ul className="flex gap-7 flex-row">
                <HeaderLink href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing"> <IoDocumentTextSharp /> Resume</HeaderLink>
                <HeaderLink href="https://www.linkedin.com/in/ivan-neto/"><FaLinkedin /> Linkedin</HeaderLink>
                <HeaderLink href="https://github.com/ivanneto02/"><FaGithub />Github</HeaderLink>
            </ul></div>
            <div className="pb-[3%] lg:pb-[0%]"><ThemeButton /></div>
        </div >
    );
}
