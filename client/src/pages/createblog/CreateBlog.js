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
          <h1 className="text-[32px] font-bold">Create Your own blog</h1>
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
        <div className="ml-[63px] mt-12 w-2/12 bg-slate-200">
          <h1>Categories:</h1>
          <div className=" flex ">
            <div className="w-[300px]  flex">
              <div>
                <div>
                  <input type="radio" name="cat" value="dessert" id="dessert" />
                  <label>Dessert</label>
                </div>
                <div>
                  <input type="radio" name="cat" value="savory" id="savory" />
                  <label>Savory</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cat"
                    value="breakfast"
                    id="breakfast"
                  />
                  <label>Breakfast</label>
                </div>
                <div>
                  <input type="radio" name="cat" value="lunch" id="lunch" />
                  <label>Lunch</label>
                </div>
                <div>
                  <input type="radio" name="cat" value="dinner" id="dinner" />
                  <label>Dinner</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[63px] mt-12">
          <input style={{ display: "none" }} type="file" id="file" />
          <label
            htmlFor="file"
            className="cursor-pointer bg-orange-600 hover:bg-orange-400 p-4 text-white font-semibold rounded-md"
          >
            Add image
          </label>
        </div>
        <div className="ml-[63px] mt-12 w-3/12 flex justify-between mb-8">
          <button className="bt-style bg-purple-600 text-gray-300 hover:text-white hover:bg-purple-300">
            Save as draft
          </button>
          <button className="bt-style bg-blue-600 text-gray-300 hover:text-white hover:bg-blue-300">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
