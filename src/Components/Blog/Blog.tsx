import React from "react";
import placeholder from "../../assets/placeholder.png";
import "./Blog.css";

const Blog: React.FC = () => {
  return (
    <>
      <div className="blog-div">
        <div className="blog-card">
          <img src={placeholder} alt="placeholder" className="blog-img" />
          <h4>Digital Payment will be Top Payment In Next 10 Years</h4>
          <p>
            <b>14Feb. Technology </b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adisquat adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
          </p>
          <a href="" className="explore">
            Explore More
          </a>
        </div>
        <div className="blog-card">
          <img src={placeholder} alt="placeholder" className="blog-img" />
          <h4>Digital Payment will be Top Payment In Next 10 Years</h4>
          <p>
            <b>14Feb. Technology </b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adisquat adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
          </p>
          <a href="" className="explore">
            Explore More
          </a>
        </div>
        <div className="blog-card">
          <img src={placeholder} alt="placeholder" className="blog-img" />
          <h4>Digital Payment will be Top Payment In Next 10 Years</h4>
          <p>
            <b>14Feb. Technology </b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adisquat adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
          </p>
          <a href="" className="explore">
            Explore More
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;
