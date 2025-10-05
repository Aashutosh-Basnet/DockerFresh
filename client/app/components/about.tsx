import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-around mx-4 md:mx-10'>
            <div className='flex flex-col md:flex-row gap-5 w-full md:w-auto'>
                <div className='flex flex-col gap-3'>
                    <div className='m-5'>
                        <p className='text-xl md:text-2xl text-gray-600 text-center md:text-left'>
                            MICHEAL & <br />
                            NELLY HAND
                        </p>
                    </div>
                    <div className='flex flex-row md:flex-col gap-3 justify-center'>
                        <Image 
                            className='rounded-xl hover:scale-102 transition-transform duration-400 ease-out cursor-pointer w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover' 
                            src="/images/main_image1.jpg" 
                            height={200} 
                            width={200} 
                            alt="Fisherman portrait 1" 
                        />
                        <Image 
                            className='rounded-xl hover:scale-102 transition-transform duration-400 ease-out cursor-pointer w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover' 
                            src="/images/main_image2.jpg" 
                            height={200} 
                            width={200} 
                            alt="Fisherman portrait 2" 
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center md:justify-start'>
                    <Image 
                        className='rounded-2xl hover:scale-102 transition-transform duration-400 ease-out cursor-pointer w-full md:w-[400px] h-auto' 
                        src="/images/main_image3.jpg" 
                        height={300} 
                        width={400} 
                        alt="Fishing scene" 
                    />
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center my-10'>
            <Link href="" className='underline text-orange-400'>LEARN MORE</Link>
        </div>
    </div>
  )
}

export default about