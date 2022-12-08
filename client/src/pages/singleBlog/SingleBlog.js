import React from "react";
import Navbar from "../../components/navbar/Navbar";

function SingleBlog() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-11/12 h-[800px] bg-gray-400">
          <div className="w-full flex justify-center">
            <h1 className="mt-5 font-[28px] font-bold">Blog Title</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
