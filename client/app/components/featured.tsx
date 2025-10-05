"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ui/productCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Featured = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
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
    <section className="px-6 py-16 md:px-20 bg-white">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <p className="text-lg md:text-xl text-gray-500 tracking-wide uppercase">
          WILD COPPER <br className="hidden md:block" /> RIVER SALMON
        </p>
        <p className="text-2xl md:text-3xl text-blue-800 leading-snug max-w-3xl font-semibold">
          Bringing you wild Alaska seafood caught onboard our small boats,
          sustainably harvested from cold, wild waters.
        </p>
        <p className="text-lg font-bold text-gray-400 md:text-right">
          <span className="text-blue-700">DOCKER</span> FRESH
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-blue-100"
        >
          <ChevronLeft className="text-blue-700" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {products.map((p, i) => (
              <div
                key={i}
                className="flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_33.33%] px-3"
              >
                <ProductCard image={p.image} title={p.title} price={p.price} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-blue-100"
        >
          <ChevronRight className="text-blue-700" />
        </button>
      </div>
    </section>
  );
};

export default Featured;
