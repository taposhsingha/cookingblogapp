import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full h-[800px] bg-green-600">
        <div className="relative w-11/12 h-[600px] bg-white">
          <div className=" w-full h-full bg-black">
            <div
              className="w-full h-full opacity-60"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-center items-center w-full h-full">
                <div className="w-9/12 h-[400px] bg-transparent flex justify-between items-center">
                  <p className="text-white">adasd</p>
                  <p className="text-white">asdasasd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
