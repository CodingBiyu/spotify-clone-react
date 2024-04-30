import React from "react";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";

function SideBar() {
  return (
    <div className="w-[17%] items-center flex flex-col pt-2 h-full">
      <SideNav />
      <BottomNav />
    </div>
  );
}

export default SideBar;
