import React from "react";
import Image from "next/image";

const CL = "w-full h-[30vh] bg-[rgba(0,0,0,0.6)] relative";
const TXT = "w-full h-[50vh] bg-[#6bf8da] relative";

// <div className={TXT}><About /></div>
// <div className={CL}><h1 className="text-transparent"></h1></div>

const Meet = () => {
  return (
    <div
      id="meetThePhysio"
      className="relative z-0 w-full bg-[url(/images/istockphoto-talking.jpg)] bg-cover bg-center flex flex-col py-[120px] items-center h-screen"
    >
      <div className="absolute w-[100%] h-[100%] bg-[rgba(255,120,96,0.7)] z-20 top-0"></div>
      <div className="flex relative z-30">
        <div className="flex flex-col items-center w-[50%] mt-20">
          <h1 className="font-bold text-5xl text-[#036574] m-10">Senior Physiotherapist:</h1>
          <p className="mx-15 text-2xl max-w-[995%] text-center ">
            Raewyn is a senior physiotherapist with over 13 years’ experience in
            neuro rehabilitation. Raewyn has gained knowledge and expertise
            through her work in both New Zealand and the UK. Raewyn has direct
            experience working in the following areas: Acute stroke and
            neuromedical units, stroke and general rehabilitation units,
            vestibular rehabilitation outpatient clinics, neuro-rehabilitation
            outpatient clinics, complex disability/illness outpatient clinics,
            neuro-hydrotherapy, spinal cord and brain injury rehabilitation,
            paediatric physiotherapy, and functional neurological disorder
            rehabilitation. Since the pandemic Raewyn has been heavily involved
            in treating clients with long COVID as well as providing education
            and awareness to health care professionals and others regarding
            management of fatigue and other long COVID symptoms. Through this
            work, Raewyn has expanded her passion to encompass other complex
            conditions including ME/CFS, EDS, and POTS. Raewyn established RNB
            Physio to provide an accessible service for treatment and education
            that takes into consideration the barriers and fatigue symptoms that
            encompass many of these conditions. This service allows for people
            to attend consultations within the confines of their own home to
            conserve energy levels and lower stress.
          </p>
        </div>
        <div className="m-10 overflow-hidden mt-20">
          <Image
            src="images/Raewyn.jpg"
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

export default Meet;
