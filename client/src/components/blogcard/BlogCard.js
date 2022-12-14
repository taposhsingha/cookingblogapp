import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="bg-white shadow-lg  rounded-md">
      <div className="bg-gray-100 rounded-md w-[500px] ">
        <div>
          <img
            className="w-full h-[200px] object-cover rounded-md"
            src={blog.blog_img}
            alt=""
          />
        </div>
        <div className="mt-2 flex justify-center w-full h-full">
          <div className=" w-11/12 pb-4 space-y-2">
            <div className="w-full flex space-x-2">
              <h1 className="bg-blue-300 p-1 rounded-lg text-[14px] cursor-pointer">
                {blog.blog_category}
              </h1>
            </div>
            <h1 className="text-[24px] font-sans font-semibold">
              {blog.blog_name}
            </h1>
            <div className="flex">
              <h1 className="line-clamp-3">{getText(blog.blog_desc)}</h1>
            </div>
            <div className="flex justify-between">
              <h1>{blog.blog_author}</h1>
              <h1 className="text-gray-400 text-[14px]">
                {blog.blog_created_at}
              </h1>
            </div>
            <Link
              className="bt-style bg-blue-600 hover:bg-blue-300 mt-5"
              to={`/blogs/${blog.blog_id}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
