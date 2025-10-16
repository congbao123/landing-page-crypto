'use client';

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react"; 

import logobgg from "../../public/Img/logo-text.webp"; 

const Header = () => {
  const t = useTranslations('header');
  const [open, setOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navLinks = [
    { id: "platform", label: t('platform') },
    { id: "features", label: t('features') },
    { id: "pricing", label: t('pricing') },
    { id: "about", label: t('about') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between">
        
        {/* Logo - Responsive sizing */}
        <Link href="/vi" className="flex items-center space-x-2 flex-shrink-0">
          <Image 
            src={logobgg} 
            alt="BitGoGet Logo" 
            width={120}
            height={32}
            className="w-24 h-auto sm:w-32 md:w-36 lg:w-40"
            priority
          />
        </Link>

        {/* Desktop Nav - Hidden on mobile and tablet */}
        <nav className="text-gray-300 font-semibold hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-[#f7a600] transition-colors duration-300 text-sm xl:text-base whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Buttons & Language Switcher - Desktop */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
          <Button 
            variant="ghost" 
            onClick={() => handleScroll("contact")}
            className="text-white  hover:text-black hover:bg-[#f7a600] rounded-md transition-all border-none text-sm xl:text-base px-3 xl:px-4"
          >
            {t('contact')}
          </Button>
          <Button
            onClick={() => handleScroll("demo")} 
            className="bg-[#f7a600] text-black hover:bg-amber-500 hover:scale-105 transition-transform text-sm xl:text-base px-3 xl:px-4"
          >
            {t('getDemo')}
          </Button>
          <LanguageSwitcher />
        </div>
        
        {/* Mobile/Tablet Menu Icon */}
        <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
          <LanguageSwitcher />
          <button 
            onClick={() => setOpen(!open)} 
            className="text-white p-2 hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu - Smooth animation */}
      <div 
        className={`lg:hidden bg-black border-t border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-3 sm:space-y-4 py-4 sm:py-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-gray-300 hover:text-[#f7a600] transition-colors text-base sm:text-lg font-medium w-full text-center py-2"
            >
              {link.label}
            </button>
          ))}
          <div className="w-4/5 border-t border-gray-800 my-2 sm:my-4"></div>
          <Button 
            variant="ghost" 
            onClick={() => handleScroll("contact")} 
            className="w-4/5 max-w-xs text-white hover:text-black hover:bg-[#f7a600] rounded-md transition-all border-none text-sm sm:text-base"
          >
            {t('contact')}
          </Button>
          <Button
            onClick={() => handleScroll("demo")} 
            className="w-4/5 max-w-xs bg-[#f7a600] text-black hover:bg-amber-500 text-sm sm:text-base"
          >
            {t('getDemo')}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;