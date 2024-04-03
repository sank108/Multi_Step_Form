import React, { useState } from 'react'
//import hexagon from "../assets/soccer-ball_10367101.png"
import arrow from "../assets/arrows.jpeg"
import target from "../assets/target.jpeg"
import eyes from "../assets/eyes.jpeg"
import graph from "../assets/image (3).jpeg"
import hexagon from "../assets/hexagon.jpeg"

const InterestedField = ({selected,setSelected}) => {

    const [clickedIndex,setClickedIndex] = useState(-1);

    const interests = [
        {
            image:`${graph}`,
            description:"Learning specific skills to advance my carrer"   
        },
        {
            image:`${hexagon}`,
            description:"Exploring new topics I'm interested in"   
        },
        {
            image:`${arrow}`,
            description:"Refreshing my math foundations"
        },

        {
            image:`${target}`,
            description:"Exercising my brain to stay sharp"
        },
        
        {
            image:`${eyes}`,
            description:"Something else"
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
        min-[1024px]:text-2xl min-[1024px]:font-extrabold min-[1024px]:mb-2 max-[427px]:w-[100vw]'>Which are you most interested in?</p>
        <p className='text-center text-[9px] text-gray-500 
        min-[1024px]:text-sm lg:mt-3'>Choose just one. This will help us get you started (but won't limit your experience).</p>
      </div>

        <div className='mt-4 w-[100%]
        min-[1024px]:mt-10'>
            {
                interests.map((interest,index) => (
                    <div 
                    key={index}
                    onClick={() => clickHandler(index)}
                    className={`${clickedIndex === index ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]" : 
                                    "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"}
                                    h-[40px] w-[100%] flex items-center mb-3 rounded-sm cursor-pointer
                                    min-[1024px]:h-[55px]`}
                                    >
                        <img src={interest.image}
                        loading='lazy' alt='avatar'
                        className='h-[25px] w-[25px] object-cover ml-2
                        min-[1024px]:h-[35px] min-[1024px]:w-[35px] min-[1024px]:ml-4'
                        />

                        <p className='text-[10px] ml-2 min-[1024px]:text-sm min-[1024px]:ml-4'>{interest.description}</p>


                    </div>
                ))
            }
        </div>
        

        
    </div>
  )
}

export default InterestedField