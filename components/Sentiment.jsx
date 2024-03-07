import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import EventsCard from "@/utils/EventsCard";
const Sentiment = () => {
  return (
    <div className="card mt-3">
      <h1 className="heading_text">Sentiment</h1>
      <h2 className="sub_heading_text">
        <span>Key Events</span>{" "}
        <span className="text-[#ABB9BF]">
          <IoIosInformationCircle />
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <EventsCard/>
        <EventsCard/>
      </div>
      <h2 className="sub_heading_text mt-4">
        <span>Analyst Estimates</span>{" "}
        <span className="text-[#ABB9BF]">
          <IoIosInformationCircle />
        </span>
      </h2>
      <div className="flex mt-5 items-center gap-5">
        <div className="bg-[#EBF9F4] w-[100px] h-[100px] flex items-center justify-center rounded-full text-[#0FBA83] text-center font-bold text-xl">
          76%
        </div>
        <div className="flex flex-col gap-2 w-full">
          {/* <Progress value={50} color="blue" /> */}
          <div className="flex gap-2 items-center">
            <div className="text-[#7C7E8C]">Buy</div>
            <div className={`h-[14px] w-[76%] bg-[#00B386] rounded-sm`}></div>
            <div className="text-[#7C7E8C]">76%</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-[#7C7E8C]">Hold</div>
            <div className={`h-[14px] w-[8%] bg-[#C7C8CE] rounded-sm`}></div>
            <div className="text-[#7C7E8C]">8%</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-[#7C7E8C]">Sell</div>
            <div className={`h-[14px] w-[16%] bg-[#F7324C] rounded-sm`}></div>
            <div className="text-[#7C7E8C]">16%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
