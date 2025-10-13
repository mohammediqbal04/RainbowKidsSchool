import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div className='md:flex justify-center space-y-4 p-10'>
      <div className='md:w-1/3 space-y-5'>
        <p className='text-[#4E2976] font-semibold'>About</p>
        <h1 className='font-semibold text-3xl'>Learn About Our PreSchool</h1>
        <p className='text-[#6b6b84]'>At Rainbow Pre School, we believe that a child’s early years are the building blocks of their future. With patience, passion, and love, we nurture every child’s individuality and curiosity, making learning a joyful journey.</p>

        <p className='text-[#6b6b84]'>Our child-centered approach focuses on empowering and enlightening young minds through creativity, exploration, and values that last a lifetime. We provide a safe and caring environment where children develop knowledge, confidence, and social skills while celebrating their unique talents.</p>

        <p className='text-[#6b6b84]'>Rainbow Pre School is more than just a place to learn—it is a second home where curiosity blooms, creativity shines, and children step into the world with strong foundations and happy hearts</p>

        <div className='mt-10 flex gap-3'>
          <h1 className='bg-[#4E2976] text-white w-7 h-7 rounded-full flex justify-center items-center font-semibold text-sm'>1</h1>
          <p className='font-semibold text-sm'>Gain Social Skills</p>
        </div>   
        <div className='mt-5 flex gap-3'>
          <h1 className='bg-[#4E2976] text-white w-7 h-7 rounded-full flex justify-center items-center font-semibold text-sm'>2</h1>
          <p className='font-semibold text-sm'>Learn Like You Play</p>
        </div>
      </div>

      <div className='space-y-4 md:ml-50 md:mt-15 mt-10'>
        <img src={assets.img3} alt="" className='h-100 rounded-4xl' />
      </div>
    </div>
  )
}

export default About