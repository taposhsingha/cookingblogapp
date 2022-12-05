import React, { useEffect, useState } from "react";
import BlogCard from "../../components/blogcard/BlogCard";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const navigatetocreateblog = () => {
    navigate("/createblog");
  };

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/blogs");
        setBlogs(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBlogs();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-screen bg-white pb-4">
        <button
          className="bt-style bg-blue-600 mt-5 mx-auto"
          onClick={navigatetocreateblog}
        >
          Create a blog
        </button>
        <div className="flex space-x-3 mt-2 ml-3">
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
