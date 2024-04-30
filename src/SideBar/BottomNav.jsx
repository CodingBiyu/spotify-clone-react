import React from "react";
import library from "../assets/playlist.png";
import add from "../assets/plus.png";

function BottomNav() {
  return (
    <div className="bg-[#121212] w-[95%] p-3 rounded-xl mt-2 h-[620px]  ">
      <div className="flex text-white item-center justify-start gap-1 p-3 mb-2">
        <img className="filter filter-gray h-6 " src={library} />
        <h2 className="text-[#b6b5b5] pl-3 text-[15px] -tracking-tight font-bold">
          Your Library
        </h2>
        <img
          className="filter filter-gray h-4 relative left-[70px] "
          src={add}
        />
      </div>

      <div className="bg-[#242424] text-white p-3 rounded-lg  ">
        <h4 className="font-semibold mb-2">Create your first playlist</h4>
        <p className="text-[13.3px] font-medium mb-4">
          It's easy, we'll help you
        </p>
        <button className="text-black bg-white rounded-3xl w-[125px] font-bold text-sm px-[14px] py-[6px]">
          Create playlist
        </button>
      </div>
      <div className="bg-[#242424] text-white p-4 rounded-t-lg mt-6 h-[120px] overflow-clip">
        <h4 className="font-semibold mb-2">
          Let's find some podcasts to follow
        </h4>
        <p className="text-[13.3px] font-medium mb-4 ">
          We'll keep you updated on new episodes
        </p>
        <button className="text-black bg-white rounded-3xl w-[150px] font-bold text-sm px-[14px] py-[6px]">
          Browse podcasts
        </button>
      </div>
      <div className="flex flex-wrap mt-4">
        <a className="text-[12px] p-2 text-[#b6b5b5] font-bold ">Legal</a>
        <a className="text-[12px] p-2 text-[#b6b5b5] font-bold ">
          Privacy center
        </a>
        <a className="text-[12px] p-2 text-[#b6b5b5] font-bold ">
          Privacy Policy
        </a>
        <a className="text-[12px] p-2 text-[#b6b5b5] font-bold ">Cookies</a>
        <a className="text-[12px] p-2 text-[#b6b5b5] font-bold ">About Ads</a>
        <a className="text-[12px] p-2 text-[#b6b5b5] font-bold ">
          Accessibility
        </a>
        <a className="text-[10px] p-2  text-[#b6b5b5] font-bold ">Cookies</a>
      </div>
    </div>
  );
}

export default BottomNav;
