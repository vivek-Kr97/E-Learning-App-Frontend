import { div, text } from 'framer-motion/client';
import React from 'react'
import Slider from 'react-slick';
const Testinomials = [
  {
    id: 1,
    name: "John ",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://picsum.photos/102/102",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex",  
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://picsum.photos/101/101",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Arjun ",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 1,
    name: "Aniara ",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

 


const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false, 
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    respionsive: [
      {
        breakpoint: 10000,
        setting: {
          slideToShow: 3,
          slideToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        setting: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        setting: {
          slideToShow: 2,
          slideToScroll: 1,
       
        },
      },
    ],
  };
  return<div className='py-14 mb-10'>
      <div className="container">

        {/* header section  */}
          <div className='text-center'>
            <h1 
            className='uppercase font-semibold text-orange-500'
            >our Testinomials</h1>
            <p className='font-semibold capitalize text-3xl '> What our students say about us</p>
          </div>

        {/* card section  */}
        <div className='pt-5'>
          <Slider {...setting}>
          {
            Testinomials.map((item) => {
              return(
                <div key ={item.id}>
                  <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10'>
                    {/* upper Section  */}
                    <div className='flex justify-start items-center gap-5'>
                      <img src={item.img} alt="" 
                      className='w-16 h-16 rounded-full '
                      />
                      <div>
                        <p className='text-xl font-bold text-black/80 '>{item.name}</p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    {/* lower section  */}
                    <div className='py-6 space-y-4 '>
                      <p className='text-sm text-grey-500'>
                        {item.text}
                      </p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </Slider>
        </div>
      </div>
    </div>
}

export default Testimonial;
