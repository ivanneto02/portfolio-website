import React from "react";
import { Header, Footer } from "@/app/components";

type Props = {
        children?: React.ReactNode
};

export function Page({ children }: Props) {
        return (
                <div className="h-svh text-xl font-[family-name:var(--font-geist-sans)]">
                        <Header />
                        {children}
                        <Footer />
                </div>
        );
}
