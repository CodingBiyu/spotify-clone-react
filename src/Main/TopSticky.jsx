import React from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

function TopSticky() {
  return (
    <div className="bg-[#121212] w-[83%] p-3 rounded-md h-[65px] items-center fixed opacity-80 justify-between flex right-0">
      <div className="flex">
        <div className=" w-9 h-9 rounded-full bg-[#0A0A0A] flex justify-center items-center mr-2">
          <img src={leftArrow} className="w-4 h-4 filter " />
        </div>
        <div className=" w-9 h-9 rounded-full bg-[#0A0A0A] flex justify-center items-center">
          <img src={rightArrow} className="w-4 h-4 filter " />
        </div>
      </div>
      <div className="    font-bold text-[#b6b5b5] flex items-center tracking-widest pl-3 text-[15px] ">
        <h2 className="p-1">Premium </h2>
        <h2 className="p-1">Support</h2>
        <h2 className="p-1 mr-3">Download</h2>
        <p className=" text-white text-[30px]">|</p>
        <h2 className="p-1 ml-4">Sign up</h2>
        <button className="text-black bg-[#FFFFFF] rounded-3xl mx-6 w-[120px] h-[50px] font-extrabold text-sm px-[14px] py-[5px]">
          Log in
        </button>
      </div>
    </div>
  );
}

export default TopSticky;
