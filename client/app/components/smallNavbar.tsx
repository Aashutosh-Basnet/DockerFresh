"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { aladin, robotoCondensed } from '../fonts'; 
import { Instagram } from 'lucide-react'; 
import { Facebook } from 'lucide-react';
import { BsTwitterX } from "react-icons/bs";

const SmallNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'SHOP WILD FISH', href: '/shop' },
    { label: 'KNOW YOUR FISHERMEN', href: '/about' },
    { label: 'RECIPES', href: '/recipes' },
    { label: 'BLOGS', href: '/blogs' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  const waveBg = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='%23ffffff' fill-opacity='0.1' d='M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3e%3c/path%3e%3c/svg%3e";

  return (
    <div className='sm:hidden sticky top-0 left-0 right-0 z-50'>
      <div className='bg-white px-5 py-4 flex items-center justify-between'>
        <Link href="/" className={`${aladin.className} text-3xl text-blue-800`}>
          Docker Fresh
        </Link>
          <button
  onClick={() => setIsOpen(!isOpen)}
  className='relative w-8 h-8 flex flex-col justify-center items-center z-[60]'
>
  <span
    className={`absolute h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out
      ${isOpen ? 'rotate-45 !bg-white' : '-translate-y-2'}`}
  ></span>
  <span
    className={`absolute h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ease-in-out
      ${isOpen ? 'opacity-0' : 'opacity-100'}`}
  ></span>
  <span
    className={`absolute h-0.5 w-6 bg-gray-800 transition-transform duration-300 ease-in-out
      ${isOpen ? '-rotate-45 !bg-white' : 'translate-y-2'}`}
  ></span>
</button>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`
          fixed inset-0 w-full h-full bg-[rgb(0,29,45)] text-white
          transition-all duration-500 ease-in-out flex flex-col
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{ backgroundImage: `url("${waveBg}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}
      >
        {/* NEW: Header inside the overlay */}
        <div className='absolute top-0 left-0 w-full px-5 py-4'>
            <Link href="/" onClick={() => setIsOpen(false)} className={`${aladin.className} text-3xl text-white`}>
              Docker Fresh
            </Link>
        </div>

        {/* Centered Navigation */}
        <div className='flex-1 flex items-center justify-center'>
            <nav className='text-center'>
            <ul>
                {menuItems.map((item, index) => (
                <li key={index} className='py-4'>
                    <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                        ${robotoCondensed.className}
                        relative inline-block text-2xl font-light tracking-wider uppercase
                        text-white transition-colors duration-300 hover:text-cyan-300
                        `}
                    >
                    <span className='block overflow-hidden'>
                        <span
                        className={`
                            inline-block transition-all duration-500 ease-in-out
                            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                        `}
                        style={{ transitionDelay: `${isOpen ? index * 100 : 0}ms` }}
                        >
                        {item.label}
                        </span>
                    </span>
                    <span
                        className={`
                        absolute bottom-[-5px] left-0 block h-px bg-cyan-300/50
                        transition-all duration-700 ease-in-out
                        ${isOpen ? 'w-full' : 'w-0'}
                        `}
                        style={{ transitionDelay: `${isOpen ? (index * 100) + 400 : 0}ms` }}
                    ></span>
                    </Link>
                </li>
                ))}
            </ul>
            </nav>
        </div>

        {/* NEW: Footer with social links */}
        <div className='absolute bottom-18 left-0 w-full px-5'>
            <div className='flex justify-center items-center gap-8'>
                <a href="#" className='text-white/70 hover:text-white transition-colors'><Instagram /></a>
                <a href="#" className='text-white/70 hover:text-white transition-colors'><Facebook /></a>
                <a href="#" className='text-white/70 hover:text-white transition-colors'><BsTwitterX /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNavbar;