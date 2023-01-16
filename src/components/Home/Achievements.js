/*      REACT IMPORTS        */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Achievements = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="flex justify-center min-h-fit text-[#8c8c8c] font-poppins mb-56 md:mb-40">
            <div className=" w-5/6 flex flex-col ">
                {/* Heading */}
                <div
                    className="flex flex-col items-center pb-12"
                    data-aos="fade-up"
                >
                    <p className="tracking-[5px]">PORTFOLIO</p>
                    <h1 className="text-white text-[40px] font-bold  text-center">
                        Achivements
                    </h1>
                </div>

                <div
                    className="flex justify-between gap-16 text-center flex-row flex-wrap"
                    data-aos="fade-up"
                >
                    <div className="mx-auto">
                        <strong className="text-6xl md:text-5xl text-[#2f89fc] relative">
                            250
                            <span className="relative -top-3 font-normal text-4xl text-white">
                                +
                            </span>
                        </strong>
                        <h2 className="capitalize tracking-wide ">
                            Leetcode Questions
                        </h2>
                    </div>
                    <div className="mx-auto">
                        <strong className="text-5xl text-[#2f89fc]">
                            885
                            <span className="relative -top-3 font-normal text-4xl text-white">
                                +
                            </span>
                        </strong>
                        <h2 className="capitalize tracking-wide ">
                            Codeforces Rating
                        </h2>
                    </div>
                    <div className="mx-auto">
                        <strong className="text-5xl text-[#2f89fc]">
                            250
                            <span className="relative -top-3 font-normal text-4xl text-white">
                                +
                            </span>
                        </strong>
                        <h2 className="capitalize tracking-wide ">
                            Leetcode Questions
                        </h2>
                    </div>
                    <div className="mx-auto">
                        <strong className="text-5xl text-[#2f89fc]">
                            885
                            <span className="relative -top-3 font-normal text-4xl text-white">
                                +
                            </span>
                        </strong>
                        <h2 className="capitalize tracking-wide ">
                            Codeforces Rating
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
