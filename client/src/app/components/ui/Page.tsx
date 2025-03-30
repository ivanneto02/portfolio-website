import { Header, Footer, Content } from "@/app/components";
import { DarkModeContext } from "@/app/context";

import { createLowlight, all } from "lowlight";
import { useContext } from "react";

const lowlight = createLowlight();
lowlight.register({ typescript: all.typescript, applescript: all.applescript });

interface Props {
        children: React.ReactNode;
}

export function Page({ children }: Props) {

        const { darkMode } = useContext(DarkModeContext);

        const className = "bg-white dark:bg-dark4 min-h-[100vh] font-[family-name:var(--font-geist-sans)] dark:text-white text-black";

        return (
                <div className={darkMode ? className + " dark" : className + ""}>
                        <Header />
                        <Content>
                                {children}
                        </Content>
                        <Footer />
                </div>
        );
}
