import React from "react";
import Image from "next/image";
import { playfairDisplay } from "../../fonts";

interface productCardProps {
  image: string;
  title: string;
  price: string | number;
}

const ProductCard: React.FC<productCardProps> = ({ image, title, price }) => {
  return (
      <div className="cursor-pointer group relative overflow-hidden">
        <div className="relative w-full h-[550px]">
          <Image
            src={image}
            height={600}
            width={600}
            alt="product_image"
            className="transition-transform duration-200 ease-out group-hover:scale-101 object-cover w-full h-full"
          />
          <div
            className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-500 ease-out"
          ></div>
        </div>

        <div className="p-2 m-3 font-extralight">
          <p
            className={`${playfairDisplay.className} text-center text-xl uppercase text-blue-800`}
          >
            {title}
          </p>
          <p className="text-center text-amber-500">{price}</p>
        </div>
      </div>
  );
};

export default ProductCard;
