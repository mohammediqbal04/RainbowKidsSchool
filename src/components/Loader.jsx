import React from 'react'

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#4E2976] border-b-4 border-[#A34599]"></div>
  </div>
)

export default Loader