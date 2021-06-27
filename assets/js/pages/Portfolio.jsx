import React from 'react';
import Content from "./ContentPage";
import ContactUs from "./contact";
import About from "./About";
import Tech from "./Tech";

const Portfolio = () => {
    return (
        <div>
            <About/>
            <Tech/>
            <Content/>
            <ContactUs/>
        </div>
    );
};

export default Portfolio;