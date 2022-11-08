import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex justify-center h-[650px] bg-purple-300 ">
          <div className="relative ">
            <div className="w-full h-full bg-white singleslide">
              <div className=" w-full h-full bg-black z-10">
                <div
                  className="w-[90vw] h-full bg-white/[0.60]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className=" flex justify-center items-center w-full h-full">
                    <div className="z-20 w-9/12">
                      <div className="w-full flex justify-between items-center">
                        <p className="text-white font-bold text-[38px]">
                          Eat with your friends
                          <br />
                        </p>
                        <div className="text-center">
                          <p className="text-shadow-sm text-blue-500 font-bold text-[38px] text-center">
                            Cook many great dishes
                            <br /> with these recipes
                          </p>
                          <button className="bt-style mt-5 bg-purple-600 hover:bg-purple-800">
                            Check recipes for friends
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
