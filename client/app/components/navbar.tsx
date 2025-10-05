"use client";

import React, { useState } from "react";
import Link from "next/link";
import { robotoCondensed, aladin } from "../fonts";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const around_the_table = {
    "ABOUT US": "/about",
    "RECIPES": "/recipes",
    "BLOGS": "/blogs",
  };

  return (
    <nav 
      className="hidden md:block sticky top-0 z-50 bg-white text-gray-400 font-light" 
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <ul
        className={`${robotoCondensed.className} p-9 hidden md:flex justify-between items-center text-md `}
      >
        <Link href="/shop" className="hover:text-blue-800 cursor-pointer">
          SHOP WILD FISH
        </Link>

        <Link href="/about" className="hover:text-blue-800 cursor-pointer">
          KNOW YOUR FISHERMEN
        </Link>

        <Link
          href="/"
          className={`${aladin.className} text-3xl text-blue-800 cursor-pointer`}
        >
          Docker Fresh
        </Link>

        <li 
          className="cursor-pointer hover:text-blue-800"
          onMouseEnter={() => setDropdownVisible(true)}
        >
          AROUND THE TABLE
        </li>

        <Link href="/contact" className="hover:text-blue-800 cursor-pointer">
          CONTACT US
        </Link>
      </ul>

      <div
        className={`
          ${robotoCondensed.className}
          absolute left-0 w-full bg-white backdrop-blur-sm py-6 z-[-1]
          overflow-hidden transition-all duration-300 ease-out
          ${isDropdownVisible
            ? 'opacity-100 max-h-96'
            : 'opacity-0 max-h-0'
          }
        `}
        style={{
          top: '100%', 
        }}
      >
      <div className="flex justify-between px-[20vw]">
          {Object.entries(around_the_table).map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-blue-900 hover:text-gray-700 text-lg transition-colors font-light"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;