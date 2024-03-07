import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
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
      <h2 className="sub_heading_text">
        <span>Analyst Estimates</span>{" "}
        <span className="text-[#ABB9BF]">
          <IoIosInformationCircle />
        </span>
      </h2>
    </div>
  );
};

export default Sentiment;
