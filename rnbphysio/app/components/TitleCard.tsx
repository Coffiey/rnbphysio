"use client"
import React from "react";
import Image from "next/image";
import Scroll from "./Scroll";
import BookButton from "./BookButton";

const TitleCard = () => {
  return (
    <div
    id="home"
    className="w-full px-7 md:py-7 min-h-screen flex flex-col justify-center md:justify-baseline items-center bg-[rgba(255,255,255,0.4)] md:bg-[rgba(255,255,255,0)]">
      <Image
        src="/logo/RNB_Logo_Centre_Aligned.png"
        width={600}
        height={100}
        alt="logo"
        className="pt-18"
        unoptimized
      />
      <div className="flec justify-center w-[90%] hidden md:flex">
        <Scroll />
      </div>
      <div className="w-80 m-8 pb-15 md:m-24 sm:w-100 md:w-150">
        <p style={{ textShadow: "0 0 2px gray" }} className="text-xl sm:text-2xl md:text-4xl text-center font-semibold">Providing expert neuro physiotherapy and rehabilitation services supporting people with neurological conditions to improve mobility, manage symptoms, and enhance quality of life.</p>
      </div>
      <BookButton />
    </div>
  );
};

export default TitleCard;
