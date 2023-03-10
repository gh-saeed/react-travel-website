import React, { useEffect } from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="footer">
            <div data-aos="fade-up" data-aos-duration="3000" className="secContainer container grid">
                <div  className="logoDiv">
                    <div  className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className="flex">
                                <SiYourtraveldottv className="icon" /> Dot
                            </h1>
                        </a>
                    </div>

                    <div  className="socials flex">
                        <ImFacebook className="icon" />
                        <ImTwitter className="icon" />
                        <AiFillInstagram className="icon" />
                    </div>
                </div>

                <div  className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>

                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </div>

                <div  className="footerLinks">
                    <span className="linkTitle">Helpful Links</span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>

                    <li>
                        <a href="#">Travel & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </div>

                <div  className="footerLinks">
                    <span className="linkTitle">Contact us</span>
                    <span className="phone">+999 999 9999</span>
                    <span className="email">travel@travel.com</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;

