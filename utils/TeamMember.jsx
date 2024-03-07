import React from "react";

const TeamMember = ({name,imgsrc}) => {
  return (
    <div className="flex flex-col sm:flex-row mt-5 gap-5 bg-[#E8F4FD] px-5 py-3 rounded-md items-center">
      <div className="flex flex-col basis-1/6 gap-1">
        <img src={imgsrc} className="rounded-md h-[100px]" />
        <h4 className="font-bold text-center">{name}</h4>
        <small className="text-[#788F9B] text-center">Designation here</small>
      </div>
      <div className="text-[#0F1629] basis-5/6">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
};

export default TeamMember;
