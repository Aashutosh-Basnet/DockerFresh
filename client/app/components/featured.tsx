"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ui/productCard";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { instrumentSerif } from "../fonts";
import Image from "next/image";

const Featured = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const products = [
    { image: "/images/products/product1.webp", title: "Wild Sockeye Fillet", price: "$10" },
    { image: "/images/products/product2.webp", title: "King Salmon Portion", price: "$20" },
    { image: "/images/products/product3.webp", title: "Smoked Coho Pack", price: "$30" },
    { image: "/images/products/product1.webp", title: "Alaskan Halibut", price: "$25" },
    { image: "/images/products/product2.webp", title: "Chum Salmon", price: "$15" },
  ];

  return (
    <section className="px-4 py-8 md:px-20 md:py-16 bg-blue-100">
      {/* Header Section */}
      <div className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <p className="text-base md:text-xl text-gray-500 tracking-wide uppercase text-center md:text-left">
          WILD COPPER <br className="hidden md:block" /> RIVER SALMON
        </p>
        <p className={`${instrumentSerif.className} text-xl md:text-3xl text-blue-800 leading-snug tracking-wide text-center max-w-3xl font-bold`}>
          Bringing you wild Alaska seafood caught <br className="hidden md:block" /> 
          onboard our small boats, sustainably harvested <br className="hidden md:block" /> 
          from cold, wild waters.
        </p>
        <button className="border border-amber-400 text-amber-600 px-6 py-3 md:p-4 cursor-pointer hover:scale-102 transition-transform">
          <span className="text-sm md:text-base">SHOP OUR FISH</span>
        </button>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        {/* Arrows - Hidden on mobile */}
        <button
          onClick={scrollPrev}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-blue-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33.33%] pl-2 pr-4 md:px-3"
              >
                <ProductCard image={p.image} title={p.title} price={p.price} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-blue-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
        </button>
      </div>
      <div className="flex justify-center items-center">
<button
  className="group flex items-center gap-2 mt-6 text-orange-400 font-medium
             underline underline-offset-4 decoration-orange-400/50
             hover:decoration-orange-400 hover:text-orange-500
             transition-all duration-300 ease-out cursor-pointer" 
>
  more..
  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
</button>
      </div>
      <div>
        <Image
          src="/images/verticalWave.svg"
          alt="Featured Seal"
          width={300}
          height={300}
          className="mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default Featured;