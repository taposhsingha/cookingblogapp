import React from "react";
import { useNavigate } from "react-router-dom";
const LoginNavbar = () => {
  const navigate = useNavigate();
  const navigatetoregister = () => {
    navigate("/register");
  };
  const navigatetoblogs = () => {
    navigate("/blogs");
  };
  const navigatetohome = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center ">
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
          <p className="font-bold text-xl">cooking site</p>
        </div>
        <div className="space-x-5 mt-7">
          <button
            className="bt-style bg-blue-500 hover:bg-blue-700"
            onClick={navigatetoblogs}
          >
            Blogs
          </button>
          <button
            className="bt-style bg-blue-500 hover:bg-blue-700"
            onClick={navigatetoregister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;
