/*      REACT IMPORTS        */
import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Header() {
    /*      STATES      */
    const [scrollVal, setScrollVal] = useState(0);

    /*      SIDEBAR REFRENCES        */
    const sideBarButton = useRef();
    const sideBar = useRef();
    const sideBarParent = useRef();
    const sideBarRight = useRef();

    useEffect(() => {
        /*      EVENT LISTNERS FOR SIDEBAR       */
        sideBarButton.current.addEventListener("click", () => {
            sideBarParent.current.classList.remove("invisible");
            sideBarParent.current.classList.remove("opacity-0");
            sideBar.current.classList.remove("-translate-x-full");
        });

        sideBarParent.current.addEventListener("click", () => {
            sideBarParent.current.classList.add("invisible");
            sideBarParent.current.classList.add("opacity-0");
            sideBar.current.classList.add("-translate-x-full");
        });
    }, []);

    /*      EVENT LISTNER FOR HEADER SCROLL EFFECT.      */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setScrollVal(1);
        } else {
            setScrollVal(0);
        }
    });

    return (
        <>
            <div
                className={`py-[2em] z-100 flex justify-center fixed top-0 left-0 transition-all duration-500 ${
                    scrollVal ? "bg-[#000c]" : ""
                }  z-50 w-full`}
            >
                <div className=" w-full px-4 sm:px-0 sm:w-5/6 flex justify-between items-center">
                    <div>
                        <Link
                            to={"/"}
                            className="text-white font-poppins text-xl uppercase tracking-[5px]"
                        >
                            YOGESH JANGID
                        </Link>
                    </div>

                    <div
                        ref={sideBarButton}
                        className="flex md:hidden z-20 w-10 flex-col gap-[6px] cursor-pointer transition-all ease-linear duration-100 hover:gap-2"
                    >
                        <div className="h-[2px] w-full bg-white"></div>
                        <div className="h-[2px] w-full bg-white"></div>
                        <div className="h-[2px] w-full bg-white"></div>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex gap-10 text-white font-poppins tracking-widest text-sm">
                            <li>
                                <Link
                                    to={"/"}
                                    className="uppercase font-bold hover:text-[#2f89fc] transition-all duration-300 relative hover:after:scale-x-100 after:content-[''] after:left-0 after:right-0 after:absolute after:scale-x-0 after:-bottom-2 after:ease-header-transition after:transition-all after:duration-300 after:h-[2px] after:bg-[#2f89fc]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/resume"}
                                    className="uppercase font-bold hover:text-[#2f89fc] transition-all duration-300 relative hover:after:scale-x-100 after:content-[''] after:left-0 after:right-0 after:absolute after:scale-x-0 after:-bottom-2 after:ease-header-transition after:transition-all after:duration-300 after:h-[2px] after:bg-[#2f89fc]"
                                >
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/portfolio"}
                                    className="uppercase font-bold hover:text-[#2f89fc] transition-all duration-300 relative hover:after:scale-x-100 after:content-[''] after:left-0 after:right-0 after:absolute after:scale-x-0 after:-bottom-2 after:ease-header-transition after:transition-all after:duration-300 after:h-[2px] after:bg-[#2f89fc]"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/contact"}
                                    className="uppercase font-bold hover:text-[#2f89fc] transition-all duration-300 relative hover:after:scale-x-100 after:content-[''] after:left-0 after:right-0 after:absolute after:scale-x-0 after:-bottom-2 after:ease-header-transition after:transition-all after:duration-300 after:h-[2px] after:bg-[#2f89fc]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                ref={sideBarParent}
                className="invisible opacity-0 fixed h-screen left-0 top-0 w-full z-50 flex transition-all duration-300"
            >
                <div
                    ref={sideBar}
                    className="absolute top-0 left-0 -translate-x-full transition-all duration-300 bg-white h-full w-[280px] pt-8 pb-16"
                >
                    <div className="flex justify-end">
                        <span className="flex items-center justify-center gap-3 text-lg font-poppins font-thin mr-5 cursor-pointer transition-all duration-300 hover:text-[#2f89fc]">
                            Close{" "}
                            <span>
                                <RxCross2 className="text-xl" />
                            </span>
                        </span>
                    </div>
                    <ul className="text-black font-poppins mt-5">
                        <li>
                            <Link
                                to={"/"}
                                className="block px-5 py-3 text-lg font-thin transition-all duration-300 hover:text-[#2f89fc]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/resume"}
                                className="block px-5 py-3 text-lg font-thin transition-all duration-300 hover:text-[#2f89fc]"
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/portfolio"}
                                className="block px-5 py-3 text-lg font-thin transition-all duration-300 hover:text-[#2f89fc]"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact"}
                                className="block px-5 py-3 text-lg font-thin transition-all duration-300 hover:text-[#2f89fc]"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    ref={sideBarRight}
                    className="grow bg-[#00000080] transition-all duration-300"
                ></div>
            </div>
        </>
    );
}

export default Header;
