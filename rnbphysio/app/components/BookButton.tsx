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
        className="border-2 border-black px-5 py-2 rounded-xl cursor-pointer hover:border-[#036574] hover:scale-125 hover:bg-[rgb(1,204,204,0.3)] hover:text-[#036574]"
    >
      <p>Book Now</p>
    </div>
  );
};

export default BookButton;
