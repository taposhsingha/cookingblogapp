import React, { useEffect, useState } from "react";
import BlogCard from "../../components/blogcard/BlogCard";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const cat = useLocation().search;

  const navigatetocreateblog = () => {
    navigate("/createblog");
  };
  console.log(cat);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/blogs/${cat}`);
        setBlogs(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBlogs();
  }, [cat]);
  return (
    <div>
      <Navbar />
      <div className=" mt-10 flex justify-center">
        <h1 className="text-[25px] font-bold">Blog Categories:</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-10/12 flex space-x-6">
          <Link
            className="bt-style bg-blue-600 hover:bg-blue-300"
            to="/blogs/?cat=art"
          >
            <h2>Art</h2>
          </Link>
          <Link
            className="bt-style bg-blue-600 hover:bg-blue-300"
            to="/blogs/?cat=dessert"
          >
            <h2>Dessert</h2>
          </Link>
          <Link
            className="bt-style bg-blue-600 hover:bg-blue-300"
            to="/blogs/?cat=breakfast"
          >
            <h2>Breakfast</h2>
          </Link>
          <Link
            className="bt-style bg-blue-600 hover:bg-blue-300"
            to="/blogs/?cat=lunch"
          >
            <h2>Lunch</h2>
          </Link>
          <Link
            className="bt-style bg-blue-600 hover:bg-blue-300"
            to="/blogs/?cat=dinner"
          >
            <h2>Dinner</h2>
          </Link>
        </div>
      </div>
      <div className="w-screen bg-white pb-4">
        <button
          className="bt-style bg-blue-600 mt-5 mx-auto hover:bg-blue-300"
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
