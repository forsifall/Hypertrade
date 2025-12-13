"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import {FaqItem} from "../types";
import { useState } from "react";

export function AccordionItem ({ item }:{ item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-hyper-accent transition-colors focus:outline-none"
      >
        <span className="font-medium text-lg pr-8">{item.question}</span>
        {isOpen ? <ChevronUp className="text-hyper-accent flex-shrink-0" /> : <ChevronDown className="text-gray-500 flex-shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};