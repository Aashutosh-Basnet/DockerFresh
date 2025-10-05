import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className='w-full flex flex-col items-center font-thin bg-[rgb(230,238,245)]'>
        
        <div className='m-4 md:m-10 w-full'>
            <ul className='w-full px-4 md:w-[70vw] mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-0'>
                <li className='text-sm md:text-md text-gray-400 text-center md:text-left'>
                    WILD COPPER <br /> RIVER SALMON
                </li>
                <li className='text-2xl md:text-4xl text-blue-800 text-center md:text-left'>
                    Fresh, Frozen, or Smoked --Taste the <br className='hidden md:block' /> wild flavor
                </li>
                <li className='text-base md:text-lg text-center md:text-left'>Logo</li>
            </ul>
        </div>

        <div className='max-w-[90vw] px-4 md:px-0'>
            <Image 
                src="/images/main.jpg"
                width={900}
                height={1200}
                alt='main_image'
                className='mx-auto'
                priority
            />
        </div>

        <div className='mt-8 w-full'>
            <Image 
                src="/images/wave.svg"
                width={1940}
                height={100}
                alt='wave_image'
                className='w-full'
            />
        </div>
    </div>
  )
}

export default Main