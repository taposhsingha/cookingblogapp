import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navigatetohome = () => {
    navigate("/");
  };
  const navigatetoregister = () => {
    navigate("/register");
  };
  const navigatetologin = () => {
    navigate("/login");
  };
  const navigatetoprofile = () => {
    navigate("/profile");
  };
  const navigatetoblogs = () => {
    navigate("/blogs");
  };
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="mt-5 w-11/12 flex justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={navigatetohome}
        >
          <img
            className="w-40 h-20 "
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt=""
          />
          <p className="font-bold text-xl underline hover:underline-offset-2">
            cooking site
          </p>
        </div>
        <div className="space-x-5 mt-7">
          <input
            type="text"
            className="border-2  border-gray-400 p-2 outline-none rounded-md"
            placeholder="search for recipes..."
          />
          <button className="bt-style bg-purple-500 hover:bg-purple-700">
            Search
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            Why Join ?
          </button>
          <button
            className="bt-style bg-blue-500 hover:bg-blue-700"
            onClick={navigatetoregister}
          >
            Register
          </button>
          <button
            className="bt-style bg-blue-500 hover:bg-blue-700"
            onClick={navigatetoblogs}
          >
            Blogs
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            About us
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            Help
          </button>
          <button
            className="bt-style bg-blue-500 hover:bg-blue-700"
            onClick={navigatetoprofile}
          >
            My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
