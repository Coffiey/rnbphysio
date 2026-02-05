"use client";
import React from "react";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // 'smooth' for animated scrolling
  }
};

const TelehealthButton = () => {
  return (
    <div
        onClick={() => handleScroll("pricing")}
       className="text-[#ff7860] border-[#ff7860] border-2 px-5 py-2 rounded relative z-30 h-10 font-extrabold flex items-center hover:bg-[rgba(255,120,96,0.4)]  hover:scale-120 cursor-pointer"
    >
      <p>Book Now</p>
    </div>
  );
};

export default TelehealthButton;
