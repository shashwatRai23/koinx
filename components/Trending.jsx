"use client";
import { useState, useEffect } from "react";
import axios from "axios";
const Trending = () => {
  const [trendingCryptoData, setTrendingCryptoData] = useState([]);

  useEffect(() => {
    const fetchTrendingCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCryptoData(response.data.coins.slice(0, 3) || []);
      } catch (error) {
        console.error("Error fetching trending crypto data:", error);
      }
    };
    fetchTrendingCryptoData();
  }, []);
  console.log(trendingCryptoData);
  return (
    <div className="bg-[#fff] rounded-md px-3 py-3 mt-3 h-fit">
      <h1 className="heading_text">Trending Coins</h1>
      <div className="mt-5">
        {trendingCryptoData.map((crypto) => (
          <div
            key={crypto.item}
            className="flex justify-between items-center mt-2"
          >
            <div className="flex items-center gap-1">
              <img
                src={crypto.item.small}
                alt=""
                className="rounded-full w-[25px]"
              />
              <p className="font-semibold text-sm">{crypto.item.name}</p>
              <p className="font-semibold text-sm">{`(${crypto.item.symbol})`}</p>
            </div>
            <p
              className={`rounded p-1 text-sm w-fit h-fit ${
                parseFloat(crypto.item.data.price_change_percentage_24h.usd) < 0
                  ? "bg-red-100 text-red-400"
                  : "bg-green-100 text-green-400"
              }`}
            >
              {parseFloat(
                crypto.item.data.price_change_percentage_24h.usd
              ).toFixed(2)}
              %
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
