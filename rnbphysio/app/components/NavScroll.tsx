"use client";
import React from "react";
import {
  House,
  Blocks,
  NotepadText,
  DollarSign,
  Link,
  UserRound,
} from "lucide-react";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // 'smooth' for animated scrolling
  }
};

const NavScroll = () => {
  const linkList = [
    { id: "home", title: "Home", logo: House },
    { id: "aboutUs", title: "About", logo: NotepadText },
    { id: "meetThePhysio", title: "Physio", logo: UserRound },
    { id: "services", title: "Services", logo: Blocks },
    { id: "pricing", title: "Pricing", logo: DollarSign },
    { id: "resources", title: "Resources", logo: Link },
  ];

  return (
    <div className="flex h-[100%] justify-around md:mx-7 items-center mx-3 w-full md:max-w-[40%]">
      {linkList.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="flex hover:scale-120 cursor-pointer"
          >
            <p className="hidden md:flex text-[#036574]">{item.title}</p>
            <div className="flex flex-col items-center md:hidden">
              <item.logo size={25}/>
              <p className="text-xs text-[#036574]">{item.title}</p>
            </div>
            {/* <item.logo /> */}
          </div>
        );
      })}
    </div>
  );
};

export default NavScroll;
