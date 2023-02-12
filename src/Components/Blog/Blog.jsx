import React from "react";
import "./blog.css";

import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/images/10.jpg";
import img2 from "../../Assets/images/11.jpg";
import img3 from "../../Assets/images/12.jpg";
import img4 from "../../Assets/images/13.jpg";

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
    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="sectitle">Our Best Blog?</h2>
                    <p>An insight to the incredible experince in the world.</p>
                </div>

                <div className="mainContainer grid">
                    {Posts.map((post, i) => {
                        return (
                            <div className="singlePost grid" key={i}>
                                <div className="imgDiv">
                                    <img
                                        src={post.postImage}
                                        alt={post.title}
                                    />
                                </div>

                                <div className="postDetails">
                                    <h3>{post.title}</h3>
                                    <p>{post.desc}</p>
                                </div>

                                <a href="#" className="flex">
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
