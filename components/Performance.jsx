"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import PerfComp from "@/utils/PerfComp";
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const Performance = () => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setCoinData(response.data || []);
      } catch (error) {
        console.error("Error fetching Coin data:", error);
      }
    };
    fetchCoinData();
  }, []);
  console.log(coinData);
  return (
    <div className="card mt-3">
      <h1 className="heading_text">Performance</h1>
      <div className="flex mt-3 justify-between items-center">
        <div className="basis-1/5 text-[#44475B] flex flex-col gap-2 text-center">
          <span className="text-sm">Today's Low</span>
          <span>46,930.22</span>
        </div>
        <div className="basis-3/5 h-[4px] bar">
          <span className="ml-[50%] flex flex-col text-[#44475B] items-center">
            <span><IoMdArrowDropup/></span>
            <span className="text-sm">$48,637.83</span>
          </span>
        </div>
        <div className="basis-1/5 text-[#44475B] flex flex-col gap-2 text-center">
          <span className="text-sm">Today's High</span>
          <span>49,343.83</span>
        </div>
      </div>
      <div className="flex mt-3 justify-between items-center">
        <div className="basis-1/5 text-[#44475B] flex flex-col gap-2 text-center">
          <span className="text-sm">52W Low</span>
          <span>46,930.22</span>
        </div>
        <div className="basis-3/5 h-[4px] bar"></div>
        <div className="basis-1/5 text-[#44475B] flex flex-col gap-2 text-center">
          <span className="text-sm">52W High</span>
          <span>49,343.83</span>
        </div>
      </div>
      <div>
        <h2 className="sub_heading_text">
          <span>Fundamentals</span>{" "}
          <span className="text-[#ABB9BF]">
            <IoIosInformationCircle />
          </span>
        </h2>
        {coinData && (
          <div className="flex flex-col sm:flex-row gap-10 mt-3">
            <div className="basis-1/2 flex flex-col gap-2 justify-between w-full">
              <PerfComp
                map="Bitcoin Price"
                value={`$${coinData.market_data.current_price.usd}`}
              />
              <PerfComp
                map="24h Low/ 24h High"
                value={`$${coinData.market_data.low_24h.usd} / $${coinData.market_data.high_24h.usd}`}
              />
              <PerfComp map="7d Low/ 7d High" value={`$16382.07 / $16874.12`} />
              <PerfComp
                map="Trading Volume"
                value={`$${coinData.market_data.total_volume.usd}`}
              />
              <PerfComp
                map="Market Cap Rank"
                value={`#${coinData.market_data.market_cap_rank}`}
              />
            </div>
            <div className="basis-1/2 flex flex-col gap-2">
              <PerfComp
                map="Market Cap"
                value={`#${coinData.market_data.market_cap.usd}`}
              />
              <PerfComp map="Market Cap Dominance" value={`38.43%`} />
              <PerfComp
                map="Volume / Market Cap"
                value={(
                  coinData.market_data.total_volume.usd /
                  coinData.market_data.market_cap.usd
                ).toFixed(4)}
              />
              <PerfComp
                map="All Time High"
                value={`$${coinData.market_data.ath.usd}`}
              />
              <PerfComp
                map="All Time Low"
                value={`$${coinData.market_data.atl.usd}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Performance;
