import React, { useEffect } from "react";
import "./offers.css";
import {
    MdKingBed,
    MdBathtub,
    MdAirportShuttle,
    MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/images/1.jpg";
import img8 from "../../Assets/images/8.jpg";
import img6 from "../../Assets/images/6.jpg";
import img3 from "../../Assets/images/3.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const offersData = [
    {
        id: 1,
        imgSrc: img8,
        destTitle: "Machu Picchu",
        location: "Peru",
        price: "$7,452",
    },

    {
        id: 2,
        imgSrc: img6,
        destTitle: "Guanajuato",
        location: "Mexico",
        price: "$2,452",
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Angkor Wat",
        location: "Combodia",
        price: "$4,400",
    },
];

const Offers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="offer container section">
            <div className="secContianer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">Special Offer</h2>
                    <p>
                        From historical cities to natural specteculars, com see
                        the best of the world!
                    </p>
                </div>

                <div className="mainContent grid">
                    {offersData.map((offer, i) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer" key={i}>
                                <div className="destImage">
                                    <img
                                        src={offer.imgSrc}
                                        alt={offer.destTitle}
                                    />

                                    <span className="discount">30% off</span>
                                </div>

                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>{offer.price}</h4>
                                        <span className="status">For Rent</span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className="icon" />
                                            <small>2 Beds</small>
                                        </div>

                                        <div className="singleAmenity flex">
                                            <MdBathtub className="icon" />
                                            <small>1 Bath</small>
                                        </div>

                                        <div className="singleAmenity flex">
                                            <FaWifi className="icon" />
                                            <small>wi-fi</small>
                                        </div>

                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className="icon" />
                                            <small>Suttle</small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdLocationOn className="icon" />
                                        <small>
                                            450 Vine #310, {offer.location}
                                        </small>
                                    </div>

                                    <button className="btn flex">
                                        View Details
                                        <BsArrowRightShort className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Offers;
