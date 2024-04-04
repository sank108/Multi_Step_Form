import React from 'react'
import symbol from "../assets/course_symbol.png"

const Courses = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[500px] mt-[-40px] max-[767px]:mt-[-100px]'>
      <h1 className='text-[14px] font-bold w-[90vw] text-center mb-2
      md:text-[22px] md:mb-3
      lg:text-[30px]'>
        Learning paths based on your answers
      </h1>
      <p className='text-[12px] text-center w-[90vw] mb-4 text-gray-800 font-normal md:mb-4
      lg:text-[14px]'>Choose one to get started. You can switch anytime</p>

      <div className='md:flex md:gap-x-4'>
        <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                      h-[90px] w-[240px] relative mt-[20px] cursor-pointer
                      md:h-[120px] md:w-[290px]
                      lg:h-[160px] lg:w-[330px]
                      '>
        
        
        <div className='absolute h-[20px] w-[80px] rounded-full bg-yellow-500 font-semibold
        text-[8px] flex justify-center items-center ml-[80px] mt-[-14px]
        md:ml-[107px]
        lg:h-[20px] lg:w-[80px] lg:ml-[125px]
        '>MOST POPULAR</div>

        <div className='flex items-center h-full justify-center'>
          <p className='w-[130px] text-[10px] ml-3
          md:text-[12px] md:w-[150px]
          lg:text-[13px] lg:w-[170px]
          '><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability</p>
          <img src={symbol} alt='symbol' loading='lazy'
          className='h-[100px] w-[100px] md:h-[120px] md:w-[120px] md:mt-[-4px]'
          />
        </div>
        

        </div>
      
        <div className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                        h-[90px] w-[240px] relative mt-[20px] cursor-pointer
                        md:h-[120px] md:w-[290px]
                        lg:h-[160px] lg:w-[330px]
                        '>
          
          
          

          <div className='flex items-center h-full justify-center'>
            <p className='w-[130px] text-[10px] ml-3
            md:text-[12px] md:w-[150px]
            lg:text-[13px] lg:w-[170px]
            '><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability</p>
            <img src={symbol} alt='symbol' loading='lazy'
            className='h-[100px] w-[100px] md:h-[120px] md:w-[120px] md:mt-[-4px]'
            />
          </div>
          

        </div>
      </div>
      
    </div>
  )
}

export default Courses