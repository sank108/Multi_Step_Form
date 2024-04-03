import React from 'react'
import congratulate from "../assets/congratulate.jpeg"
import { IoStar } from "react-icons/io5";

const FinalPage = () => {
  return (
    <div className='flex flex-col items-center
    md:flex md:flex-row md:items-center
    max-[767px]:ml-[-9px]
    md:ml-[-80px] md:gap-x-[70px] md:mt-[120px]
    min-[1440px]:ml-[-80px] min-[1440px]:gap-x-[150px]
    md:mb-[80px]'>
        <img src={congratulate} alt='congo' loading='lazy'
        className='h-[200px] w-[150px] mt-[-30px] object-contain
        md:h-[150px] md:w-[200px] md:mt-2
        lg:h-[240px] lg:w-[280px]
        ' />

        <div className='flex flex-col items-center gap-y-3 
        md:items-start md:w-[300px]'>
            <h2 className='font-bold
            md:text-[20px] md:mb-2
            lg:text-[26px] lg:mb-4'>You're on your way!</h2>
            <div className='flex
            md:text-[20px]
            lg:text-[26px] gap-x-2'>
                <IoStar className=' text-yellow-500'/>
                <IoStar className=' text-yellow-500'/>
                <IoStar className=' text-yellow-500'/>
                <IoStar className=' text-yellow-500'/>
                <IoStar className=' text-yellow-500'/>
            </div>

            <p className='text-[12px] max-[767px]:text-center italic font-light
            md:min-w-[300px] md:text-[10px]
            lg:min-w-[600px] lg:text-[16px] '>
                "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
            </p>

            <p className='text-[12px] left-0 font-light lg:text-[16px] italic'>–Jacob S.</p>
        </div>
    </div>
  )
}

export default FinalPage