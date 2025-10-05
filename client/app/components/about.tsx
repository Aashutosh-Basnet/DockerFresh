import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <div className=''>
        <div className='flex justify-around mx-10'>
            <div className='flex flex-col md:flex-row gap-5'>

            <div className='flex flex-col gap-3'>
                    <div className='m-5'>
                        <p className='text-2xl'>
                            MICHEAL & <br />
                            NELLY HAND
                        </p>
                    </div>
                <Image className='rounded-xl' src = "/images/main_image1.jpg" height = {200} width = {200} alt = "" />
                <Image className='rounded-xl' src = "/images/main_image2.jpg" height = {200} width = {200} alt = "" />
            </div>
            <div className='flex items-center'>
                <Image className='rounded-2xl' src = "/images/main_image3.jpg" height = {300} width = {400} alt = "" />
            </div>
            </div>
        </div>
            <div className='flex items-center justify-center m-5'>
            <Link href = "" className='underline text-orange-400'>LEARN MORE</Link>
            </div>
    </div>
  )
}

export default about