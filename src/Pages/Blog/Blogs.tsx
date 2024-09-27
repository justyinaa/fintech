import React, { useState } from "react";
import placeholder from "../../assets/imageplaceholder.png";
import BlogSearch from "./BlogSearch";
import "./Blogs.css";

// Dummy blog data
const blogData = [
  {
    id: 1,
    title: "Digital Payment will be Top Payment In Next 10 Years",
    date: "14Feb",
    category: "Technology",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati",
  },
  {
    id: 2,
    title: "Digital Payment will be Top Payment In Next 10 Years",
    date: "14Feb",
    category: "Technology",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati",
  },
  {
    id: 3,
    title: "Digital Payment will be Top Payment In Next 10 Years",
    date: "14Feb",
    category: "Technology",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenati",
  },
];

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter blogs based on search term (title or content)
  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section">
      <BlogSearch onSearch={setSearchTerm} />
      <div className="blog-div">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={placeholder} alt="placeholder" className="blog-img" />
              <div className="blog-texts">
                <h4>{blog.title}</h4>
                <p>
                  <b>{`${blog.date}. ${blog.category}`}</b>
                </p>
                <p>{blog.content}</p>
                <a href="" className="explore">
                  Explore More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </section>
  );
};

export default Blogs;
