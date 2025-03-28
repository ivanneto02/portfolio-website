import React from "react";

type Props = {
        children?: React.ReactNode
};

export function Content({ children }: Props) {
        return (
                <div className="border-t-1 shadow-md bg-dark4 shadow-black border-b-1 border-solid border-y-indigo1 min-h-screen content prose mt-[5%] pb-[5%] pl-[5%] pr-[5%] dark:prose-dark ml-[15%] mr-[15%] mb-[10%]">
                        {children}
                </div>
        );
}
