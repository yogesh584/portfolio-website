import React from "react";
import Project from "../Home/Projects/Project";

const Portfolio = () => {
    return (
        <div>
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
                {/* Heading */}
                <div
                    className="flex flex-col items-center pb-12"
                    data-aos="fade-up"
                >
                    <p className="tracking-[5px] mb-3 text-[#8c8c8c]">
                        PORTFOLIO
                    </p>
                    <h1 className="text-white font-poppins tracking-[4px] px-4 text-3xl sm:px-0 sm:text-4xl  font-bold uppercase text-center">
                        Checkout a few of my works
                    </h1>
                </div>
            </div>
            <div className="flex justify-center min-h-screen text-[#8c8c8c] font-poppins mb-56 md:mb-28">
                <div className="w-[95%] lg:w-5/6 flex flex-col ">
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
        </div>
    );
};

export default Portfolio;
