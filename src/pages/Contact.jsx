import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <div className='mt-10 p-5 md:flex justify-around'>
        <div className='flex flex-col'>
          <h1 className='font-semibold text-2xl'>Fill to Get Started</h1>
          
          <input type="text" name='Name: ' placeholder='enter your name' className='border border-gray-200 p-3 w-80 mt-5'/>
          <input type="email" name='email: ' placeholder='Email' className='border border-gray-200 p-3 w-80 mt-5'/>
          <input type="contact" name='conatact ' placeholder='Phone Number' className='border border-gray-200 p-3 w-80 mt-5'/>    
          <textarea type="message" placeholder='Write your message' className='border border-gray-200 mt-5 p-3 w-80'/>     

          <button className='p-3 w-40 rounded mt-5 bg-[#4E2976] text-white hover:bg-[#A34599] cursor-pointer'>Send Message</button>   
        </div>

        <div>
          <h1 className='font-semibold text-2xl mt-20'>Here to Help</h1>
            <div className='flex gap-5 mt-5'>
              <a href='tel:+919876543210' className='text-[#4E2976] text-m gap-3 mt-2 hover:text-gray-400'><FaMapMarkerAlt /></a>
              <div className='flex gap-2'>
                <h1 className='text-m font-semibold'>Address:</h1>
                <p>3, Gandhi Rd, Gill Nagar, Choolaimedu, Chennai-600094</p>
              </div>
            </div>
            <div className='flex gap-5 mt-5'>
              <a href='tel:+919876543210' className='text-[#4E2976] text-m gap-3 mt-2 hover:text-gray-400'><FaMapMarkerAlt /></a>
              <div className='flex gap-2'>
                <h1 className='text-m font-semibold'>Landmark:</h1>
                <p>Near DAV Higher Secondary School</p>
              </div>
            </div>                        
            <div className='flex gap-5 mt-5'>
              <a href='tel:+919876543210' className='text-[#4E2976] text-m gap-3 mt-2 hover:text-gray-400'><FaPhoneAlt /></a>
              <div className='flex gap-2'>
                <h1 className='text-m font-semibold'>Phone: </h1>
                <p>+91 9952221840</p>
              </div>
            </div>
            <div className='flex gap-5 mt-5'>
              <a href='tel:+919876543210' className='text-[#4E2976] text-m gap-3 mt-2 hover:text-gray-400'><FaEnvelope /></a>
              <div className='flex gap-2'>
                <h1 className='text-m font-semibold'>Email: </h1>
                <p>rainbowpreschool@gmail.com</p>
              </div>
            </div>
        </div>
      </div>

      <div>
        <iframe
          title='Google Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.142583058653!2d80.2221713!3d13.0661391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526692ea31640b%3A0x82a6ffe919588740!2sRainbow%20Preschool%20Choolaimedu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin'
          width="100%"
          height="400"
          allowFullScreen=""
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='rounded-lg border mt-20'
        ></iframe>
      </div>  
    </div>
  )
}

export default Contact