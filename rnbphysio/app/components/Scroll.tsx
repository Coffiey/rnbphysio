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

const Scroll = () => {
  const linkList = [
    { id: "home", title: "Home", logo: House },
    { id: "aboutUs", title: "About", logo: NotepadText },
    { id: "meetThePhysio", title: "Physio", logo: UserRound },
    { id: "services", title: "Services", logo: Blocks },
    { id: "pricing", title: "Pricing", logo: DollarSign },
    { id: "resources", title: "Resources", logo: Link },
  ];

  return (
    <div className="flex h-[100%] justify-around items-center w-full max-w-150 py-5">
      {linkList.map((item) => {
        return (
          <div
            key={item.id}
            style={{ textShadow: "0 0 2px white" }}
            onClick={() => handleScroll(item.id)}
            className="flex text-black hover:text-[#036574] hover:scale-120 cursor-pointer"
          >
            <p className="hidden md:flex">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Scroll;
