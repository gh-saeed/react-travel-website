import React from "react";
import "./home.css";

const Home = () => {
    return (
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">Plan Your Trip With Travel Dot</h1>

                    <p className="subTitle">
                        Travel to your favourite city with respectful of the
                        enviroment!
                    </p>

                    <button className="btn">
                        <a href="#">explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="Dream Destination" />
                    </div>

                    <div className="disDiv">
                        <label htmlFor="distance">Location</label>
                        <input type="text" placeholder="11/Meters" />
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Location</label>
                        <input type="text" placeholder="$140-$500" />
                    </div>

                    <button className="btn">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
