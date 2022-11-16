import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg  rounded-md">
      <div className="bg-gray-100 rounded-md w-[500px] ">
        <div>
          <img
            className="w-full h-[200px] object-cover rounded-md"
            src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            alt=""
          />
        </div>
        <div className="mt-2 flex justify-center w-full h-full">
          <div className=" w-11/12 pb-4 space-y-2">
            <div className="w-full flex space-x-2">
              <h1 className="bg-blue-300 p-1 rounded-lg text-[14px] cursor-pointer">
                DESSERTS
              </h1>
              <h1 className="bg-blue-300 p-1 rounded-lg text-[14px] cursor-pointer">
                FALL
              </h1>
              <h1 className="bg-blue-300 p-1 rounded-lg text-[14px] cursor-pointer">
                RECIPES
              </h1>
              <h1 className="bg-blue-300 p-1 rounded-lg text-[14px] cursor-pointer">
                EASY
              </h1>
              <h1 className="bg-blue-300 p-1 rounded-lg text-[14px] cursor-pointer">
                THANKSGIVING
              </h1>
            </div>
            <h1 className="text-[24px] font-sans font-semibold">
              {blog.blog_name}
            </h1>
            <div className="flex">
              <h1 className="overflow-hidden">{blog.blog_desc}</h1>
              <h1>...</h1>
            </div>
            <div className="flex justify-between">
              <h1>{blog.blog_author}</h1>
              <h1 className="text-gray-400 text-[14px]">
                {blog.blog_created_at}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
