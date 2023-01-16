/*      REACT IMPORTS        */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Project from "./Project";

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="flex justify-center min-h-screen text-[#8c8c8c] font-poppins mb-56 md:mb-28">
            <div className="w-[95%] lg:w-5/6 flex flex-col ">
                {/* Heading */}
                <div
                    className="flex flex-col items-center pb-12"
                    data-aos="fade-up"
                >
                    <p className="tracking-[5px]">PORTFOLIO</p>
                    <h1 className="text-white text-[40px] font-bold pb-12 text-center">
                        Checkout a few of my works
                    </h1>
                </div>
                {/* All Projects Container */}
                <div className="flex flex-col gap-10">
                    <Project
                        direction="row"
                        image="https://preview.colorlib.com/theme/beckham/images/work-1.jpg.webp"
                        title="INoteBook - Organize Your All Notes At Single Place."
                        desc="Bind notes and ideas together; Organize and prioritize your ideas as notes in Single place and build the world together."
                        type="MERN APPLICATION"
                        link="https://github.com/yogesh584/iNoteBook"
                    />
                    <Project
                        direction="row-reverse"
                        image="https://preview.colorlib.com/theme/beckham/images/work-2.jpg.webp"
                        title="News Monkey - Find out what's happening in your world."
                        desc="The latest and greatest news from around the globe.” “Breaking news, all day, every day.” “Stay informed and stay connected with us."
                        type="MERN APPLICATION"
                        link="https://github.com/yogesh584/NewsMonkey"
                    />
                    <Project
                        direction="row"
                        image="https://preview.colorlib.com/theme/beckham/images/work-6.jpg.webp"
                        title="Disney Plus Clone - Where timeless characters meet the heroes of today."
                        desc="From Mickey Mouse to Iron Man, Snow White to Moana, Luke Skywalker to Thor - there's  something for everyone. Checkout disney Plus Clone.”"
                        type="MERN APPLICATION"
                        link="https://github.com/yogesh584/Disney-Plus-Clone"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
