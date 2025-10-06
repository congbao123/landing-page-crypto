"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from "./Button";
import logobgg from "../../public/Img/logo-text.webp";
import Image from "next/image";
import { GetStaticPropsContext } from "next/types";

const Header = () => {
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 animate-fade-in">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
          </div>
          <Image 
            src={logobgg} 
            alt={t('header.brand')} 
            width={150} 
            height={40} 
            priority
          />
        </div>

        <nav className="text-gray-500 font-bold hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-muted-foreground hover:text-amber-700 transition-all duration-300 hover:scale-105"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("web3")}
            className="text-muted-foreground hover:text-amber-700 transition-all duration-300 hover:scale-105"
          >
            Web3
          </button>
          <button
            onClick={() => scrollToSection("trading")}
            className="text-muted-foreground hover:text-amber-700 transition-all duration-300 hover:scale-105"
          >
            Trading
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-amber-700 transition-all duration-300 hover:scale-105"
          >
            About
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-amber-50 hover:text-black hover:bg-amber-700 rounded-md hover:scale-105 transition-transform border-none">
              Login
          </Button>
          <Button className="hover:scale-105 hover:text-black">
            Signup
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;