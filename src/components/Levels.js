import React, { useState } from 'react'

const Levels = ({selected,setSelected}) => {
  
  const [clickedIndex,setClickedIndex] = useState(-1);

  const levels = [
    {
      sum:"5 x 1/2",
      type:"Arithmetic",
      level:"Introductory"
    },
    {
      sum:"3x + 5 = 4",
      type:"Basic Algebra",
      level:"Foundational"
    },
    {
      sum:"|2x - 7| = 15",
      type:"Intermediate Algebra",
      level:"Intermediate"
    },
    {
      sum:"∫x³ dx",
      type:"Calculus",
      level:"Advanced"
    },
  ]

  function clickHandler(index) {
    setClickedIndex(index);
    setSelected(true);
    
  }

  return (
    <div className='flex flex-col items-center w-[100%] max-[767px]:mb-6 md:mt-10 max-[767px]:ml-[-2px]'>
        <h1 className='text-[15px] mt-3 font-bold mb-1 text-center
        md:text-[26px] md:mt-[50px] md:mb-4 md:w-[80vw]
        '>What is your math comfort level?</h1>

        <p className='text-[14px] text-center mb-1 
        md:w-[600px] md:text-[14px] md:mb-10'>Choose the highest level you feel confident in – you can always adjust later</p>

        <div className='flex flex-col gap-y-2
        md:flex-row md:gap-x-2 md:mb-10
        lg:gap-x-4'>
          {
            levels.map((level,index) => (
              <div
              key={index}
              onClick={() => clickHandler(index)}
              className={`${clickedIndex === index ? "border-orange-400" : "border-gray-400"}
              shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
              cursor-pointer transition-all duration-200
              flex flex-col justify-center text-center h-[95px] w-[120px] border-[2px] rounded-md
              
              md:h-[110px] md:w-[135px]
              lg:h-[160px] lg:w-[180px]`}>
                <p className='text-[14px] font-light mt-1
                lg:text-[18px]'>{level.sum}</p>
                <p className='text-[12px] mt-2
                lg:text-[16px]'>{level.type}</p>
                <p className='text-[14px] text-gray-600
                lg:text-[16px]'>{level.level}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Levels