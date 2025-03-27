import React from "react";
import { Header, Footer, Content } from "@/app/components";

type Props = {
        children?: React.ReactNode
};

export function Page({ children }: Props) {
        return (
                <div className="font-[family-name:var(--font-geist-sans)]">
                        <Header />
                        <Content>
                                {children}
                        </Content>
                        <Footer />
                </div>
        );
}
