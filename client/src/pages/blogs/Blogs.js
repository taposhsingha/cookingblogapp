import React from "react";
import BlogCard from "../../components/blogcard/BlogCard";
import Navbar from "../../components/navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex space-x-3 mt-2 ml-3">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
