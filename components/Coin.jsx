"use client";

import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import axios from "axios";

const Coin = () => {
  const [coinData, setCoinData] = useState(null);
  const [price, setPrice] = useState(null);

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
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_market_cap=true"
        );
        setPrice(response.data || []);
      } catch (error) {
        console.error("Error fetching Price data:", error);
      }
    };
    fetchCoinData();
    fetchPrice();
  }, []);

  return (
    <div className=" card">
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
          {price && (
            <div className="flex mt-3">
              <div>
                <div className="text-2xl font-bold">$ {price.bitcoin.usd}</div>
                <div className="text-sm mt-1">₹ {price.bitcoin.inr}</div>
              </div>
              <div className="ml-10">
                <span
                  className={`rounded p-1 text-sm ${
                    parseFloat(
                      coinData.market_data.price_change_percentage_24h
                    ) < 0
                      ? "bg-red-100 text-red-400"
                      : "bg-green-100 text-green-400"
                  }`}
                >
                  {coinData.market_data.price_change_percentage_24h} %
                </span>
                <span className="ml-2 text-[#768396]">(24 H)</span>
              </div>
            </div>
          )}
        </>
      )}
      <div className="h-[600px] mt-4">
        <Chart />
      </div>
    </div>
  );
};

export default Coin;
