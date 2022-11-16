import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";

const CreateBlog = () => {
  const date = new Date();
  let text = date.toTimeString();
  const [blog, setBlog] = useState({
    blog_name: "",
    blog_desc: "",
    blog_created_at: text,
    blog_author: "",
    blog_img: "",
    user_id: 0,
  });

  const handleChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/blogs", blog);
      console.log(blog);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-11/12 h-[800px] ">
          <form>
            <div>
              <h1 className="text-[24px] font-bold font-sans mt-6">
                Create your own blog:
              </h1>
            </div>
            <div className="ml-5 mt-5 space-y-3 pb-4">
              <div>
                <h1 className="text-[20px] font-semibold font-sans">
                  Enter Blog Name:
                </h1>
                <input
                  name="blog_name"
                  onChange={handleChange}
                  className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]"
                  type="text"
                />
              </div>
              <div>
                <h1 className="text-[20px] font-semibold font-sans">
                  Enter Blog description:
                </h1>
                <textarea
                  name="blog_desc"
                  onChange={handleChange}
                  type="text"
                  className="w-9/12 h-[300px] bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]"
                />
              </div>
              <div>
                <h1 className="text-[20px] font-semibold font-sans">
                  Enter Blog author:
                </h1>
                <input
                  name="blog_author"
                  onChange={handleChange}
                  type="text"
                  className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]"
                />
              </div>
              <div>
                <h1 className="text-[20px] font-semibold font-sans">
                  Enter Blog img url:
                </h1>
                <input
                  name="blog_img"
                  onChange={handleChange}
                  type="text"
                  className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]"
                />
              </div>
              <div>
                <h1 className="text-[20px] font-semibold font-sans">
                  Enter user id:
                </h1>
                <input
                  name="user_id"
                  onChange={handleChange}
                  type="number"
                  className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bt-style bg-purple-600 hover:bg-purple-500"
                  onClick={handleClick}
                >
                  Create blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
