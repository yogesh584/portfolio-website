/*      REACT IMPORTS       */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*      CUSTROM IMPORTS     */
/*      COMMON IMPORTS FOR ALL PAGES        */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import ProgressBar from "./components/ProgressBar";
import TopScroller from "./components/TopScroller";

/*      HOME PAGE IMPORTS            */
import Home from "./components/Home/Home";
/*      CONTACT PAGE IMPORTS         */
import Contact from "./components/Contact/Contact";

/*      PORTFOLIO PAGE IMPORTS       */
import Portfolio from "./components/Portfolio/Portfolio";

/*      RESUME PAGE IMPORTS          */
import Resume from "./components/Resume/Resume";

function App() {
    return (
        <div className="App relative bg-[#121212]">
            <Router>
                <Header />
                <ProgressBar />
                <Background />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>

                <TopScroller />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
