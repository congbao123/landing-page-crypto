'use client';

import { useTranslations } from 'next-intl';
import { Twitter, Send, MessageCircle, Mail } from 'lucide-react';
import logobgg from '../../public/Img/logo-text.webp';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gradient-to-b from-black to-[#0a0a0a] border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Logo and Description - Full width on mobile */}
        <div className="mb-8 lg:mb-12">
          <div className="mb-4">
            <Image 
              src={logobgg} 
              alt="BitGoGet Logo" 
              width={140} 
              height={40}
              className="w-32 sm:w-36 h-auto"
              priority
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
            {t('description')}
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#f7a600] transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#f7a600] transition-all duration-300 group"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#f7a600] transition-all duration-300 group"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Column 1: Product */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">
              {t('product')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#platform" className="text-sm text-gray-400 hover:text-[#f7a600] transition-colors cursor-pointer block">
                  {t('whiteLabel')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-gray-400 hover:text-[#f7a600] transition-colors cursor-pointer block">
                  {t('features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 hover:text-[#f7a600] transition-colors cursor-pointer block">
                  {t('pricing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">
              {t('company')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-[#f7a600] transition-colors cursor-pointer block">
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#f7a600] transition-colors cursor-pointer block">
                  {t('contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#f7a600] transition-colors cursor-pointer block">
                  {t('blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 text-white">
              {t('getInTouch')}
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:support@bitgoget.com" 
                className="flex items-start gap-2 text-sm text-gray-400 hover:text-[#f7a600] transition-colors break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="break-all">support@bitgoget.com</span>
              </a>
              <button className="w-full bg-[#f7a600] text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-amber-500 transition-all duration-300 text-sm whitespace-nowrap">
                {t('contactSales')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              {t('copyright')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 hover:text-[#f7a600] transition-colors whitespace-nowrap">
                {t('privacy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#f7a600] transition-colors whitespace-nowrap">
                {t('terms')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#f7a600] transition-colors whitespace-nowrap">
                {t('legal')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;