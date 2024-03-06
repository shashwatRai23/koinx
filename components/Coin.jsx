"use client";

import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import axios from "axios";

const Coin = () => {
  const [coinData, setCoinData] = useState(null);
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setCoinData(response.data || []);
      } catch (error) {
        console.error("Error fetching trending crypto data:", error);
      }
    };
    fetchCoinData();
  }, []);

  console.log(coinData);

  return (
    <div className="h-[600px] card">
      {coinData && (
        <>
          <div className="flex gap-2 items-center">
            <img src={coinData.image.small} alt="coin-symbol" />
            <div className="heading_text">{coinData.name}</div>
            <div className="heading_text text-[#5D667B]">
              {coinData.symbol.toUpperCase()}
            </div>
            <div className="bg-[#768396] text-white px-2 py-2 rounded-md ml-4">
              Rank # {coinData.market_cap_rank}
            </div>
          </div>
          <div>
            <div>
              <div className="heading_text">{}</div>
              <div></div>
            </div>
            <div></div>
          </div>
        </>
      )}
      <Chart />
    </div>
  );
};

export default Coin;
