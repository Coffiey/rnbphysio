import React from "react";
import Image from "next/image";
import Overlay from "./Overlay";

const About = () => {
  return (
    <div
      id="aboutUs"
      className="relative z-0 w-full bg-[url(/images/istockphoto-talking.jpg)] bg-cover bg-center flex flex-col py-5 md:py-[120px] items-center min-h-screen"
    >
      <Overlay />
      <div className="flex flex-col md:flex-row relative z-30">
        <div className="flex flex-col items-center md:justify-center md:w-[60%] mt-5 md:mt-20">
          <h1 className="font-bold text-3xl md:text-5xl text-[#ff7860]">About Us</h1>
          <p className="px-15 text-xl w-full md:text-2xl md:max-w-[95%] text-center text-white">
            We provide our services with a compassionate, client centred approach, utilising telehealth to be accessible for all.
          </p>
          <p className="hidden md:block m-15 text-3xl max-w-[70%] text-center text-white">
            RNB Physio has a specialised focus on{" "}
            <span className="text-[#ff7860] font-bold">
              long COVID, ME and other complex disabilities.
            </span>{" "}
           Our
            goal is to support your journey to improved mobility, daily
            functioning and independence through personalised treatment plans,
            evidence-based practices, and a commitment to your long-term
            well-being.
          </p>
        </div>
        <div className="overflow-hidden md:mx-10 p-6 md:p-0 md:mt-20 w-full md:w-[40%] justify-center flex">
          <Image
            src="images/about-us.jpg"
            width={600}
            height={600}
            alt="adding cast to leg"
            className="rounded-3xl my-auto"
            unoptimized
          />
        </div>
        <div className="md:hidden">
           <p className="my-5 mx-8  text-lg md:m-15 md:text-3xl max-w-[95%] text-center text-white">
            RNB Physio has a specialised focus on,{" "}
            <span className="text-[#ff7860] font-bold">
              long COVID, ME and other complex disabilities.
            </span>{" "}
            Our goal is to support your journey to improved mobility, daily
            functioning and independence through personalised treatment plans,
            evidence-based practices, and a commitment to your long-term
            well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
