import React, { useState } from 'react';
import { NavbarMenu } from '../../mockData/data';
import {MdComputer, MdMenu} from "react-icons/md";
import { motion, useTransform } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);
  return (
    <>
    <motion.div
    initial = {{opacity:0}}
    animate = {{opacity:1}}
    transition={{duration:0.5, delay:0.5}}
    >
        <div className='container flex justify-between items-center py-6' >
            {/*logo section*/}
            <div className='text-2xl flex items-center gap-2 font-bold'>
                <MdComputer className= "text-3xl text-secondary "/>
                <p>E-Learning</p>
            </div>


            {/*Menu section*/}
            <div className='hidden lg:block'>
            <ul className="flex items-center space-x-6">
                {
                    NavbarMenu.map((item) => {
                     return(
                        <li key= {item.id}>
                            <a href={item.link}
                            className='inline-block text-grey-600 text-sm xl:text-base px-1 py-2 xl:px-3 
                            hover:text-secondary transition-all duration-300 font-bold
                            '>
                                {item.title}
                            </a>
                        </li>
                        );
                    })
                }
            </ul>
            </div>
            {/*CTA button section*/}
            <div className='hidden lg:block space-x-6'>
                <button
                className='font-semibold'
                >Sign In</button>
                <button
                className='text-white bg-secondary font-semibold rounded-full px-6 py-2'
                >Register</button>
            </div>



            {/*Mobile Hamburger menu*/}
            <div className='lg:hidden text-4xl cursor-pointer'
            onClick={() => setIsopen(!isOpen)}
            >
                <MdMenu/>
            </div>

        </div>
    </motion.div>

    {/* mobile Sidebar section */}
    <ResponsiveMenu isOpen = {isOpen} />
    </>
  )
}
export default Navbar;

 