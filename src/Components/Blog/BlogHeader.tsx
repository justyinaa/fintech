import React from "react";
import Blog from "./Blog";
import "./BlogHeader.css"
const BlogHeader:React.FC = () => {
  return (
    <section className="section blog-header">
          <h3>Latest Article</h3>
          <Blog />
    </section>
  );
};

export default BlogHeader;
