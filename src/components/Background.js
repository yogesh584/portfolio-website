import React from "react";

const Background = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen z-0 text-white">
            <div className="w-5/12 border-[1px] border-[#ffffff0d] h-3/5 rotate-[20deg] fixed bottom-0 -translate-x-1/2 translate-y-1/2"></div>
            <div className=" z-0 w-5/12 border-[1px] border-[#ffffff0d] h-4/5 rotate-[20deg] fixed right-0 translate-x-[80%] lg:translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
};

export default Background;
