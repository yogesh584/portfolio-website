import React, { useEffect, useState } from "react";

const ProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-[4px] sm:h-[2px]">
            <div
                className="h-full rounded-full bg-[#2f89fc]"
                style={{ width: `${scrollTop}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
