import React from "react";
import "./blog.css";

import { BsArrowRightShort } from "react-icons/bs";

const Blog = () => {
    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="sectitle">Our Best Blog?</h2>
                    <p>An insight to the incredible experince in the world.</p>
                </div>

                <div className="mainContainer grid">
                    <div className="singlePost grid">
                        <div className="imgDiv">
                            <img src="" alt="" />
                        </div>

                        <div className="postDetails">
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Atque, sequi.
                            </p>
                        </div>

                        <a href="#" className="flex">
                            <BsArrowRightShort className="icon" />
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
