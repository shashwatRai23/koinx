import React from "react";

const Team = () => {
  return (
    <div className="bg-[#ffffff] px-4 py-4 rounded-lg">
      <h2 className="text-xl font-bold">Team</h2>
      <p className="mt-2 text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex mt-5 gap-5 bg-[#E8F4FD] px-5 py-3 rounded-md items-center">
          <div className="flex flex-col items-center">
            <img src="/assets/t1.svg" className="rounded-md" />
            <h4 className="font-bold">John Smith</h4>
            <small className="text-[#788F9B]">Designation here</small>
          </div>
          <div className="text-[#0F1629]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
        <div className="flex mt-5 gap-5 bg-[#E8F4FD] px-5 py-3 rounded-md items-center">
          <div className="flex flex-col items-center">
            <img src="/assets/t2.svg" className="rounded-md" />
            <h4 className="font-bold">Ellina Williams</h4>
            <small className="text-[#788F9B]">Designation here</small>
          </div>
          <div className="text-[#0F1629]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
        <div className="flex mt-5 gap-5 bg-[#E8F4FD] px-5 py-3 rounded-md items-center">
          <div className="flex flex-col items-center ">
            <img src="/assets/t3.svg" className="rounded-md" />
            <h4 className="font-bold">John Smith</h4>
            <small className="text-[#788F9B]">Designation here</small>
          </div>
          <div className="text-[#0F1629]">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
