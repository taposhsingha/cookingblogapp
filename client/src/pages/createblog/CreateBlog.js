import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center mt-5 pb-4">
          <h1 className="font-[32px] font-bold">Create Your own blog</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12">
            <input
              className="bg-gray-200 p-2 w-6/12 mb-5 focus:bg-blue-300 outline-none rounded-md"
              type="text"
              placeholder="blog title"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12">
            <ReactQuill
              className="w-8/12 h-[300px]"
              placeholder="Blog content here..."
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CreateBlog;
