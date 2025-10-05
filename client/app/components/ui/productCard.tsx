import React from 'react'
import Image from 'next/image'
import {ptSerif} from '../../fonts'

interface productCardProps {
    image: string;
    title: string;
    price: string | number;
}

const ProductCard: React.FC<productCardProps> = ({image, title, price}) => {
  return (
    <div className=''>
        <Image 
            src={image}
            height={400}
            width={400}
            alt = "product_image"
            className=''
        />
        <div className='p-2 m-3 font-bold '>
            <p className={`${ptSerif.className} text-center text-xl uppercase text-blue-800`}>{title}</p>
            <p className='text-center text-amber-500'>{price}</p>
        </div>
    </div>
  )
}

export default ProductCard