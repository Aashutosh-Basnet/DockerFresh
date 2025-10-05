import React from "react";
import Link from "next/link";
import { robotoCondensed, aladin } from "../fonts";

const Navbar = () => {
  const around_the_table = {
    "ABOUT US": "/about",
    "RECIPES": "/recipes",
    "BLOGS": "/blogs",
  };

  return (
    <nav className="relative z-50">
      {/* Wrapper around everything for hover control */}
      <div className="group relative">
        <ul
          className={`${robotoCondensed.className} p-9 hidden md:flex justify-between font-bold text-md text-gray-400`}
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

          {/* Dropdown trigger */}
          <li className="cursor-pointer hover:text-blue-800">AROUND THE TABLE</li>

          <Link href="/contact" className="hover:text-blue-800 cursor-pointer">
            CONTACT US
          </Link>
        </ul>

        {/* Full-width dropdown (fixed visual, but hover-stable due to group wrapper) */}
        <div
          className="absolute left-0 top-full w-[99vw] bg-white/95 backdrop-blur-sm py-6 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 shadow-md"
        >
          <div className="w-full flex justify-between px-20">
            {Object.entries(around_the_table).map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-gray-600 hover:text-blue-800 text-lg transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile placeholder */}
      <div className="h-screen w-screen sm:hidden bg-blue-800"></div>
    </nav>
  );
};

export default Navbar;
