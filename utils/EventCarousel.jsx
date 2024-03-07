"use client"
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import EventsCard from "./EventsCard";

const EventCarousel = ({eventsData}) => {
  const slideLeft = () => {
    var slider = document.getElementById(`sliderEvent`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(`sliderEvent`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="my-2 relative max-w-[400px]">
      <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-gray-300 p-1 bg-white"
      />
      <div
        id="sliderEvent"
        className="flex gap-2 w-fit overflow-x-hidden scroll whitespace-nowrap scroll-smooth"
      >
        {eventsData.map((data) => (
          <EventsCard
            key={data.id}
            title={data.title}
            content={data.content}
            imgsrc={data.img}
          />
        ))}
      </div>
      <MdChevronRight
        onClick={slideRight}
        size={40}
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-gray-300 p-1 bg-white"
      />
    </div>
  );
};

export default EventCarousel;
