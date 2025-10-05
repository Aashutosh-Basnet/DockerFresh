// components/ui/dropdown.tsx

import React from "react";
import Link from "next/link"; // Use Next.js Link

interface DropdownProps {
  items: Record<string, string>; // key: label, value: link
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    // Add absolute positioning, styling, and z-index
    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm py-6 shadow-md z-10">
      <ul className="w-full flex justify-center gap-16 px-20">
        {Object.entries(items).map(([label, href]) => (
          <li
            key={label}
            className="text-gray-600 hover:text-blue-800 text-lg transition-colors font-semibold"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;