"use client";

import React from "react";
import Link from "next/link";
import { robotoCondensed } from "../../fonts";

interface DropdownProps {
  items: Record<string, string>;
  isVisible: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, isVisible }) => {
  return (
    <div
      className={`
        ${robotoCondensed.className}
        absolute top-full left-0 w-full bg-white py-6 z-40
        transition-all duration-280 
        ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <div className="flex justify-between px-[20vw]">
        {Object.entries(items).map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="text-blue-900 hover:text-gray-700 text-sm tracking-widest transition-colors font-light"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;