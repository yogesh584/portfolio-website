import React from "react";
import HomeAbout from "../Home/HomeAbout";

const Resume = () => {
    return (
        <div>
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
                {/* Heading */}
                <div
                    className="flex flex-col items-center pb-12"
                    data-aos="fade-up"
                >
                    <p className="tracking-[5px] mb-3 uppercase text-[#8c8c8c]">
                        RESUME
                    </p>
                    <h1 className="text-white font-poppins tracking-[4px] px-4 text-3xl sm:px-0 sm:text-4xl  font-bold uppercase text-center">
                        Hello! I'm Yogesh Jangid
                    </h1>
                </div>
            </div>
            <div>
                <HomeAbout />
                <div
                    className="relative w-full px-5 md:px-0 md:w-4/6 mx-auto font-poppins z-10 text-white"
                    data-aos="fade-up"
                >
                    <div className="w-full mb-20">
                        <h2 className="text-[32px] font-light mb-4">Profile</h2>
                        <h3 className="text-xl mb-5">
                            I'm Self Taught 𝘍𝘶𝘭𝘭 𝘚𝘵𝘢𝘤𝘬 𝘞𝘦𝘣 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳,
                            Competitive Programmer and Educator.
                        </h3>
                        <p className="text-lg text-[#8c8c8c] mb-5 tracking-wide leading-8 capitalize">
                            Hello, I am Yogesh Jangid, I have complete my
                            Bachelor of Science from Raj Rishi Collage, Alwar, I
                            am Skilled in React JS and good knowledge of C++ and
                            Python. I am a full stack Devloper with 6+ Months
                            Experience at Mega shree Agrilife.
                        </p>
                        <div className="text-lg">
                            <p className="mb-2">
                                Name:{" "}
                                <span className="text-[#8c8c8c]">
                                    Yogesh Jangid
                                </span>
                            </p>
                            <p className="mb-2">
                                Email:{" "}
                                <span className="text-[#8c8c8c]">
                                    yjangid584@gmail.com
                                </span>
                            </p>
                            <p className="mb-2">
                                Linkedin:{" "}
                                <span className="text-[#8c8c8c]">
                                    jangidYogesh
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full mb-20 mt-10" data-aos="fade-up">
                        <h2 className="text-[32px] font-light mb-4">
                            Experience
                        </h2>
                        <ul>
                            <li className="flex flex-col gap-3 sm:flex-row sm:gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div>
                                    <p className="text-xl mb-2 capitalize">
                                        Computer Science Teacher -
                                        <span className="text-[#8c8c8c]">
                                            &nbsp;Karmsthali institute
                                        </span>
                                    </p>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Alwar - Rajasthan
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Sept 2020 - Present
                                    </p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 sm:flex-row sm:gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div>
                                    <p className="text-xl mb-2 capitalize">
                                        Full Stack Web Devloper (PHP) -
                                        <span className="text-[#8c8c8c]">
                                            &nbsp;MegaShree Agrilife
                                        </span>
                                    </p>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Alwar - Rajasthan
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Sept 2020 - Feb 2021
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full mb-20 mt-10" data-aos="fade-up">
                        <h2 className="text-[32px] font-light mb-4">
                            Education
                        </h2>
                        <ul>
                            <li className="flex gap-3 flex-col sm:flex-row sm:gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div>
                                    <p className="text-xl mb-2 capitalize">
                                        Bachlor's Of Science -
                                        <span className="text-[#8c8c8c]">
                                            &nbsp;Raj Rishi Collage
                                        </span>
                                    </p>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Alwar - Rajasthan
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Jul 2019 - Jul 2022
                                    </p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 sm:flex-row sm:gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div>
                                    <p className="text-xl mb-2 capitalize">
                                        Senior Secondary (Science) -
                                        <span className="text-[#8c8c8c]">
                                            &nbsp;Spectrum Sr. Sec. School
                                        </span>
                                    </p>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Alwar - Rajasthan
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[#8c8c8c] capitalize">
                                        Jul 2018 - Jul 2019
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full mb-20 mt-10" data-aos="fade-up">
                        <h2 className="text-[32px] font-light mb-4">
                            Projects
                        </h2>
                        <ul>
                            <li className="py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div className="flex gap-10 justify-between">
                                    <div>
                                        <p className="text-xl mb-2 capitalize">
                                            INoteBook
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[#8c8c8c] capitalize">
                                            <a href="https://github.com/yogesh584/iNoteBook">
                                                Github Link
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#8c8c8c] capitalize">
                                    A Simple tool to organize notes with
                                    description and tags. Created using{" "}
                                    <strong>ReactJS</strong>,{" "}
                                    <strong>NodeJS</strong>,{" "}
                                    <strong>MongoDB</strong> and{" "}
                                    <strong> Express </strong>. Project Has
                                    mainly Two functionality{" "}
                                    <strong>User Authorization</strong>
                                    and{" "}
                                    <strong>Add, Delete and Edit Notes </strong>
                                    .
                                </p>
                            </li>
                            <li className="py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div className="flex gap-10 justify-between">
                                    <div>
                                        <p className="text-xl mb-2 capitalize">
                                            News Monkey
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[#8c8c8c] capitalize">
                                            <a href="https://github.com/yogesh584/NewsMonkey">
                                                Github Link
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#8c8c8c] capitalize">
                                    Build a project that get news from News API
                                    and display to user. Entire Project built
                                    with React, HTML, Tailwind CSS. .
                                </p>
                            </li>
                            <li className="py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <div className="flex gap-10 justify-between">
                                    <div>
                                        <p className="text-xl mb-2 capitalize">
                                            Disney Plus Clone
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[#8c8c8c] capitalize">
                                            <a href="https://github.com/yogesh584/Disney-Plus-Clone">
                                                Github Link
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#8c8c8c] capitalize">
                                    This is Clone Built of Website Disney Plus.
                                    Created with React, Tailwind CSS.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full mb-20 mt-10" data-aos="fade-up">
                        <h2 className="text-[32px] font-light mb-4">
                            Certificates
                        </h2>
                        <div className="flex flex-col sm:flex-row">
                            <ul className="w-full sm:w-1/2 ">
                                <li className="flex gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a] ">
                                    <a href="https://drive.google.com/file/d/1hvYW1pwUkIr_IHf8zp5J0Sr4oLJFN-sL/view">
                                        Python Certification from udemy
                                    </a>
                                </li>
                                <li className="flex gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                    <a href="https://www.sololearn.com/certificates/CT-M4J6DQMY">
                                        HTML Certification from Solo Learn
                                    </a>
                                </li>
                                <li className="flex gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                    <a href="https://www.sololearn.com/certificates/CT-X0XTEHPD">
                                        CSS Certification from Solo Learn
                                    </a>
                                </li>
                            </ul>
                            <ul className="w-full sm:w-1/2">
                                <li className="flex gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                    <a href="https://www.sololearn.com/certificates/CT-X0XTEHPD">
                                        C Certification from Solo Learn
                                    </a>
                                </li>
                                <li className="flex gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                    <a href="https://www.sololearn.com/certificates/CT-TYGJF1VL">
                                        JavaScript Certification from Solo Learn
                                    </a>
                                </li>
                                <li className="flex gap-10 justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                    <a href="https://www.sololearn.com/certificates/CT-MICKR1OK">
                                        PHP Certification from Solo Learn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mb-20 mt-10" data-aos="fade-up">
                        <h2 className="text-[32px] font-light mb-4">
                            Technical Skills
                        </h2>
                        <ul className=" ">
                            <li className="flex gap-3 sm:gap-10 flex-col sm:flex-row justify-between py-6 border-y-[1px] border-y-[#1a1a1a] ">
                                <span>Languages</span>
                                <span>
                                    Python, C/C++, PHP, SQL, JavaScript,
                                    HTML/CSS
                                </span>
                            </li>
                            <li className="flex gap-3 sm:gap-10 flex-col sm:flex-row justify-between py-6 border-y-[1px] border-y-[#1a1a1a]">
                                <span>Technologies/Libraries/Frameworks</span>
                                <span>ReactJS, Linux</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
