// components/GetInTouch.tsx
import React from 'react'
import Image from 'next/image'
import { instrumentSerif, merriweather, robotoCondensed } from '@/app/fonts'
import FAQ from '../../ui/FAQ'; // Import the new FAQ component

const GetInTouch = () => {
  const HeadingFont = robotoCondensed; 
  const BodyFont = merriweather;

  return (
    <div className='bg-white text-black p-10 md:p-20 lg:p-28'>
      
      <h1 
        className={`${instrumentSerif.className} text-7xl md:text-9xl font-extrabold mb-10 tracking-widest uppercase text-blue-900`}
      >
        get in touch
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16'>

        <div className='order-1 flex flex-col'>
          <p className={`${BodyFont.className} text-xl mb-12 max-w-sm font-light`}>
            Please feel free to reach out with any questions you have about our wild caught seafood. It&apos;s just the two of us catching your fish and shipping it out to you, we&apos;re happy to connect and here to help!
          </p>

          <div className='space-y-10'>
            
            <div className='border-t border-gray-800 pt-4'>
              <span className={`${HeadingFont.className} text-sm text-gray-400 uppercase tracking-widest block mb-1`}>
                Customer Support
              </span>
              <a 
                className={`text-lg font-light hover:underline transition-colors duration-300 text-amber-500 underline`} 
                href="mailto:support@info.gmail.com"
              >
                support@info.gmail.com
              </a>
            </div>
            
            <div className='border-t border-gray-800 pt-4'>
              <span className={`${HeadingFont.className} text-sm text-gray-400 uppercase tracking-widest block mb-1`}>
                Telephone
              </span>
              <a 
                className={`text-lg font-light hover:underline transition-colors duration-300 text-amber-600`} 
                href="tel:+1234567890"
              >
                +1 (234) 567-890
              </a>
            </div>
            
            {/* Use the new FAQ component here */}
            <FAQ />

          </div>

        </div>

        <div className='order-2'>
          <div className='relative w-full h-[600px] md:h-[800px]'> 
            <Image
              src="/images/getintouch.webp"
              alt="Fisherman holding a large fish"
              layout="fill"
              objectFit="cover"
              objectPosition="center top" 
              className="" 
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default GetInTouch