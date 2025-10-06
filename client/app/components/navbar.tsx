"use client";

import React, { useState } from "react";
import Link from "next/link";
import { robotoCondensed, aladin } from "../fonts";
import Dropdown from "../components/ui/dropdown";

const Navbar = () => {
  const [isDropdownVisibleatt, setDropdownVisibleatt] = useState(false);
  const [isDropdownVisibleshop, setDropdownVisibleshop] = useState(false);

  const around_the_table = {
    "ABOUT US": "/about",
    "RECIPES": "/recipes",
    "BLOGS": "/blogs",
  };

  const shop_wild_fish = {
    "SHOP ALL": "/products",
    "SALMON SHARE": "/products/salmon",
    "WILD FISH": "/products/wildfish",
    "PANTRY GOODS": "/products/pantry-goods",
    "ABOUT THE FISH": "/about-the-fish",
  };

return (
  <nav
    className="hidden md:block sticky top-0 z-50 bg-white text-gray-500 font-light"
    onMouseLeave={() => {
      setDropdownVisibleatt(false);
      setDropdownVisibleshop(false);
    }}
  >
    <ul
      className={`${robotoCondensed.className} p-9 hidden md:flex justify-between items-center text-sm tracking-widest`}
    >
      <Link
        href="/shop"
        className="hover:text-blue-800 cursor-pointer tracking-widest"
        onMouseEnter={() => {
          setDropdownVisibleshop(true);
          setDropdownVisibleatt(false);
        }}
      >
        SHOP WILD FISH
      </Link>

      <Link href="/about" className="hover:text-blue-800 cursor-pointer tracking-widest">
        KNOW YOUR FISHERMEN
      </Link>

      <Link
        href="/"
        className={`${aladin.className} text-3xl text-blue-800 cursor-pointer`}
      >
        Dock Fresh
      </Link>

      <li
        className="cursor-pointer hover:text-blue-800 tracking-widest"
        onMouseEnter={() => {
          setDropdownVisibleatt(true);
          setDropdownVisibleshop(false);
        }}
      >
        AROUND THE TABLE
      </li>

      <Link href="/contact" className="hover:text-blue-800 cursor-pointer tracking-widest">
        CONTACT US
      </Link>
    </ul>

    <Dropdown items={shop_wild_fish} isVisible={isDropdownVisibleshop} />
    <Dropdown items={around_the_table} isVisible={isDropdownVisibleatt} />
  </nav>
);
};

export default Navbar;
