import React from 'react'
import {robotoCondensed} from '../fonts'

const Intro = () => {
  return (
    <div className=''>
        <p className={`${robotoCondensed.className} md:w-[50vw] text-center mx-auto m-6 mt-32 text-sm font-extralight text-gray-600 tracking-widest`}>    
            WE&apos;RE SMALL BOAT HARVESTORS
        </p>
        <p className='w-[80vw] md:w-[50vw] text-center mx-auto mb-20 text-xl md:text-4xl font-thin text-blue-900'>
            Bringing you wild Alaska seafood straight from the fisherman, each fish carefully caught and sustainably harvested. Our business is run by the two of us and we strive to keep the process simple: catch fish, handle each one carefully, and ship directly to small markets, chefs and home cooks.
        </p>
    </div>
  )
}

export default Intro