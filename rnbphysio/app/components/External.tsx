import React from "react";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./Overlay";

const External = () => {
  return (
    <div
      id="resources"
      className="relative z-0 w-full bg-[url(/images/istockphoto-talking.jpg)] bg-cover bg-center flex flex-col md:py-[120px] items-center min-h-screen"
    >
      <Overlay />
      <div className="flex relative z-30 flex-col md:flex-row items-center min-h-screen md:min-h-0">
        <div className="w-full md:min-w-[50%] flex flex-col items-center pb-[150px] md:pb-[0px] justify-around md:gap-11 min-h-screen md:min-h-0">
          <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-[#ff7860]">
            Want To Learn More
          </h1>
          <Link
            className="bg-white rounded w-fit p-2 hover:scale-120"
            target="__blank"
            href="https://neurosymptoms.org/en/"
          >
            <Image
              src="/resources/FND-Logo.png"
              width={200}
              height={100}
              alt="ropped FND Logo"
              unoptimized
            />
          </Link>
          <Link
            className="bg-white rounded w-fit p-2 hover:scale-120"
            target="__blank"
            href="https://ehlers-danlos.org.nz/eds-info/"
          >
            <Image
              src="/resources/Elan-logo.jpg"
              width={200}
              height={100}
              alt="EDS Logo"
              unoptimized
            />
          </Link>
          <Link
            className="bg-white rounded w-fit p-2 hover:scale-120"
            target="__blank"
            href="https://healthify.nz/health-a-z/p/postural-orthostatic-tachycardia-syndrome-pots"
          >
            <Image
              src="/resources/Healthify-Logo.png"
              width={200}
              height={100}
              alt="ropped FND Logo"
              unoptimized
            />
          </Link>
        </div>
        <div className="md:flex overflow-hidden md:mx-10 p-6 md:p-0 md:mt-20 w-full md:mim-w-[60%] justify-center hidden">
          <Image
            src="/images/resources.jpg"
            width={700}
            height={700}
            alt="adding cast to leg"
            className="rounded-3xl my-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default External;
