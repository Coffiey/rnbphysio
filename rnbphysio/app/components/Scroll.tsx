"use client"
import React from 'react'


const handleScroll= (id:string) => {
    const element = document.getElementById(id);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // 'smooth' for animated scrolling
    }
}

const Scroll = () => {
  const linkList = [
    {id:"home",title:"home"},
    {id:"aboutUs",title:"About Us"},
    {id:"services",title:"Services"},
    {id:"meetThePhysio",title:"Meet the Physio"},
    {id:"pricing",title:"Pricing"},
    {id:"resources",title:"Resources"},
]


  return (
  <div className="flex h-[100%] items-center mx-7 w-150">
    {linkList.map(item => 
    {
      return (
      <div key={item.id} className="p-4 hover:text-gray-200 hover:scale-120 cursor-pointer" onClick={() => handleScroll(item.id)}>
        <p>{item.title}</p>
      </div>
    )
    })}
  </div>
  )}

export default Scroll