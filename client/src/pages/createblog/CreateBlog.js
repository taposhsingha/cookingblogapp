import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";

const CreateBlog = () => {
  const state = useLocation().state;
  const [blog_desc, setValue] = useState(state?.blog_desc || "");
  const [blog_name, setTitle] = useState(state?.blog_name || "");
  const [blog_img, setBlog_img] = useState(state?.blog_img || "");
  const [blog_category, setCat] = useState(state?.blog_category || "");

  const handleCLick = async (e) => {
    e.preventDefault();

    try {
      state
        ? await axios.put(
            `http://localhost:8800/api/blogs/${state.blog_id}`,
            {
              blog_name,
              blog_desc: blog_desc,
              blog_category,
              blog_img,
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          )
        : await axios.post(
            `http://localhost:8800/api/blogs/`,
            {
              blog_name,
              blog_desc: blog_desc,
              blog_category,
              blog_img,
              blog_created_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          );
    } catch (err) {
      console.log(err);
    }
  };
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
              value={blog_name}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12">
            <ReactQuill
              className="w-8/12 h-[300px]"
              placeholder="Blog content here..."
              theme="snow"
              value={blog_desc}
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
                  <input
                    type="radio"
                    name="cat"
                    value="dessert"
                    id="dessert"
                    checked={blog_category === "dessert"}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label>Dessert</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cat"
                    value="savory"
                    id="savory"
                    checked={blog_category === "savory"}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label>Savory</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cat"
                    value="breakfast"
                    id="breakfast"
                    checked={blog_category === "breakfast"}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label>Breakfast</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cat"
                    value="lunch"
                    id="lunch"
                    checked={blog_category === "lunch"}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label>Lunch</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="cat"
                    value="dinner"
                    id="dinner"
                    checked={blog_category === "dinner"}
                    onChange={(e) => setCat(e.target.value)}
                  />
                  <label>Dinner</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[63px] mt-12">
          <label
            htmlFor="file"
            className=" bg-orange-600 p-2 text-white font-semibold rounded-md"
          >
            Add image
          </label>
          <input
            className="bg-slate-400 focus:bg-blue-500 p-3"
            type="text"
            id="img"
            value={blog_img}
            onChange={(e) => setBlog_img(e.target.value)}
          />
        </div>
        <div className="ml-[63px] mt-12 w-3/12 flex justify-between mb-8">
          <button
            className="bt-style bg-blue-600 text-gray-300 hover:text-white hover:bg-blue-300"
            onClick={handleCLick}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
