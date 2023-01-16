import React from "react";
import { RiArrowUpLine } from "react-icons/ri";

const TopScroller = () => {
    const gotoBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <div
            onClick={gotoBtn}
            className="fixed bottom-6 right-7 rounded-full p-4 border-[1px] transition-all duration-300 border-white cursor-pointer group hover:bg-white"
        >
            <RiArrowUpLine className="text-white transition-all duration-300 group-hover:text-black" />
        </div>
    );
};

export default TopScroller;
