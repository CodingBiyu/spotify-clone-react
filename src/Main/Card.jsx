import React from "react";

function Card(props) {
  return (
    <div className="w-[12%] bg-[#171717] text-white hover:bg-[#282828] p-1 h-[30%] m-4 flex-col rounded-md flex items-center gap-2 pt-3">
      <img
        src={props.src}
        alt="Playlist Cover"
        className="w-[90%] h-[56%] rounded "
      />
      <div className="px-2 h-auto">
        <h4 className="font-semibold mb-2">{props.h3}</h4>
        <p className="text-[13.3px] text-[#b6b5b5] font-bold ">
          We'll keep you updated on new
        </p>
      </div>
    </div>
  );
}

export default Card;
