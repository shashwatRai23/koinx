"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from "./Carousel";

export default function Footer() {
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
    <div className="p-10 bg-[#fff] mt-10">
      <h1 className="text-2xl font-semibold my-4">You May Also Like</h1>
      <Carousel cryptoData={trendingCryptoData}></Carousel>
      <h1 className="text-2xl font-semibold my-4">Trending Coins</h1>
      <Carousel cryptoData={trendingCryptoData}></Carousel>
    </div>
  );
}
