// components/FAQ.tsx
"use client";

import React, { useState } from "react";
import { robotoCondensed } from "@/app/fonts"; // Make sure the path is correct

const faqData = [
  {
    question: "How can I get in touch for partnerships?",
    answer:
      "We're always open to new partnerships! Please email us directly at partnerships@dockerfresh.com with your proposal, and our team will get back to you as soon as possible.",
  },
  {
    question: "Where can I find information on campaigns?",
    answer:
      "All our latest campaigns and promotions are announced on our social media channels and through our newsletter. Be sure to follow us and subscribe to stay updated!",
  },
  {
    question: "How can I purchase your seafood?",
    answer:
      "You can browse our full selection of wild-caught seafood and place an order directly through our online 'Shop' page. We ship to all locations within the country.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If the clicked question is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h3
        className={`${robotoCondensed.className} text-2xl font-bold pt-10 uppercase tracking-wider mb-4`}
      >
        Frequently Asked Questions
      </h3>
      <div className="space-y-2 border-t border-gray-800">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-base font-medium">{item.question}</span>
              <span className="text-2xl font-light">
                {openIndex === index ? "—" : "+"}
              </span>
            </button>
            <div
              className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${openIndex === index ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"}
              `}
            >
              <p className="text-gray-600 font-light">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;