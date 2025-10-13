import React from 'react'
import assets from '../assets/assets'

const Gallery = () => {
  return (
    <div className='grid p-5 space-y-10 md:grid-cols-3 md:space-y-10 md:gap-5 mt-10'>
      <img src={assets.gal1} alt="" className='h-100 w-300 rounded' />
      <img src={assets.gal2} alt="" className='h-100 w-300 rounded' />
      <img src={assets.gal3} alt="" className='h-100 w-300 rounded' />
      <img src={assets.gal4} alt="" className='h-100 w-300 rounded' />
      <img src={assets.gal5} alt="" className='h-100 w-300 rounded' />
      <img src={assets.gal6} alt="" className='h-100 w-300 rounded' />
      <img src={assets.gal7} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img3} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img4} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img5} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img6} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img7} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img8} alt="" className='h-100 w-300 rounded' />
      <img src={assets.img9} alt='' className='h-100 w-300 rounded' />
      <img src={assets.img10} alt='' className='h-100 w-300 rounded' />
      <img src={assets.img11} alt='' className='h-100 w-300 rounded' />
      <img src={assets.img12} alt='' className='h-100 w-300 rounded' />
    </div>
  )
}

export default Gallery