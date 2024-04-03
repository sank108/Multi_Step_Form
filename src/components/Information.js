import React from 'react'
import pulley from "../assets/pulley.jpeg"

const Information = () => {
  return (
    <div className='flex flex-col items-center md:mt-[60px] md:mb-[55px]'>
        <div className='flex flex-col items-center  
       md:w-[650px] md:flex md:flex-row md:justify-around 
       lg:w-[700px] lg:gap-x-[150px]'>
            <img src={pulley} alt='pulley'
            className='h-[250px] lg:h-[400px]
            lg:ml-[-100px]'
            loading='lazy'
            />

            <div className='flex flex-col items-center md:max-w-[320px] md:items-start lg:min-w-[440px]'>
                <h1 className=' font-bold max-[767px]:mx-auto max-[767px]:mt-6
                lg:text-2xl lg:mb-4
                '>You're in the right place</h1>

                <p className='max-[767px]:text-center text-[10px] mb-[25px]
                lg:text-[14px]'>
                    Brilliant gets you hands-on to help improve your professional skills and knowledge.
                    You'll interact with concepts and solve fun problems in math, science, and computer science</p>
            </div>
        </div>
    </div>
  )
}

export default Information