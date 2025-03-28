/* TODO: Make sure each <div> in the footer is its own component to minimize tailwind bloat */
export function Footer() {
        return (
                <div className="divide-gray1 border-t-1 border-t-gray1 divide-x-2 min-h-50 flex font-medium justify-between bg-dark4 pl-[0%] pr-[0%] pt-[2%] pb-[2%] h-[20%]">
                        <div className="flex-grow text-center text-top">Item</div>
                        <div className="flex-grow text-center text-top">Item</div>
                        <div className="flex-grow text-center text-top">Item</div>
                        <div className="flex-grow text-center text-top">Item</div>
                </div>
        );
}
