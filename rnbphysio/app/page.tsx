import React from 'react'
import ComingSoon from './components/ComingSoon'
import TitleCard from './components/TitleCard'
import About from './components/About'
import Sevices from './components/Services'
import Pricing from './components/Pricing'
import External from './components/External'
import Meet from './components/Meet'
import Copywrite from './components/Copywrite'

const CL = 'w-full h-[50vh] relative'
const TXT = 'w-full h-[50vh] bg-[#6bf8da] relative'

const WindowDiv = () => {
  return  <div className={CL}><h1 className="text-transparent"></h1></div>
}

const page = () => {
  return (

     <div id="home" className="flex flex-col">
      <TitleCard />
      <About />
      <WindowDiv />
      <Meet />
      <WindowDiv />
      <Sevices />
      <WindowDiv />
      <Pricing />
      <WindowDiv />
      <External />
      <Copywrite />
     </div>
  )
}

export default page