import React from "react";
import Image from "next/image";
import Scroll from "./Scroll";
import BookButton from "./BookButton";

const TitleCard = () => {
  return (
    <div id="home" className="w-full h-screen flex flex-col items-center">
      <Image
        src="/logo/RNB_Logo_Centre_Aligned.png"
        width={600}
        height={100}
        alt="logo"
        className="pt-18"
        unoptimized
      />
      <div>
        <Scroll />
      </div>
      <div className="w-150 m-25">
        <p style={{ textShadow: "0 0 2px gray" }} className="text-4xl text-center font-semibold">Providing expert neuro physiotherapy and rehabilitation services supporting people with neurological conditions to improve mobility, manage symptoms, and enhance quality of life.</p>
      </div>
      <BookButton />
    </div>
  );
};

export default TitleCard;
