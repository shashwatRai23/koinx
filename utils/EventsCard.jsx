"use client"
import React from "react";

const EventsCard = ({title,content,imgsrc}) => {
  return (
    <div className="flex bg-[#E8F4FD] rounded-lg p-3 gap-5 w-[50%]">
      <img src={imgsrc} className="h-fit"  />
      <div className="flex flex-col gap-2 min-w-[200px]">
        <h3 className="font-bold">
          {title}
        </h3>
        <p className="text-[#3E5765]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
