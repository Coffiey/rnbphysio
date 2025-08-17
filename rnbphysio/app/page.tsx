import React from 'react'
import TitleCard from './components/TitleCard'
import About from './components/About'
import Sevices from './components/Services'
import Pricing from './components/Pricing'
import External from './components/External'
import Meet from './components/Meet'

const CL = 'w-full h-[50vh] bg-[rgba(0,0,0,0.6)] relative'
const TXT = 'w-full h-[50vh] bg-[#6bf8da] relative'

const WindowDiv = () => {
  return  <div className={CL}><h1 className="text-transparent"></h1></div>
}

const page = () => {
  return (

     <div id="home" className="flex flex-col">
      <TitleCard />
      <WindowDiv />
      <About />
      <WindowDiv />
      <Sevices />
      <WindowDiv />
      <Meet />
      <WindowDiv />
      <Pricing />
      {/* <div className={CL}><h1 className="text-transparent"></h1></div> */}
      {/* <div className={TXT}><External /></div> */}
     </div>
  )
}

export default page