import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <div className="rounded-t-3xl bg-secondary/20 py-10">
      <div className="container">
        <div className="grid">
          <div>
          {/* Brand Information  */}
          <div>
            <h1 className="text-2xl font-semibold text-orange-500">E-Learning App</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget est eget.</p>
          <div className='text-3xl flex gap-5 my-4'>
             <FaFacebook />
            <FaInstagram /> 
            <FaXTwitter  />
            <FaLinkedin />
            <FaLocationDot />
          </div>
          </div>
          </div>
        

          {/* copyright  */}
          <p className='text-[14px] font-light text-slate-400 text-center'>@copyright 2025 | VIVEK KUMAR </p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer
