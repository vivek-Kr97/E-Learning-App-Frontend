import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { GiMoneyStack } from 'react-icons/gi'
import { GoMortarBoard } from 'react-icons/go'
import { RxCountdownTimer } from 'react-icons/rx'
import { SlideLeft } from '../../Utility/animation'
import { motion } from 'framer-motion'

const WhyChooseUsData = [
    {
        id:1,
        title : "One-on-one Teaching",
        desc: "All of our special education experts have a degree in special education.",
        icon :<GrYoga />,
        bgColor: "#0063ff",
        delay: 0.3 ,
    },
    {
        id:2,
        title : "24/7 Tutor Availability",
        desc: " Our tutors are always available to respond as quick as possible for you",
        icon : <RxCountdownTimer/>,
        bgColor: "#73bc00",
        delay : 0.6,
    },
    {
        id:3,
        title : "Interactive Whiteboard",
        desc : "Our digital whiteboard equipped with audio and video chat fetures.",
        icon :<GoMortarBoard/> ,
        bgColor: "#fa6400",
        delay : 0.9,            
    },
    {
        id: 4,
        title : "Affordable Prices",
        desc : "Choose an expert tutor based on your budget and per hour.",
        icon :<GiMoneyStack/> ,
        bgColor: "#fe6baa",
        delay : 0.9,
},
]

const WhyChooseUs = () => {
  return <div className='bg-[#f9fafc]'>
    <div className="container py-24">
        {/* Header Section  */}
        <div className='flex flex-col justify-center items-center
        space-y-4 p-6 text-center  mb-5 max-w-[500px] mx-auto'> 
         
             <p className='text-orange-600 uppercase font-semibold'>Why Choose us</p>
           
            <h1 className='text-3xl font-semibold'>Benefits of online tutoring services with us</h1>
        </div>

        {/* Cards  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6
        
        '>
        {
            WhyChooseUsData.map((item) => {
                return(
                    <motion.div 
                   variants ={SlideLeft(item.delay)}
                   initial = "hidden"
                   whileInView={"visible"}
                    key={item.id}
                    className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] hover:!scale-110 hover:shadow-xl duration-300' >
                        {/* icons  */}
                        <div 
                        style ={{backgroundColor : item.bgColor}}
                        className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
                            <div className='text-2xl'>{item.icon}</div>
                        </div>
                        <p className=' font-semibold'>{item.title}</p>
                        <p className='text-sm text-gray-500'>{item.desc}</p>
                    </motion.div>
                )
            })
        }
        </div>



    </div>
      
    </div>

}

export default WhyChooseUs



