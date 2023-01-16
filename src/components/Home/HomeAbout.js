import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
    SiCodechef,
    SiCodeforces,
    SiLeetcode,
    SiGithub,
    SiStackoverflow,
} from "react-icons/si";

const HomeAbout = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="flex justify-center h-screen mb-28">
            <div className="flex-col md:flex-row md:w-[95%] lg:w-5/6 flex justify-between items-center">
                <div className="w-1/3 hidden md:block" data-aos="fade-up">
                    <img src="/images/author.JPG" alt="" className="w-full" />
                </div>
                <div
                    className=" relative px-5 sm:px-0 sm:pl-9 w-full md:w-2/3 xl:w-1/2"
                    data-aos="fade-up"
                >
                    <h1 className="pl-9 hidden xl:pl-0 lg:inline z-0 absolute left-0 top-0 h-full w-full text-[10em] leading-[7.5rem]  font-poppins font-extrabold text-[#ffffff14]">
                        ABOUT
                    </h1>
                    <div className="relative lg:p-[3rem] font-poppins text-[#8c8c8c] text-lg z-10">
                        <h2 className="text-white mb-[4rem] text-4xl font-thin">
                            Hi! I'm Yogesh Jangid
                        </h2>
                        <p className="tracking-wide mb-7" data-aos="fade">
                            Self Taught 𝘍𝘶𝘭𝘭 𝘚𝘵𝘢𝘤𝘬 𝘞𝘦𝘣 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 and Competitive
                            Programmer with with 𝟲+ months experience at
                            𝘔𝘦𝘨𝘢𝘴𝘩𝘳𝘦𝘦 𝘈𝘨𝘳𝘪𝘭𝘪𝘧𝘦.
                        </p>
                        <p className="mb-7">
                            <a
                                href="/resume/yogesh_jangid_resume.pdf"
                                target={"__blank"}
                                className="text-[#2f89fc] transition-all duration-300 hover:text-white"
                                data-aos="fade"
                            >
                                Checkout my resume
                            </a>
                        </p>

                        <ul className="flex gap-4 mb-7">
                            <li className="">
                                <a
                                    href="https://leetcode.com/el_harbin/"
                                    className="inline-block bg-[#ffffff0d] rounded-full p-4 sm:p-6 group"
                                >
                                    <SiLeetcode className="text-xl sm:text-2xl text-[#2f89fc] transition-all duration-300 group-hover:text-white" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/yogesh584"
                                    className="inline-block bg-[#ffffff0d] rounded-full p-4 sm:p-6 group"
                                >
                                    <SiGithub className="text-xl sm:text-2xl text-[#2f89fc] transition-all duration-300 group-hover:text-white" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://stackoverflow.com/users/13291215/yogesh"
                                    className="inline-block bg-[#ffffff0d] rounded-full p-4 sm:p-6 group"
                                >
                                    <SiStackoverflow className="text-xl sm:text-2xl text-[#2f89fc] transition-all duration-300  group-hover:text-white" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://codeforces.com/profile/el_harbin"
                                    className="inline-block bg-[#ffffff0d] rounded-full p-4 sm:p-6 group"
                                >
                                    <SiCodeforces className="text-xl sm:text-2xl text-[#2f89fc] transition-all duration-300  group-hover:text-white" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="inline-block bg-[#ffffff0d] rounded-full p-4 sm:p-6 group"
                                >
                                    <SiCodechef className="text-xl sm:text-2xl text-[#2f89fc] transition-all duration-300  group-hover:text-white" />
                                </a>
                            </li>
                        </ul>

                        <h3 className="text-white mb-3">Contact me here! </h3>
                        <p>
                            Email :{" "}
                            <a
                                href="mailto:yjangid584@gmail.com"
                                className="text-[#2f89fc] transition-all hover:text-white"
                            >
                                yjangid584@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
