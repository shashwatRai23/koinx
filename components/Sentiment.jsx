"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from "./Carousel";
import { IoIosInformationCircle } from "react-icons/io";
import EventsCard from "@/utils/EventsCard";
import EventCarousel from "@/utils/EventCarousel";
import { eventsData } from "@/utils/EventsData";
const Sentiment = () => {

  const [trendingCryptoData, setTrendingCryptoData] = useState([]);

  useEffect(() => {
    const fetchTrendingCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        setTrendingCryptoData(response.data.coins || []);
      } catch (error) {
        console.error('Error fetching trending crypto data:', error);
      }
    };
    fetchTrendingCryptoData();
  }, []); 
  return (
    <div className="card mt-3 w-full">
      <h1 className="heading_text">Sentiment</h1>
      <h2 className="sub_heading_text">
        <span>Key Events</span>{" "}
        <span className="text-[#ABB9BF]">
          <IoIosInformationCircle />
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {eventsData.map((data) => (
          <EventsCard
            key={data.id}
            title={data.title}
            content={data.content}
            imgsrc={data.img}
          />
        ))}
      </div>
      
      <h2 className="sub_heading_text">
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
