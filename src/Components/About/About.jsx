import React from "react";
import "./about.css";

import img from "../../Assets/images/customer.png";
import img2 from "../../Assets/images/Mountains.jpg";
import img3 from "../../Assets/images/Hikings.png";

import video from "../../Assets/images/video.mp4"

const About = () => {
    return (
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">Why Hikings?</h2>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img2} alt="" />
                        <h3>100+ Mountains</h3>

                        <p>
                            Research show that change to break away from the
                            normal rhythms of daily life reduces stress and
                            important health and well-being
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img3} alt="" />
                        <h3>1000+ Hikings</h3>

                        <p>
                            Research show that change to break away from the
                            normal rhythms of daily life reduces stress and
                            important health and well-being
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img} alt="" />
                        <h3>2000+ Customer</h3>

                        <p>
                            Research show that change to break away from the
                            normal rhythms of daily life reduces stress and
                            important health and well-being
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">
                        <div className="carText">
                            <h2>Wonderfull Hour experience in there!</h2>
                            <p>
                                The Advanture subranking is based on anequally
                                weighted average of scores from five country.
                            </p>
                        </div>

                        <div className="cardVideo">
                            <video src={video} autoPlay loop muted type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
