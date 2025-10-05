import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className=' w-screen flex flex-col items-center font-thin bg-[rgb(230,238,245)]'>
        
        <div className='m-10'>
            <ul className='md:w-[70vw] flex justify-between'>
                <li className='text-md text-gray-400'>WILD COPPER <br /> RIVER SALMON</li>
                <li className='text-4xl text-blue-800'>Fresh, Frozen, or Smoked --Taste the <br /> wild flavor</li>
                <li className='text-lg'>Logo</li>
            </ul>
        </div>

        <Image 
            src="/images/main.jpg"
            width={800}
            height={800}
            alt='main_image'
        />

    <div className='mt-8'>
        <Image 
            src="/images/wave.svg"
            width={1940}
            height={100}
            alt='wave_image'
        />
    </div>
    </div>
  )
}

export default Main