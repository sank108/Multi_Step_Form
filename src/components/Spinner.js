import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen
    max-[427px]:ml-[0px] max-[427px]:mt-[-20px]'>
      <div className='loader'></div>
      <div className='mt-6'>
        <pre className='text-center max-[427px]:text-[10px]'>Finding learning path recommendations for you based on <br/>
          your responses
        </pre>
      </div>
    </div>
  )
}

export default Spinner