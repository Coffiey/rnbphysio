import React from 'react'

const Copywrite = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-center bg-gray-200 text-[#036574]">
      <p className="text-center text-sm">
        © {new Date().getFullYear()} RNB Physio. All rights reserved.
      </p>
    </div>
  )
}

export default Copywrite