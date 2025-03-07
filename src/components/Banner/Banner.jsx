import React from 'react'
import { motion } from 'framer-motion'
import { SlideUp } from '../../Utility/animation'

const Banner = ({image, title, subtitle , link, tag, reverse}) => {
  return (
    <div className='bg-[#f9f9f9] pb-14'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
            {/* Banner Image  */}
    <div className={`flex justify-start items-center ${reverse && "md:order-last md:justify-end"}`}>
        <motion.img
        initial={{ opacity: 0 , scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay:0.2 }}
         src={image} alt=""  className='w-[400px] object-cover h-full'/>
    </div>
            {/* Banner Content  */}
            <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]' >
                <motion.p 
                variants = {SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className='text-orange-500 font-semibold uppercase'>{tag}</motion.p>
                <motion.p 
                    variants = {SlideUp(.6)}
                    initial="hidden"
                    whileInView={"visible"}
                className='text-xl lg:text-2xl font-semibold capitalize'>{title}</motion.p>
                <motion.p
                 variants = {SlideUp(.7)}
                 initial="hidden"
                 whileInView={"visible"}
                className='text-sm text-slate-500'>{subtitle}</motion.p>
            </div>
            <div className='flex justify-center md:justify-start'>
                 <motion.button href={link}
                  variants = {SlideUp(.8)}
                  initial="hidden"
                  whileInView={"visible"}
                 className='btn-primary !mt-5'>Get Started</motion.button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
