import React from "react";

const Card = ({ crypto }) => {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl border-gray-400 border min-w-80">
      <div className="flex items-center gap-2">
        <img src={crypto.small} alt="" className="rounded-full h-[35px]" />
        <p className="font-normal text-sm">{crypto.symbol}</p>
        <p
          className={`rounded p-1 text-xs ${
            parseFloat(crypto.data.price_change_percentage_24h.usd) < 0
              ? "bg-red-100 text-red-400"
              : "bg-green-100 text-green-400"
          }`}
        >
          {parseFloat(crypto.data.price_change_percentage_24h.usd).toFixed(2)}%
        </p>
      </div>
      <h1 className="text-lg font-medium">{(crypto.data.price).slice(0,10)}</h1>
      <img src={crypto.data.sparkline} alt="" className="w-[70%] m-auto"/>
    </div>
  );
};

export default Card;
