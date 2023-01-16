import React from "react";

import {
    SiCodechef,
    SiCodeforces,
    SiLeetcode,
    SiGithub,
    SiStackoverflow,
} from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-[#000000] text-white font-poppins">
            <footer className="p-7">
                <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
                    <div>
                        <p className="capitalize text-3xl">
                            Let's work together on your next project
                        </p>
                    </div>

                    <ul className="flex items-center gap-4">
                        <li className="">
                            <a
                                href="https://leetcode.com/el_harbin/"
                                className="inline-block bg-[#ffffff0d] rounded-full p-4"
                            >
                                <SiLeetcode className="text-lg text-[#2f89fc] transition-all hover:text-white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/yogesh584"
                                className="inline-block bg-[#ffffff0d] rounded-full p-4"
                            >
                                <SiGithub className="text-lg text-[#2f89fc] transition-all hover:text-white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://stackoverflow.com/users/13291215/yogesh"
                                className="inline-block bg-[#ffffff0d] rounded-full p-4"
                            >
                                <SiStackoverflow className="text-lg text-[#2f89fc] transition-all hover:text-white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://codeforces.com/profile/el_harbin"
                                className="inline-block bg-[#ffffff0d] rounded-full p-4"
                            >
                                <SiCodeforces className="text-lg text-[#2f89fc] transition-all hover:text-white" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="inline-block bg-[#ffffff0d] rounded-full p-4"
                            >
                                <SiCodechef className="text-lg text-[#2f89fc] transition-all hover:text-white" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            <div
                id="lowerfooter"
                className="p-7 border-t-[1px] border-t-[#ffffff0d]"
            >
                <p className="capitalize">
                    {" "}
                    &#169; 2023, YJ. Don't Hesitate to reach out.
                </p>
            </div>
        </div>
    );
};

export default Footer;
