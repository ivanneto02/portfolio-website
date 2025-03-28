import React from "react";
import { Header, Footer, Content } from "@/app/components";

import { createLowlight, all } from "lowlight";
const lowlight = createLowlight();
lowlight.register({ typescript: all.typescript, applescript: all.applescript });

type Props = {
        children?: React.ReactNode
};

export function Page({ children }: Props) {
        return (
                <div className="bg-dark4 min-h-[100vh] font-[family-name:var(--font-geist-sans)]">
                        <Header />
                        <Content>
                                {children}
                        </Content>
                        <Footer />
                </div>
        );
}
