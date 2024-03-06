"use client";

import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "./Card";

const Carousel = ({ cryptoData,id}) => {
  const slideLeft = () => {
    var slider = document.getElementById(`slider${id}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(`slider${id}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="my-2 relative">
      <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-gray-200 p-1 bg-white"
      />
      <div
        id={`slider${id}`}
        className="flex gap-2 w-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth"
      >
        {cryptoData.map((crypto) => (
          <Card key={crypto.item} crypto={crypto.item} />
        ))}
      </div>
      <MdChevronRight
        onClick={slideRight}
        size={40}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-gray-200 p-1 bg-white"
      />
    </div>
  );
};

export default Carousel;
