/* TODO: Make sure each <div> in the footer is its own component to minimize tailwind bloat */

import { DarkModeContext } from "@/app/context";
import { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FooterLink } from "./FooterLink";


export function Footer() {
        const { darkMode } = useContext(DarkModeContext);

        const className = "text-black dark:text-white divide-gray1 border-t-1 dark:border-t-gray1 border-t-dark4 divide-x-1 min-h-50 flex font-medium justify-between bg-white dark:bg-dark4 pl-[0%] pr-[0%] pt-[2%] pb-[2%] h-[20%]";
        return (
                <div className={darkMode ? className + " dark" : className} >
                        <div className="flex-grow text-center text-top">
                                <h6>Contact Information</h6>
                                <div className="flex flex-col items-left pl-[15%] gap-1">
                                        <FooterLink href="mailto:ivanbatallon1@gmail.com"><MdEmail />ivanbatallon1@gmail.com</FooterLink>
                                        <FooterLink href="https://www.ucr.edu/"><IoSchool />University of California, Riverside</FooterLink>
                                        <FooterLink href="https://www.google.com/maps/place/riverside+ca/data=!4m2!3m1!1s0x80dca6df7ff47dbb:0xf7a1d705135e0ae8?sa=X&ved=1t:155783&ictx=111"><FaMap />Riverside, CA</FooterLink>
                                        <FooterLink href="https://www.engr.ucr.edu/"><RiComputerFill />Computer Science</FooterLink>
                                </div>
                        </div>
                        <div className="flex-grow text-center text-top">
                                <h6>Tech Stack</h6>
                                <div className="flex flex-col items-left pl-[15%] gap-1">
                                        <FooterLink href="https://www.typescriptlang.org/"><SiTypescript />Typescript</FooterLink>
                                        <FooterLink href="https://nextjs.org/"><RiNextjsFill />Nextjs</FooterLink>
                                        <FooterLink href="https://react.dev/"><RiReactjsLine />Reactjs</FooterLink>
                                        <FooterLink href="https://tailwindcss.com/"><RiTailwindCssFill />TailwindCSS</FooterLink>
                                        <FooterLink href="https://www.netlify.com/"><SiNetlify />Netlify</FooterLink>
                                </div>
                        </div>
                        <div className="flex-grow text-center text-top">
                                <h6>Other work</h6>
                                <div className="flex flex-col items-left pl-[15%] gap-1">
                                        <FooterLink href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing"><IoDocumentTextSharp />Resume</FooterLink>
                                        <FooterLink href="https://www.linkedin.com/in/ivan-neto/"><FaLinkedin />Linkedin</FooterLink>
                                        <FooterLink href="https://github.com/ivanneto02/"><FaGithub />Github</FooterLink>
                                </div>
                        </div>
                </ div >
        );
}
