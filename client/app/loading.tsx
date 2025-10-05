import React from 'react'
import { GiCirclingFish } from "react-icons/gi";

const Loading = () => {
  return (
    <div className='h-screen w-screen bg-blue-900 flex justify-center items-center text-white'>
            <GiCirclingFish size={40}/>
    </div>
  )
}

export default Loading