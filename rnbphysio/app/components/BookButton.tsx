"use client";
import React from "react";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // 'smooth' for animated scrolling
  }
};

const BookButton = () => {
  return (
    <div
        onClick={() => handleScroll("pricing")}
        className="border-2 border-black px-5 py-2 rounded-xl cursor-pointer hover:scale-125 hover:bg-[rgb(0,0,0,0.5)] hover:text-white"
    >
      <p >Book Now</p>
    </div>
  );
};

export default BookButton;
