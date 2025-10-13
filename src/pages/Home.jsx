import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import assets from '../assets/assets'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
        {/* content about rainbowkids */}
      <div className='mt-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:px-20 px-5 py-10'>
        <div className='w-100'>
          <p className='text-[#4E2976] font-medium'>Who We Are</p>
          <h1 className='font-semibold mt-7 text-2xl lg:text-4xl'>Learn about our joyful journey in nurturing young minds.</h1>
          <p className='text-sm mt-7 text-gray-600'>At Rainbow KidsSchool, we believe every child shines with unique colors of talent and imagination. Our mission is to create a caring and playful environment where children explore, learn, and grow with confidence, kindness, and curiosity every single day.</p>
          <div className='grid grid-cols-2 mt-5'>
            <div className='mt-5 flex gap-3'>
              <h1 className='bg-[#4E2976] text-white w-7 h-7 rounded-full flex justify-center items-center font-semibold text-sm'>1</h1>
              <p>Homelike Environment</p>
            </div>
            <div className='mt-5 flex gap-3'>
              <h1 className='bg-[#4E2976] text-white w-7 h-7 rounded-full flex justify-center items-center font-semibold text-sm'>2</h1>
              <p>Quality Educators</p>
            </div>
            <div className='mt-5 flex gap-3'>
              <h1 className='bg-[#4E2976] text-white w-7 h-7 rounded-full flex justify-center items-center font-semibold text-sm'>3</h1>
              <p>Safety and Security</p>
            </div>
            <div className='mt-5 flex gap-3'>
              <h1 className='bg-[#4E2976] text-white w-7 h-7 rounded-full flex justify-center items-center font-semibold text-sm'>4</h1>
              <p>Play to Learn</p>
            </div>

            <button className='bg-[#4E2976] text-white rounded w-40 h-10 mt-10 hover:bg-[#A34599]'>Read More</button>

          </div>
        </div>
        <div className='flex justify-center w-100'>
          <img src={assets.img1} className='h-100 mt-20 rounded-full' alt="" />
        </div>
      </div>

        {/* content about rainbowkids */}
      <div className='flex justify-center'>
        <div className=''>
          <p className='text-[#4E2976] font-medium flex justify-center'>Why Choose Us</p>
          <h1 className='font-semibold text-3xl'>Our Core Values</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center md:px-20 px-5 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-5 md:px-20 py-5'>
            <div className='flex flex-col gap-5'>
              <img src="" alt="" />
              <h1 className='flex justify-center font-bold text-2xl text-[#4E2976]'>Care and Compassion</h1>
              <p className='text-gray-600'>We nurture every child with love, understanding, and patience, helping them feel safe and valued. We create a safe, warm environment where children feel at home.</p>
            </div> 
            <div className='flex flex-col gap-5'>
              <img src="" alt="" />
              <h1 className='flex justify-center font-bold text-2xl text-[#4E2976]'>Teamwork and Friendship</h1>
              <p className='text-gray-600'>We encourage children to work together and support one another. Team activities teach sharing, cooperation, and communication. Friendship helps little learners understand empathy and inclusion. Together, we grow stronger and celebrate every success.</p>
            </div> 

            <div className='flex flex-col gap-5'>
              <img src="" alt="" />
              <h1 className='flex justify-center font-bold text-2xl text-[#4E2976]'>Joyful Learning</h1>
              <p className='text-gray-600'>We believe learning should be fun, exciting, and full of laughter. Every activity is designed to inspire curiosity and joy. Children explore new ideas through games, stories, and creativity.Happiness is at the heart of every lesson we teach.</p>
            </div> 

            <div className='flex flex-col gap-5'>
              <img src="" alt="" />
              <h1 className='flex justify-center font-bold text-2xl text-[#4E2976]'>Attractive Play Area</h1>
              <p className='text-gray-600'>School play are are in a unique position to meet kids where they are, helping them become smarter, healthier and stronger through play.</p>
            </div>        
          </div>

          <div className=''>
            <img src={assets.img2} alt="" className='h-100 w-500 rounded-4xl' />
          </div>
      </div>

      <div className='flex flex-col items-center mt-10'>
        <p className='text-[#4E2976] font-medium'>Memories</p>
        <h1 className='font-semibold text-3xl '>Our Memorable Moments</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 px-5 md:px-20 py-10'>
          <img src={assets.img3} alt="" className='h-100 w-300 rounded-4xl' />
          <img src={assets.img8} alt="" className='h-100 w-300 rounded-4xl' />
          <img src={assets.img9} alt="" className='h-100 w-300 rounded-4xl' />
          <img src={assets.img6} alt="" className='h-100 w-300 rounded-4xl' />
          <img src={assets.img11} alt="" className='h-100 w-300 rounded-4xl' />
          <img src={assets.img12} alt="" className='h-100 w-300 rounded-4xl' />
        </div>
      </div>
    </div>
  )
}

export default Home