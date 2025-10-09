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
    setOpen(false); // Đóng
  };

  const navLinks = [
    { id: "features", label: t('features') },
    { id: "web3", label: t('web3') },
    { id: "trading", label: t('trading') },
    { id: "about", label: t('about') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src={logobgg} 
            alt="Bitgoget Logo" 
            width={150} 
            height={40} 
            priority
          />
        </Link>

        {/* Desktop  */}
        <nav className="text-gray-300 font-semibold hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="hover:text-[#f7a600] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* button and chuyen doi ngon ngu*/}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-black hover:bg-[#f7a600] rounded-md transition-all border-none">
            {t('login')}
          </Button>
          <Button
            onClick={() => handleScroll("Rew")} 
            className="bg-[#f7a600] text-black hover:bg-amber-500 hover:scale-105 transition-transform"
          >
            {t('signup')}
          </Button>
          <LanguageSwitcher />
        </div>
        
        {/*  Menu Icon (Mobile) */}
        <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button onClick={() => setOpen(!open)} className="ml-4 text-white">
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-gray-300 hover:text-[#f7a600] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="w-full border-t border-gray-800 my-4"></div>
            <Button variant="ghost" className="w-4/5 text-white hover:text-black hover:bg-[#f7a600] rounded-md transition-all border-none">
              {t('login')}
            </Button>
            <Button
              onClick={() => handleScroll("Rew")} 
              className="w-4/5 bg-[#f7a600] text-black hover:bg-amber-500"
            >
              {t('signup')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;