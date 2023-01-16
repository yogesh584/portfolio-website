/*      REACT IMPORTS        */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaSearch } from "react-icons/fa";

const Project = ({ direction, image, title, desc, type, link }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            {/* Project Container */}
            <div
                className={`flex-col flex relative h-full ${
                    direction === "row" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
                {/* Project Image */}
                <div
                    className="w-full mx-auto md:w-2/5 h-72 md:h-full"
                    data-aos="fade-up"
                >
                    <a
                        href={link}
                        className={`bg-cover bg-center w-full h-full flex justify-center items-center group`}
                        style={{
                            backgroundImage: `url(
                                ${image}
                            )`,
                            backgroundColor: "#8c8c8c1a",
                        }}
                    >
                        <div className="p-8 bg-[#2f89fc] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <FaSearch className="text-white" />
                        </div>
                    </a>
                </div>
                {/* Project Title and Others */}
                <div
                    className="mx-auto py-[10%] px-[7%] w-full md:w-3/5"
                    data-aos="fade-up"
                >
                    <p className="text-sm tracking-widest mb-2 uppercase">
                        {type}
                    </p>{" "}
                    {/* Project Type */}
                    <h2 className="text-white text-3xl mb-7">{title}</h2>
                    <p className="text-lg mb-5">{desc}</p>
                    <a
                        href={link}
                        className="text-[#2f89fc] transition-all hover:text-white"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
