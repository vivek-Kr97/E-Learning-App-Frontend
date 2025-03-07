import { color } from 'framer-motion'
import { div } from 'framer-motion/client';
import React from 'react'
import { FaBook } from 'react-icons/fa'
import { motion } from 'framer-motion'
 
const SubjectList = [
    {
       id :1,
       name:"Engineering",
       icon: <FaBook />,
       color: "#0063ff",
       delay :0.2,
    },
    {
        id :2,
        name:"English",
        icon: <FaBook />,
        color: "#00c986",
        delay :0.3,
     },
     {
        id :3,
        name:"Programming",
        icon: <FaBook />,
        color: "#922aee",
        delay :0.4,
     },
     {
        id :4,
        name:"Science",
        icon: <FaBook />,
        color: "#ea7516",
        delay :0.5,
     },
     {
        id :5,
        name:"History",
        icon: <FaBook />,
        color: "#075267",
        delay :0.6,
     },
     {
        id :6,
        name:"Physcology",
        icon: <FaBook />,
        color: "#986d1d",
        delay :0.7,
     },
     {
        id :7,
        name:"Web Design",
        icon: <FaBook />,
        color: "#b93838",
        delay :0.8,
     },
     {
        id :8,
        name:"See More",
        icon: <FaBook />,
        color: "#464646",
        delay :0.9,
     },
];
const SubjectCard = () => {
  return (
    <>
      <div className='container py-14 md:py-24'>
            {/* header  */}
            <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
                <h3
                className='uppercase font-semibold text-orange-500'
                > our tutor subjects</h3>
                <h1
                className='font-semibold text-3xl'
                >Find Online Tutor in Any subject</h1>
            </div>
            {/* cards  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    SubjectList.map((subject)=> {
                        return (
                            <motion.div
                            
                            key={subject.id}
                            initial={{opacity:0, x:-200}}
                            whileInView={{opacity:1, x:0}}
                            transition={{ type: "spring" , stiffness: 100, delay: subject.delay}}
                            className='border rounded-lg border-secondary p-4 flex justify-center items-center gap-4 hover:!scale-105 hover:shadow-lg duration-200 cursor-pointer'
                            > 
                               <div
                               style={{backgroundColor: subject.color+"20"}}
                               className='w-10 h-10 rounded-md flex justify-center items-center '> {subject.icon}</div>
                               <p>{subject.name}</p>

                            </motion.div>
                        )
                    })
                }
            </div>
      </div>
    </>
  )
}

export default SubjectCard;