import React from "react";


import { bungee } from "../fonts";
import Button from "./ui/button";
import {robotoCondensed, ptSerif} from '../fonts'

const Footer = () => {
  return (
    <footer className={` ${robotoCondensed.className} bg-[rgb(71,166,217)] text-white rounded-t-4xl overflow-hidden`}>
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between m-10 gap-10">
        {/* Left call-to-action */}
        <div className="flex flex-col gap-5 w-[40vw]">
          <div className="text-2xl md:text-3xl leading-snug font-semibold">
            <p className={`${ptSerif.className}`}>
              See how we can help <br /> you — get in touch today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button text="EMAIL US" />
            <Button text="WHATSAPP" />
          </div>
        </div>

        {/* Right help section */}
        <div className="flex-1">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold uppercase tracking-wider border-b border-white/30 pb-2 mb-4">
              Help & Contact
            </h3>
            <ul className="space-y-4 text-blue-100 text-xl">
              <li className="border-b border-white/30">
                <a
                  href="mailto:support@dockerfresh.com"
                  className="block text-white font-medium hover:text-amber-300 transition-colors duration-300"
                >
                  support@dockerfresh.com
                </a>
              </li>
              <li className="border-b border-white/30">
                <a
                  href="tel:+1234567890"
                  className="block text-white font-medium hover:text-amber-300 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="border-b border-white/30">
                <a
                  href="#"
                  className="block text-white font-medium hover:text-amber-300 transition-colors duration-300"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li className="pt-3 text-xl text-blue-200/70">
                Please contact us with any questions you may have. We&apos;re happy to help.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle logo */}
      <div className="text-4xl sm:text-8xl lg:text-9xl flex items-center justify-center pt-10 text-center">
        <p className={`${bungee.className}`}>DOCKERFRESH</p>
      </div>

      {/* Bottom bar */}
      <div className="m-5 border-t border-white/30 pt-4">
        <ul className="flex flex-col sm:flex-row justify-between items-center text-sm text-blue-100/80">
          <div className="flex gap-8 mb-2 sm:mb-0">
            <li>© Relevant 2025</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
          </div>
          <li className="hover:text-white cursor-pointer transition-colors duration-300">
            ↑ Back to top
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
