import React from 'react'
import assets from '../assets/assets'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='pl-5 flex-col md:flex-row gap-10 md:gap-0 justify-around items-start md:px-20 px-5 py-10 grid grid-cols-1 md:grid-cols-3'>
        <div className=''>
          <img src={assets.logo} alt="Logo" style={{ height: '110px' }} className='mt-5'/>
          <p className='mt-3'>Rainbow Pre School is more than just a place to learn it is a second home for your kids.</p>

          <div className='flex gap-5 mt-5'>
            <div className='bg-[#4E2976] w-9 h-9 rounded-full flex justify-center items-center font-semibold'>
              <a href='https://www.facebook.com/rainbowpreschoolchd' target='_blank' rel='noreferrer'><FaFacebookF className='  m-2 text-2xl hover:text-blue-600'/></a>
            </div>
            <div className='bg-[#4E2976] w-9 h-9 rounded-full flex justify-center items-center font-semibold'>
              <a href='https://www.instagram.com/rainbowpreschoolchd/' target='_blank' rel='noreferrer'><FaInstagram className=' m-2 text-2xl hover:text-pink-600'/></a>
            </div>
            <div className='bg-[#4E2976] w-9 h-9 rounded-full flex justify-center items-center font-semibold'>
              <a href='https://wa.me/919876543210' target='_blank' rel='noreferrer'><FaWhatsapp className=' m-2 text-2xl hover:text-green-600'/></a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl mt-10 relative inline-block after:content-[''] after:block after:w-1/2 after:h-[3px] after:bg-[#4E2976] after:mt-2">
            Contact Us
          </h1>

          <div className='flex gap-5 mt-5'>
            <a href='tel:+919876543210' className='text-[#4E2976] text-2xl gap-3 mt-5 hover:text-gray-400'><FaPhoneAlt /></a>
            <div>
              <h1 className='text-xl font-semibold'>Phone</h1>
              <p>+91 9952221840</p>
            </div>
          </div>
          <div className='flex gap-5 mt-5'>
            <a href='tel:+919876543210' className='text-[#4E2976] text-2xl gap-3 mt-5 hover:text-gray-400'><FaEnvelope /></a>
            <div>
              <h1 className='text-xl font-semibold'>Email</h1>
              <p>rainbowpreschool@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-5 mt-5'>
            <a href='tel:+919876543210' className='text-[#4E2976] text-2xl gap-3 mt-5 hover:text-gray-400'><FaMapMarkerAlt /></a>
            <div>
              <h1 className='text-xl font-semibold'>Address</h1>
              <p>3, Gandhi Rd, near DAV Higher-Sec-School, Gill Nagar, Choolaimedu, Chennai-600094</p>
            </div>
          </div>          
        </div>

        <div className="space-y-3">
          <h1 className="font-bold text-2xl mt-10 relative inline-block after:content-[''] after:block after:w-1/2 after:h-[3px] after:bg-[#4E2976] after:mt-2">
            Facilities
          </h1>
          <p>Air conditioned and well ventilated classrooms</p>
          <p>CCTV camera surveillance</p>
          <p>Transport facilities</p>
          <p>Safe, Secure and Hygienic environment</p>
          <p>Regular Vision and dental checkup’s</p>
        </div>
      </div>

      <div className='text-center text-[12px] text-gray-300 p-5'>
        <p>Copyright @ RainbowPreschool. All Rights Reserved by Creative Designers</p>
      </div>
    </div>
  )
}

export default Footer