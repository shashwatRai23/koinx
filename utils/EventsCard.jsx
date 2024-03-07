import React from "react";

const EventsCard = ({title,content,imgsrc}) => {
  return (
    <div className="flex bg-[#E8F4FD] rounded-lg px-3 py-3 gap-2 ">
      <img src={imgsrc} className="h-fit"  />
      <div className="flex flex-col gap-2">
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
