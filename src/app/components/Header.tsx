"use client";

import Link from "next/link";
import { useState } from "react";
// Update the import path to the correct location of Button, for example:
import { Button } from "./Button";

const Header = () => {
    const [open, setOpen] = useState(false);


    return (
        <header className="fixed top-0 w-full z-50 border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 transition-all duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2 animate-fade-in">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
   
                    </div>
                    <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 tracking-tight hover:tracking-wide transition-all duration-300">
    CryptoTCB
  </span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <button
                        // onClick={() => scrollToSection("features")}
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                    >
                        Tính năng
                    </button>
                    <button
                        // onClick={() => scrollToSection("web3")}
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                    >
                        Web3
                    </button>
                    <button
                        // onClick={() => scrollToSection("trading")}
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                    >
                        Giao dịch
                    </button>
                    <button
                        // onClick={() => scrollToSection("about")}
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                    >
                        Về chúng tôi
                    </button>
                </nav>

                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="hidden sm:inline-flex hover:bg-amber-700 rounded-md hover:scale-105 transition-transform border-none">
                        Đăng nhập
                    </Button>
                    <Button className="hover:scale-105 bg-amber-700 rounded-md transition-transform shadow-lg">Đăng ký ngay</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
