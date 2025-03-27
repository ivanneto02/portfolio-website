import React from "react";

type Props = {
        children?: React.ReactNode
};

export function Content({ children }: Props) {
        return (
                <div className="content prose dark:prose-dark h-[95%] mt-[5%] ml-[20%] mr-[20%] h-[95%]">
                        {children}
                </div>
        );
}
