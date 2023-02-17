import React, { useEffect } from "react";
import "./blog.css";

import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/images/10.jpg";
import img2 from "../../Assets/images/11.jpg";
import img3 from "../../Assets/images/12.jpg";
import img4 from "../../Assets/images/13.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Posts = [
    {
        id: 1,
        postImage: img,
        title: "Beautiful Morocco, let us travel!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laborum rerum! Omnis minima provident aspernatur autem harum pariatur odio adipisci.",
    },
    {
        id: 2,
        postImage: img2,
        title: "Romantic moments under Eiffel Tower",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laborum rerum! Omnis minima provident aspernatur autem harum pariatur odio adipisci.",
    },
    {
        id: 3,
        postImage: img3,
        title: "Let us have an adventure outside Tunisia.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laborum rerum! Omnis minima provident aspernatur autem harum pariatur odio adipisci.",
    },
    {
        id: 4,
        postImage: img4,
        title: "Best Country in East Africa",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laborum rerum! Omnis minima provident aspernatur autem harum pariatur odio adipisci.",
    },
];

const Blog = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="sectitle">Our Best Blog?</h2>
                    <p data-aos="fade-up" data-aos-duration="2500" >An insight to the incredible experince in the world.</p>
                </div>

                <div className="mainContainer grid">
                    {Posts.map((post, i) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="2000"  className="singlePost grid" key={i}>
                                <div className="imgDiv">
                                    <img
                                        src={post.postImage}
                                        alt={post.title}
                                    />
                                </div>

                                <div className="postDetails">
                                    <h3 data-aos="fade-up" data-aos-duration="3000" >{post.title}</h3>
                                    <p data-aos="fade-up" data-aos-duration="4000" >{post.desc}</p>
                                </div>

                                <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500" >
                                    Read More
                                    <BsArrowRightShort className="icon" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
