import React from "react";

const EventsCard = ({imgsrc}) => {
  return (
    <div className="flex bg-[#E8F4FD] rounded-lg px-3 py-3 gap-2">
      <img src="/assets/se1.svg" className="h-fit" />
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h3>
        <p className="text-[#3E5765]">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
