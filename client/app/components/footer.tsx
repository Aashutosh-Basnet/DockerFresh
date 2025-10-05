import React from "react";


import { bungee } from "../fonts";
import Button from "./ui/button";
import { playfairDisplay} from '../fonts'

const Footer = () => {
  return (
    <footer className={`bg-[rgb(71,166,217)] text-white rounded-t-4xl overflow-hidden`}>
      <div className="flex flex-col lg:flex-row justify-between m-10 gap-10">
        <div className="flex flex-col gap-5 w-[40vw]">
          <div className="text-2xl md:text-3xl leading-snug font-semibold">
            <p className={`${playfairDisplay.className}`}>
              See how we can help <br /> you — get in touch today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button text="EMAIL US" />
            <Button text="WHATSAPP" />
          </div>
        </div>

        <div className="flex-1">
          <div className="">
            <h3 className="text-xl font-semibold uppercase tracking-wider border-b border-white/30 pb-6 mb-4">
              Help
            </h3>
            <ul className="space-y-4 text-blue-100 text-xl">
              <li className="pb-1 border-b border-white/30">
                <a
                  href="mailto:support@dockerfresh.com"
                  className="block text-white font-medium hover:text-gray-300 transition-colors duration-300"
                >
                  support@dockerfresh.com
                </a>
              </li>
              <li className="pb-1 border-b border-white/30">
                <a
                  href="tel:+1234567890"
                  className="block text-white font-medium hover:text-gray-300 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pb-1 border-b border-white/30">
                <a
                  href="#"
                  className="block text-white font-medium hover:text-gray-300 transition-colors duration-300"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li className="text-xl text-blue-200/70">
                Please contact us with any questions you may have. We&apos;re happy to help.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle logo */}
      <div className="text-3xl sm:text-5xl lg:text-7xl flex items-center justify-center pt-8 text-center">
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
