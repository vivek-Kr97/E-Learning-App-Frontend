import React from 'react'
import CountUp from 'react-countup';

const NumberCounter = () => {
  return (
    <div className='bg-secondary text-white '>
        <div className="container grid grid-cols-2 md:grid-cols-4 py-5">
        
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                    <CountUp
                        start ={0}
                        end={900}
                        duration ={3}
                        enableScrollSpy ={true}
                        scrollSpyOnce ={true}
                    />
                </p>
                <p>Expert tutors</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                <CountUp 
                end ={20000}
                separator=','
                suffix='+'
                duration={3}
                enableScrollSpy ={true}
                scrollSpyOnce ={true} />

                </p>
                <p>Hours content</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                <CountUp 
                end ={300}
             
                duration={3}
                enableScrollSpy ={true}
                scrollSpyOnce ={true} />

                </p>
                <p>Subject and courses</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                <CountUp 
                start={10000}
                end ={170000}
                separator=','
                suffix='+'
                duration={3}
                enableScrollSpy ={true}
                scrollSpyOnce ={true} />

                </p>
                <p>Active students  </p>
            </div>
           
        </div>
        </div>
  
  )
}

export default NumberCounter
