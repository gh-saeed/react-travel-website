import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";

//  import Images
import img2 from "../../Assets/images/2.jpg";
import img5 from "../../Assets/images/5.jpg";
import img7 from "../../Assets/images/7.jpg";
import img9 from "../../Assets/images/9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
    {
        id: 1,
        imgSrc: img2,
        destTitle: "Machu Picchu",
        location: "Peru",
        grade: "CULTURAL RELAX",
    },

    {
        id: 2,
        imgSrc: img5,
        destTitle: "Guanajuato",
        location: "Mexico",
        grade: "CULTURAL RELAX",
    },

    {
        id: 3,
        imgSrc: img7,
        destTitle: "Angkor Wat",
        location: "Combodia",
        grade: "CULTURAL RELAX",
    },

    {
        id: 4,
        imgSrc: img9,
        destTitle: "Taj Mahal",
        location: "India",
        grade: "CULTURAL RELAX",
    },
];

const Popular = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">Popular Destiantion</h2>
                        <p>
                            From historycal cities to natural specteculars, come
                            see the best of the world!
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {Data.map((d, i) => {
                        return (
                            <div data-aos="fade-up"className="singleDestination" key={i}>
                                <div className="destImage">
                                    <img
                                        src={d.imgSrc}
                                        alt=""
                                        className="image title"
                                    />

                                    <div className="overlayInfo">
                                        <h3>{d.destTitle}</h3>
                                        <p>{d.location}</p>

                                        <BsArrowRightShort className="icon" />
                                    </div>
                                </div>

                                <div className="destFooter">
                                    <div className="number">0{d.id}</div>

                                    <div className="destText flex">
                                        <h6>{d.location}</h6>
                                        <span className="flex">
                                            <span className="dot">
                                                <BsDot className="icon" />
                                            </span>
                                            Dot
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Popular;
