import React from 'react'
import assets from '../assets/assets';

const Hero = () => {
  return (
    <div className="bg-[#e7ddf4] md:px-20 py-10 flex flex-col md:flex-row items-center gap-8 lg:mx-20 pl-4">
      {/* Text content: left on desktop, below image on mobile */}
      <div className="w-full md:w-1/2 flex flex-col items-start order-2 md:order-1">
        <div className="text-[#4E2976] font-semibold">
          <p>Learning Feels Like Play</p>
        </div>
        <div className="text-3xl md:text-5xl font-bold my-5">
          <h1>Empowering Student Knowledge</h1>
        </div>
        <div className="text-gray-700 mb-5 text-sm md:w-96 w-full">
          <p>
            We believe every child is unique. We provide a safe, caring and inspiring environment where your child can thrive and grow into a confident learner.
          </p>
        </div>
        <div className="bg-[#4E2976] text-white w-40 h-12 flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#A34599]">
          <button>Learn More</button>
        </div>
      </div>
      {/* Image: right on desktop, on top on mobile */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
        <img
          src={assets.hero}
          alt="hero"
          className="w-full max-w-[350px] md:max-w-[600px] h-[220px] md:h-[400px] object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default Hero