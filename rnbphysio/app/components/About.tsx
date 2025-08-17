import React from "react";
import Image from "next/image";

const CL = "w-full h-[30vh] bg-[rgba(0,0,0,0.6)] relative";
const TXT = "w-full h-[50vh] bg-[#6bf8da] relative";

// <div className={TXT}><About /></div>
// <div className={CL}><h1 className="text-transparent"></h1></div>

const About = () => {
  return (
    <div
      id="aboutUs"
      className="relative z-0 w-full bg-[url(/images/istockphoto-talking.jpg)] bg-cover bg-center flex flex-col py-[120px] items-center h-screen"
    >
      <div className="absolute w-[100%] h-[100%] bg-[rgba(255,120,96,0.7)] z-20 top-0"></div>
      <div className="relative z-30">
        <Image
          src="logo/RNB_Text_Centre_Aligned.png"
          width={500}
          height={200}
          alt="logoText"
          unoptimized
        />
      </div>
      <div className="flex relative z-30">
        <div className="flex flex-col items-center w-[50%] mt-20">
          <h1 className="font-bold text-5xl text-[#036574]">About Us</h1>
          <p className="mx-15 text-2xl max-w-[995%] text-center ">
            RNB Physio provides expert neuro physiotherapy and rehabilitation
            services to support individuals living with neurological conditions
            and chronic illness.
          </p>
          <p className="m-15 text-3xl max-w-[995%] text-center">
            RNB Physio has a specialised focus on,{" "}
            <span className="text-[#036574] font-extrabold">
              long COVID, ME and other complex disabilities.
            </span>{" "}
            With a compassionate, client centred approach, we provide our
            services mainly through telehealth to be accessible for all. Our
            goal is to support your journey to improved mobility, daily
            functioning and independence through personalised treatment plans,
            evidence-based practices, and a commitment to your long-term
            well-being.
          </p>
        </div>
        <div className="m-10 overflow-hidden mt-20">
          <Image
            src="images/pexels-thisisengineering.jpg"
            width={795}
            height={530}
            alt="adding cast to leg"
            className="rounded-3xl"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default About;
