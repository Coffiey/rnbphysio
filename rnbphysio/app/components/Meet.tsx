import React from "react";
import Image from "next/image";
import Overlay from "./Overlay";

const Meet = () => {
  return (
    <div
      id="meetThePhysio"
      className="relative z-0 w-full bg-[url(/images/istockphoto-talking.jpg)] bg-cover bg-center flex flex-col md:py-[120px] items-center min-h-screen"
    >
      <Overlay />
      <div className="flex relative z-30 flex-col md:flex-row">
        <div className="flex flex-col gap-7 items-center justify-center w-full md:w-[60%] mt-20 text-white">
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-[#ff7860]">
            Senior Physiotherapist
          </h1>
          <div className="flex-col gap-7 hidden md:flex">
            <p className="mx-15 md:text-sm lg:text-lg xl:text-xl text-center">
              Raewyn is a senior physiotherapist with over 13 years’ experience
              in neuro rehabilitation. Raewyn has gained knowledge and expertise
              through her work in both New Zealand and the UK.
            </p>
            <p className="mx-15 md:text-sm lg:text-lg xl:text-xl text-center ">
              Since the pandemic Raewyn has been heavily involved in treating
              clients with long COVID as well as providing education and
              awareness to health care professionals and others regarding
              management of fatigue and other long COVID symptoms. Through this
              work, Raewyn has expanded her passion to encompass other complex
              conditions including ME/CFS, EDS, and POTS.
            </p>
            <p className="mx-15 md:text-sm lg:text-lg xl:text-xl  text-center ">
              Raewyn established RNB Physio to provide an accessible service for
              treatment and education that takes into consideration the barriers
              of fatigue that encompass many of these conditions. This service
              allows for people to attend consultations within the confines of
              their own home to conserve energy levels and lower stress.
            </p>
          </div>
        </div>
        <div className="overflow-hidden md:mx-10 p-6 md:p-0 md:mt-20 w-full md:w-[45%] justify-center flex">
          <Image
            src="images/Raewyn.jpg"
            width={550}
            height={550}
            alt="adding cast to leg"
            className="rounded-3xl my-auto"
            unoptimized
          />
        </div>
        <div className="flex-col gap-7 flex md:hidden text-white mb-10">
            <p className="mx-5 md:text-sm lg:text-lg xl:text-xl text-center">
              Raewyn is a senior physiotherapist with over 13 years’ experience
              in neuro rehabilitation. Raewyn has gained knowledge and expertise
              through her work in both New Zealand and the UK.
            </p>
            <p className="mx-5 md:text-sm lg:text-lg xl:text-xl text-center ">
              Since the pandemic Raewyn has been heavily involved in treating
              clients with long COVID as well as providing education and
              awareness to health care professionals and others regarding
              management of fatigue and other long COVID symptoms. Through this
              work, Raewyn has expanded her passion to encompass other complex
              conditions including ME/CFS, EDS, and POTS.
            </p>
            <p className="mx-5 md:text-sm lg:text-lg xl:text-xl  text-center ">
              Raewyn established RNB Physio to provide an accessible service for
              treatment and education that takes into consideration the barriers
              of fatigue that encompass many of these conditions. This service
              allows for people to attend consultations within the confines of
              their own home to conserve energy levels and lower stress.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Meet;
