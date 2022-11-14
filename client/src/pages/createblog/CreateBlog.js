import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

const CreateBlog = () => {
  const [blogname, setblogname] = useState("");
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="w-11/12 h-[800px] ">
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
              <input className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]" />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold font-sans">
                Enter Blog description:
              </h1>
              <textarea className="w-9/12 h-[300px] bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]" />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold font-sans">
                Enter Blog author:
              </h1>
              <input className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]" />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold font-sans">
                Enter Blog img url:
              </h1>
              <input className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]" />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold font-sans">
                Enter user id:
              </h1>
              <input className="w-9/12 bg-blue-200 focus:bg-blue-300 rounded-md py-1 px-2 outline-none text-[22px]" />
            </div>
            <div className="flex justify-center">
              <button className="bt-style bg-purple-600 hover:bg-purple-500">
                Create blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
