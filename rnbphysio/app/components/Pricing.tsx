import React from "react";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="relative z-0 w-full bg-[url(/images/pexels-panditwiguna-1128317.jpg)] bg-cover bg-center flex flex-col md:py-[120px] items-center min-h-screen"
    >
      <Overlay />
      <div className="flex relative z-30 flex-col md:flex-row w-full">
        <div className="flex flex-col items-center justify-start md:justify-between md:h-[70%] md:w-[60%] w-full mt-20 text-white">
          <div className="flex flex-col items-center w-full">
            <h1 className="font-bold text-5xl text-[#ff7860]">Pricing</h1>
            <div
              id="pricing"
              className="relative w-full z-0 flex flex-col items-center p-10"
            >
              <div className="text-lg m-5 p-5 w-[400px] bg-[rgba(3,101,116,0.8)] rounded">
                {/* <div className="text-lg m-5 p-5 w-[400px] bg-[#ff7860] rounded"> */}
                <p className="text-center text-2xl">Private</p>
                <p className="flex justify-between">
                  <span>1 hr Initial assessment:</span> <span>$165</span>
                </p>
                <p className="flex justify-between">
                  <span>1 hr Follow up:</span> <span>$127</span>
                </p>
                <p className="text-xs text-center">
                  Shorter sessions available on request
                </p>
                {/* </div> */}

                {/* <div className="text-lg m-5 p-5 w-[400px]"> */}
                <p className="text-center text-2xl mt-8">ACC</p>
                <p className="flex justify-between">
                  <span>40 min Initial assessment:</span> <span>$58</span>
                </p>
                <p className="flex justify-between">
                  <span>30 min Follow up:</span> <span>$24</span>
                </p>
              </div>

              {/* book now */}
              <div className="border-[#ff7860] border-2 px-5 py-2 my-5 rounded relative z-30 h-10 font-extrabold  md:flex items-center text-[#ff7860] hover:bg-[rgba(0,0,0,0.4)] hover:scale-120 cursor-pointer">
                <Link
                  target="__blank"
                  href="https://calendly.com/rnbphysio/initial_assessment"
                >
                  Book Now
                </Link>
              </div>
              <div>
                <p>
                  Or reach out at{" "}
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

          {/* home visits */}
          <div className="text-center max-w-xl hidden md:flex flex-col items-center mt-20">
            <h2 className="text-2xl font-bold mb-4 text-[#ff7860]">
              Home Visits
            </h2>
            <p className="text-sm xl:text-lg">
              Above rates plus IRD prescribed mileage rate (
              <span className="font-semibold italic">$1.17 per km</span>) unless
              the home visit is within the radius of 10km where the mileage fee
              will be waived. Base: Roslyn, Palmerston North.
            </p>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center w-full pb-5">
          <div className="text-center max-w-xl flex flex-col mt-5 md:hidden text-white">
            <h2 className="text-2xl font-bold mb-4 text-[#ff7860]">
              Home Visits
            </h2>
            <p className="text-sm xl:text-lg px-7">
              *Above rates plus IRD prescribed mileage rate (
              <span className="font-semibold italic">$1.17 per km</span>) unless
              the home visit is within the radius of 10km where the mileage fee
              will be waived. Base: Roslyn, Palmerston North.
            </p>
          </div>
        </div>

        {/* this is the smarphone view */}
        <div className="overflow-hidden md:mx-10 p-6 md:p-0 md:mt-20 w-full md:w-[45%] justify-center mb-5 flex">
          <Image
            src="images/pexels-olia-danilevich-9004780.jpg"
            width={600}
            height={600}
            alt="adding cast to leg"
            className="rounded-3xl my-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
