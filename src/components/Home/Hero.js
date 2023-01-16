/*      REACT IMPORTS        */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const gotoBtn = () => {
        window.scrollTo({
            top: window.innerHeight - 100,
            left: 0,
            behavior: "smooth",
        });
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <div
            className="relative z-10 min-h-screen flex flex-col justify-center items-center"
            id="hero"
        >
            <div className="w-full sm:w-5/6">
                <Slider {...settings}>
                    <div data-aos="fade-up">
                        <div className="w-full flex flex-col items-center gap-5">
                            <p className="text-[#ffffff99] font-poppins tracking-[4px] text-xl uppercase ">
                                Hello! I'M
                            </p>
                            <div>
                                <h1 className="text-white font-poppins tracking-[4px] px-4 text-4xl sm:px-0 sm:text-5xl  font-bold uppercase text-center">
                                    Yogesh Jangid
                                </h1>
                                <span className="text-[#ffffff99] font-poppins tracking-[4px] text-xl hidden sm:inline">
                                    (el_harbin)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col items-center gap-5">
                            <p className="text-[#ffffff99] font-poppins tracking-[4px] text-xl uppercase ">
                                I'M FROM INDIA
                            </p>
                            <div>
                                <h1 className="text-white font-poppins tracking-[4px] px-4 text-4xl sm:px-0 sm:text-5xl  font-bold uppercase text-center">
                                    A WEB DEVLOPER
                                </h1>
                                <span className="text-[#ffffff99] font-poppins tracking-[4px] text-xl  text-center hidden sm:inline">
                                    (full stack)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col items-center gap-5">
                            <p className="text-[#ffffff99] font-poppins tracking-[4px] text-xl uppercase ">
                                I'M A
                            </p>
                            <div>
                                <h1 className="text-white font-poppins tracking-[4px] px-4 text-4xl sm:px-0 sm:text-5xl font-bold uppercase text-center">
                                    competitive programmer
                                </h1>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div
                onClick={gotoBtn}
                className="flex flex-col items-center justify-center gap-2 absolute bottom-20 sm:bottom-3 left-1/2 -translate-x-1/2 cursor-pointer"
            >
                <span className="block h-10 w-5 rounded-2xl border-2 border-white relative">
                    <span className="block w-1 h-1 bg-white mx-auto my-2 absolute top-0 left-1/2 -translate-x-1/2 rounded-full animate-smoothDown"></span>
                </span>
                <span className="uppercase text-[9px] text-white font-poppins tracking-widest ">
                    Scroll
                </span>
            </div>
        </div>
    );
};

export default Hero;
