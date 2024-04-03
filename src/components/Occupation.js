import React, { useState } from 'react'
import student from "../assets/student.jpeg"
import professional from "../assets/professional.jpeg"
import parent from "../assets/parent.jpeg"
import partner from "../assets/partner.jpeg"
import teacher from "../assets/teacher.jpeg"
import other from "../assets/other.jpeg"

const Occupation = ({selected,setSelected}) => {

    const [clickedIndex,setClickedIndex] = useState(-1);


    const profiles = [
        {
            image:`${student}`,
            occupation:"Student",
            description:"or soon to be enrolled"   
        },
        {
            image:`${professional}`,
            occupation:"Professional",
            description:"pursuing a career"   
        },
        {
            image:`${parent}`,
            occupation:"Parent",
            description:"of a school-age child"
        },

        {
            image:`${partner}`,
            occupation:"Lifelong learner",
            description:""
        },
        
        {
            image:`${teacher}`,
            occupation:"Teacher",
            description:""
        },

        {
            image:`${other}`,
            occupation:"Other",
            description:""
        },
    ]

    function clickHandler(index) {
        setClickedIndex(index);
        setSelected(true);    
    }

    
    
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center w-full mt-4'>
        <p className='text-center font-extrabold mb-2 text-[15px]
        min-[1024px]:text-2xl min-[1024px]:font-extrabold min-[1024px]:mb-2'>Which describes you best?</p>
        <p className='text-center text-[9px] text-gray-500 
        min-[1024px]:text-sm lg:mt-3'>This will help us personalize your experience</p>
      </div>

        <div className='mt-4 w-[100%]
        min-[1024px]:mt-10'>
            {
                profiles.map((profile,index) => (
                    <div key={index}
                    onClick={() => clickHandler(index)}
                    className={`${clickedIndex === index ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]" : 
                                    "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"}
                                    h-[40px] w-[100%] flex items-center mb-3 rounded-sm cursor-pointer
                                    min-[1024px]:h-[55px]`}
                                    >
                        <img src={profile.image}
                        loading='lazy' alt='avatar'
                        className='h-[25px] w-[25px] object-cover ml-2
                        min-[1024px]:h-[35px] min-[1024px]:w-[35px] min-[1024px]:ml-4'
                        />

                        <p className='text-[10px] ml-2 min-[1024px]:text-sm min-[1024px]:ml-4'><span className=' font-medium'>{profile.occupation}</span> {profile.description}</p>


                    </div>
                ))
            }
        </div>
        

        
    </div>
  )
}

export default Occupation