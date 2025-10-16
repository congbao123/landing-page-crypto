'use client';

import { useTranslations } from 'next-intl';
import mobileapp1 from "../../../public/Img/mobile-crypto1.jpg";
import mobileapp2 from "../../../public/Img/mobile-crypto2.jpg";

export const MobileAppSection = () => {
  const t = useTranslations('mobileApp');

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
    t('feature5'),
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl sm:rounded-3xl border border-gray-800 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-16">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <span className="text-[#f7a600] font-semibold text-xs sm:text-sm uppercase tracking-wider">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 mt-3 sm:mt-4 leading-tight">
              {t('heading_part1')}{" "}
              <span className="text-[#f7a600]">{t('heading_highlight')}</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Features list */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f7a600]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#f7a600]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full sm:w-auto bg-[#f7a600] text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-amber-500 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-[#f7a600]/30">
              {t('cta')}
            </button>
          </div>

          {/* Right: Phone mockups */}
          <div className="relative order-1 lg:order-2 py-8 sm:py-0">
            <div className="relative z-10 flex justify-center gap-2 sm:gap-4 max-w-md mx-auto lg:max-w-none">
              {/* Phone 1 */}
              <div className="w-36 sm:w-48 md:w-56 lg:w-64 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="bg-black rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 border-2 sm:border-4 border-gray-800 shadow-2xl">
                  <div className="bg-gray-900 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
                    <img
                      src={mobileapp1.src}
                      alt="Mobile App Screen 1"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="w-36 sm:w-48 md:w-56 lg:w-64 transform rotate-6 hover:rotate-0 transition-transform duration-300 mt-8 sm:mt-12">
                <div className="bg-black rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 border-2 sm:border-4 border-gray-800 shadow-2xl">
                  <div className="bg-gray-900 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
                    <img
                      src={mobileapp2.src}
                      alt="Mobile App Screen 2"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#f7a600]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};