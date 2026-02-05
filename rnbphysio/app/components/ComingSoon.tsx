import React from 'react'
import Image from 'next/image'
const ComingSoon = () => {
  return (
    <div id="home" className="w-full h-screen flex flex-col items-center">
      <Image
        src="/logo/RNB_Logo_Centre_Aligned.png"
        width={600}
        height={100}
        alt="logo"
        className="pt-18"
        unoptimized
      />
      <p className='m-10 text-5xl font-semibold'>Coming Soon</p>
    </div>
  )
}

export default ComingSoon