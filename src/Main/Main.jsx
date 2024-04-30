import React from "react";
import TopSticky from "./TopSticky";
import Card from "./Card";
import one from "../assets/songs/1.jfif";
import two from "../assets/songs/2.jfif";
import three from "../assets/songs/3.jfif";

import four from "../assets/songs/4.jfif";
import five from "../assets/songs/5.jfif";
import six from "../assets/songs/6.jfif";
import seven from "../assets/songs/7.jfif";

import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

function Main() {
  return (
    <>
      <TopSticky />
      <div className="bg-[#1E1E1E] w-[83%] rounded-md h-[800px] mt-[3.8%]  ">
        <div className="text-white p-1  flex justify-between items-center px-2 py-2">
          <h1 className="text-[23px]  font-bold">Spotify Playlists</h1>
          <p className="text-[#b6b5b5]">Show all</p>
        </div>
        <div className="flex flex-wrap mb-[4rem]">
          <Card src={one} h3={"Today's top hits"} />
          <Card src={two} h3={"Mega Hit Mix"} />
          <Card src={three} h3={"Sleep"} />
          <Card src={four} h3={"DayDreamers"} />
          <Card src={five} h3={"Today's top hits"} />
          <Card src={six} h3={"Rock Classics"} />
          <Card src={seven} h3={"Rap Savior"} />
        </div>
        <div className="text-white flex  items-center px-10 py-2 gap-4 h-[30%] border-gray-700 border-b-2 ">
          <div className="w-[13%] h-[80%]">
            <h4 className="font-semibold mb-2  hover:underline">Company</h4>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold   hover:underline">
              About
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold   hover:underline">
              Jobs
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold   hover:underline">
              For the Record
            </p>
          </div>
          <div className="w-[13%] h-[80%]">
            <h4 className="font-semibold mb-2  hover:underline">Communities</h4>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold   hover:underline">
              For Artists
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold   hover:underline">
              Developers
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold  hover:underline ">
              Advertising
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold  hover:underline ">
              Investors
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold   hover:underline">
              Vendors
            </p>
          </div>
          <div className="w-[13%] h-[80%]">
            <h4 className="font-semibold mb-2  hover:underline">
              Useful links
            </h4>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold  hover:underline ">
              Support
            </p>
            <p className="text-[15px] p-1 text-[#b6b5b5] font-bold  hover:underline ">
              Free Mobile App
            </p>
          </div>

          <div className="flex absolute right-10 bottom-[35%] ">
            <div className=" w-10 h-10 rounded-full bg-[#171717] flex justify-center items-center mr-2">
              <img src={insta} className="w-4 h-4 filter " />
            </div>
            <div className=" w-10 h-10 rounded-full bg-[#171717] flex justify-center items-center mr-2">
              <img src={twitter} className="w-4 h-4 filter " />
            </div>
            <div className=" w-10 h-10 rounded-full bg-[#171717] flex justify-center items-center mr-2">
              <img src={facebook} className="w-4 h-4 filter " />
            </div>
          </div>
        </div>
        <p className="text-[10px] p-5 text-[#b6b5b5] font-bold ">
          © 2023 Spotify AB
        </p>
      </div>
    </>
  );
}

export default Main;
