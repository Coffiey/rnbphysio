import React from "react";
import Image from "next/image";
import Overlay from "./Overlay";
import Link from "next/link";
import TelehealthButton from "./TelehealthButton";

const TeliHeath = () => {
  return (
    <div
      id="services"
      className="relative z-0 w-full bg-[url(/images/pexels-vlada-karpovich-5357327.jpg)] bg-cover bg-center flex flex-col py-[120px] items-center min-h-screen "
    >
      <Overlay />
      <div className="relative z-30">
        <h1 className="text-7xl text-[#ff7860] font-bold">Services</h1>
      </div>

      <div className="relative z-30 flex flex-col justify-around">
        {/* component 1 */}
        <div className="flex flex-col md:flex-row-reverse items-around justify-around">
          <div className="w-full md:max-w-[50%] my-8 md:my-16 flex flex-col items-center justify-around text-white">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl text-[#ff7860] font-semibold">
                Telehealth
              </h1>
              <p className="text-md p-3">Video calls using Google meet</p>
            </div>
            <div className="w-full flex-col items-center gap-7 hidden md:flex">
              <p className="max-w-[90%] lg:text-2xl xl:text-3xl text-center">
                Using telehealth you will join Raewyn on a video call from the
                comfort of your own home. Raewyn will then be able to give you
                strategies to help manage symptoms, education about what is
                happening in your body, and different ways to move or activities
                to engage in (even if that activity is rest or sleeping). This
                is unique for each individual, and input from Raewyn will look
                different for each person.
              </p>
              <TelehealthButton />
            </div>
          </div>
          <div className="overflow-hidden p-6 md:p-0 md:mt-20 w-full md:w-[40%] flex justify-center">
            <Image
              src="/images/telehealth-square.jpg"
              width={600}
              height={600}
              alt="adding cast to leg"
              className="rounded-3xl my-auto"
              unoptimized
            />
          </div>
          <div className="w-full flex-col items-center gap-7 flex md:hidden text-white">
            <p className="max-w-[90%] text-xl text-center">
              Using telehealth you will join Raewyn on a video call from the
              comfort of your own home. Raewyn will then be able to give you
              strategies to help manage symptoms, education about what is
              happening in your body, and different ways to move or activities
              to engage in (even if that activity is rest or sleeping). This is
              unique for each individual, and input from Raewyn will look
              different for each person.
            </p>
            <TelehealthButton />
          </div>
        </div>

        {/* component 2 */}
        <div className="flex flex-col md:flex-row items-around justify-around">
          <div className="w-full md:max-w-[50%] my-8 md:my-16 flex flex-col items-center justify-around text-white">
            {/* Title */}
            <div className="flex flex-col items-center my-7">
              <h1 className="text-5xl text-[#ff7860] font-semibold m-4">
                Home visits
              </h1>
              {/* <p className="md:hidden block text-lg"> */}
              <p className="md:text-md">
                Manawatu | Whanganui | Horowhenua
              </p>
              {/* <p className="md:hidden block text-xs"> */}
              <p className="md:text-xs">
                additional travel costs may apply*
              </p>
            </div>
            {/* body */}
            <div className="hidden md:flex md:flex-col items-center">
              <p className="max-w-[90%] lg:text-2xl xl:text-3xl text-center">
                Home visits will have Raewyn coming to your home to see you in
                person. These visits are helpful if there are symptoms that need
                to be assessed in person, such as weakness or balance. These can
                also be particularly helpful if you need parts of your home
                environment assessed. The strategies and education provided
                would be the same as in a Telehealth session.
              </p>
              <p className="italic text-lg text-center my-5">
                To schedule a home visit send an email to:{" "}
                <a
                  href="mailto:rnbphysio@outlook.com"
                  target="__blank"
                  className="underline text-[#ff7860] hover:text-[#0000EE]"
                >
                  rnbphysio@outlook.com
                </a>
              </p>
            </div>
          </div>
          {/* image */}
          <div className="overflow-hidden p-6 md:p-0 md:mt-20 w-full md:w-[40%] flex justify-center">
            <Image
              src="/images/homeVisit.jpg"
              width={600}
              height={600}
              alt="adding cast to leg"
              className="rounded-3xl my-auto"
              unoptimized
            />
          </div>
          {/* mobile home visits */}
          <div className="flex md:hidden flex-col items-center text-white">
            <p className="max-w-[90%] text-xl text-center ">
              Home visits will have Raewyn coming to your home to see you in
              person. These visits are helpful if there are symptoms that need
              to be assessed in person, such as weakness or balance. These can
              also be particularly helpful if you need parts of your home
              environment assessed. The strategies and education provided would
              be the same as in a Telehealth session.
            </p>
            <p className="italic text-lg text-center mt-8">
              To schedule a home visit send an email to:{" "}
              <a
                href="mailto:rnbphysio@outlook.com"
                target="__blank"
                className="underline text-[#ff7860] hover:text-[#0000EE]"
              >
                rnbphysio@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeliHeath;
