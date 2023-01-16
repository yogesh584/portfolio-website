/*      REACT IMPORTS       */
import React from "react";

/*      CUSTOM IMPORTS      */
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import Projects from "./Projects/Projects";
import Achievements from "./Achievements";

const Home = () => {
    return (
        <div>
            <Hero />
            <HomeAbout />
            <Projects />
            <Achievements />
        </div>
    );
};

export default Home;
