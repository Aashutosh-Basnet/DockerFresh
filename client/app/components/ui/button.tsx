import React from 'react'
import { GoDot } from "react-icons/go";
import {robotoCondensed} from '../../fonts'

interface buttonProps {
    text: string;
}

const Button: React.FC<buttonProps> = ({text}) => {
  return (
    <div className='bg-[rgb(155,202,227)] text-white rounded-3xl p-2 px-4 hover:scale-102 duration-300 cursor-pointer'>
        <button className={`${robotoCondensed.className} cursor-pointer text-xs flex items-center justify-center`}>
            <GoDot className='inline mr-4'/>
            {text}
        </button>
    </div>
  )
}

export default Button