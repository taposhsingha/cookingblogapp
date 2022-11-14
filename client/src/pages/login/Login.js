import React from "react";
import LoginNavbar from "../../components/login navbar/LoginNavbar";

const Login = () => {
  return (
    <div>
      <div>
        <LoginNavbar />
        <div className="flex justify-center">
          <div className="items-center bg-gray-200 w-11/12 h-[600px] rounded-md flex justify-evenly">
            <div className="mt-5 w-4/12 h-[520px] bg-black rounded-md">
              <img
                className="w-full h-full object-fill opacity-70 rounded-md"
                src="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="w-[2px] h-[580px] bg-gray-400"></div>
            <div className=" mt-5 w-7/12 h-[520px] bg-white rounded-md flex justify-center items-center">
              <div className="w-11/12 h-[480px] mt-32">
                <div className="space-y-3">
                  <h1 className="font-bold font-sans text-[20px]">
                    Enter Username
                  </h1>
                  <input className="outline-none border-gray-300 bg-transparent bg-blue-200 p-2 lg:w-10/12" />
                </div>
                <div className="space-y-3 mt-3">
                  <h1 className="font-bold font-sans text-[20px]">
                    Enter Password
                  </h1>
                  <input
                    type="password"
                    className="outline-none border-gray-300 bg-transparent bg-blue-200 p-2 lg:w-10/12"
                  />
                </div>
                <div className="mt-6 w-10/12 flex justify-evenly">
                  <button className="bt-style bg-blue-500 hover:bg-blue-700">
                    Login
                  </button>
                  <button className="bt-style bg-blue-500 hover:bg-blue-700">
                    Forgot Password ?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
