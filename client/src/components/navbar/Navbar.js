import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className="mt-5 w-11/12 flex justify-between">
        <div className="flex items-center cursor-pointer">
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
            className=" bg-gray-200 p-2 outline-none"
            placeholder="search for recipes..."
          />
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            Why Join ?
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            Register
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            About us
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            Help
          </button>
          <button className="bt-style bg-blue-500 hover:bg-blue-700">
            My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;