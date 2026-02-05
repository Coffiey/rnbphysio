"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavScroll from "./NavScroll";

const Logo = () => {
  return (
    <div className="hidden md:flex w-150 h-[100%] items-center justify-start mx-4">
      <Image
        src="logo/RNB_Logo_Right_Aligned.png"
        height={75}
        width={425}
        alt="Logo of a stylised brain, NeuroPhysio"
        unoptimized
      />
    </div>
  );
};

// const BookNow = () => {
//   return (
//     <div className="hidden md:flex h-[100%] items-center hover:text-[#036574] hover:scale-120 cursor-pointer">
//       <Link
//         target="__blank"
//         href="https://calendly.com/rnbphysio/initial_assessment"
//       >
//         Book Now
//       </Link>
//     </div>
//   );
// };

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  
    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//bg-[#e9371bff]
  return (
    <div
      className={`bg-gray-200 fixed z-50 bottom-0 md:top-0 w-full h-[100px] flex shadow-2xl justify-center md:justify-between transition-opacity duration-800 ease-linear ${visible ? "md:opacity-100" : "md:opacity-0"}`}
    >
      <Logo />
      <NavScroll />
    </div>
  );
};

export default NavBar;
