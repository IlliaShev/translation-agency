import React from "react";
import { Image } from "react-bootstrap";
import "./main-page-trust.css";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.png";
import image4 from "./images/4.png";

const MainPageTrust = () => {
    return (
        <div className="trust-content">
            <h2>Бюро перекладів довіряють</h2>
            <div className="slider">
                <div className="slider-item"><Image src={image1} fluid/></div>
                <div className="slider-item"><Image src={image2} fluid/></div>
                <div className="slider-item"><Image src={image3} fluid/></div>
                <div className="slider-item"><Image src={image4} fluid/></div>
            </div>
        </div>
    );
}

export default MainPageTrust;