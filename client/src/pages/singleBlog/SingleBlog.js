import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import moment from "moment";
import { AuthContext } from "../../context/authContext";

function SingleBlog() {
  const [blog, setBlog] = useState({});

  const location = useLocation();

  const blogId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/blogs/${blogId}`
        );
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [blogId]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-11/12 h-[800px]  space-y-3">
          <h1 className="mt-5 text-[28px] font-bold">{blog.blog_name}</h1>
          <div className="w-10/12 rounded-md">
            <img
              src={blog?.blog_img}
              className="w-full h-[400px] object-cover rounded-md"
              alt="img"
            />
          </div>
          <div className="ml-5 flex space-x-3">
            <img
              src={blog.user_img}
              className="rounded-full w-[40px] h-[40px] border-b-2"
              alt="img"
            />
            <div>
              <h1>{blog.user_name}</h1>
              <h2>posted {moment(blog.date).fromNow()}</h2>
            </div>
          </div>
          {currentUser.user_name === blog.user_name && (
            <div className="ml-5 flex space-x-16">
              <Link
                className="bt-style bg-purple-600 hover:bg-purple-300"
                to={`/write?edit=2`}
              >
                Edit
              </Link>
              <Link
                className="bt-style bg-orange-600 hover:bg-orange-300"
                to={`/write?edit=2`}
              >
                Delete
              </Link>
            </div>
          )}
          <div className="w-10/12 ml-5 mt-3">
            <p className="leading-loose text-justify">{blog.blog_desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
