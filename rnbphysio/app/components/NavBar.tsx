"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Scroll from "./Scroll";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-150 h-[100%] flex items-center justify-start mx-4">
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

const BookNow = () => {
  return (
    <div className="h-[100%] flex items-center hover:text-gray-200 hover:scale-120 cursor-pointer">
      <Link
        target="__blank"
        href="https://calendly.com/rnbphysio/initial_assessment"
      >
        Book Now
      </Link>
    </div>
  );
};

const NavBar = () => {
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 900;
      const newOpacity = Math.min(scrollY / fadeDistance, 1);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity }}
      className="bg-[#e9371bff] fixed z-50 w-full h-[100px] flex shadow-2xl justify-between top-0"
    >
      <Logo />
      <BookNow />
      <Scroll />
    </div>
  );
};

export default NavBar;
