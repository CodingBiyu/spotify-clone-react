import React from "react";
import whitespotify from "../assets/white-spotify.png";
import home from "../assets/home.png";
import search from "../assets/search.png";

function SideNav() {
  return (
    <div className="bg-[#121212] w-[95%] p-3 rounded-xl h-[150px] ">
      <div className="flex text-white item-center justify-start gap-1 p-2">
        <img className="text-white w-7 pl-1 " src={whitespotify} />
        <h2 className="text-[14px] pt-[2px] ">Spotify</h2>
      </div>
      <div className="flex text-white item-center justify-start pt-2 gap-1 p-2">
        <img className="filter filter-gray h-7" src={home} />
        <h2 className="text-[#b6b5b5] pl-3 pt-[4px]  text-[13.5px] -tracking-tighter font-bold">
          Home
        </h2>
      </div>
      <div className="flex text-white item-center justify-start pt-3 gap-1 p-2">
        <img
          className="filter-gray filter w-[26px] h-[21px] pl-1"
          src={search}
        />
        <h2 className="text-[#b6b5b5] pl-4 text-[13.5px] -tracking-tighter font-bold">
          Search
        </h2>
      </div>
    </div>
  );
}

export default SideNav;
