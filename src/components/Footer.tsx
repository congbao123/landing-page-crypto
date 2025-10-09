'use client';

import { useTranslations } from 'next-intl';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import logobgg from '../../public/Img/logo-text.webp';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <Image 
              src={logobgg} 
              alt="CryptoTCB" 
              width={150} 
              height={50} 
              priority
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            {t('description')}
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f7a600] transition-colors">
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f7a600] transition-colors">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f7a600] transition-colors">
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Sản phẩm */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f7a600]">{t('products')}</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('spotTrading')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('futuresTrading')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('apiTrading')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('eWallet')}</li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f7a600]">{t('support')}</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('helpCenter')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('contact')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('reportBug')}</li>
            <li className="hover:text-[#f7a600] not-[]:cursor-pointer transition-colors">{t('systemStatus')}</li>
          </ul>
        </div>

        {/* Công ty */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#f7a600]">{t('company')}</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('aboutUs')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('careers')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('news')}</li>
            <li className="hover:text-[#f7a600] cursor-pointer transition-colors">{t('partners')}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        <p>{t('copyright')}</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-[#f7a600] transition-colors">{t('terms')}</a>
          <a href="#" className="hover:text-[#f7a600] transition-colors">{t('privacy')}</a>
          <a href="#" className="hover:text-[#f7a600] transition-colors">{t('cookies')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;