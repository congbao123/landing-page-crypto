'use client';

import React, { useState } from 'react';
import { User, Terminal, Network, Wallet } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      icon: User,
      titleKey: 'step1_title',
      descKey: 'step1_desc',
      detailsKey: 'step1_details'
    },
    {
      id: 2,
      icon: Terminal,
      titleKey: 'step2_title',
      descKey: 'step2_desc',
      detailsKey: 'step2_details'
    },
    {
      id: 3,
      icon: Network,
      titleKey: 'step3_title',
      descKey: 'step3_desc',
      detailsKey: 'step3_details'
    },
    {
      id: 4,
      icon: Wallet,
      titleKey: 'step4_title',
      descKey: 'step4_desc',
      detailsKey: 'step4_details'
    }
  ];

  return (
    <section className="w-full bg-black py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7a600] bg-opacity-10 px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 border border-[#f7a600] border-opacity-20">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wider">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            {t('heading_part1')} <span className="text-[#f7a600]">{t('heading_highlight')}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            {t('description')}
          </p>
        </div>

        {/* Flow Diagram - Desktop & Tablet */}
        <div className="hidden md:block relative px-4">
          {/* Connecting Lines with Glow */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7a600] to-transparent opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7a600] to-transparent animate-pulse"></div>
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div 
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Node Circle */}
                  <div 
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#f7a600] to-[#d99000] flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 ${
                      hoveredStep === step.id 
                        ? 'scale-110 shadow-2xl shadow-[#f7a600]/50' 
                        : 'shadow-lg shadow-[#f7a600]/20'
                    }`}
                  >
                    {/* Pulse Ring */}
                    <div className={`absolute inset-0 rounded-full border-2 sm:border-4 border-[#f7a600] ${
                      hoveredStep === step.id ? 'animate-ping opacity-75' : 'opacity-0'
                    }`}></div>
                    
                    <step.icon size={32} className="lg:w-12 lg:h-12" color="black" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f7a600] flex items-center justify-center text-black font-bold text-xs sm:text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className={`bg-[#1a1a1a] border-2 rounded-xl p-4 sm:p-6 w-full transition-all duration-500 ${
                    hoveredStep === step.id 
                      ? 'border-[#f7a600] -translate-y-2 shadow-xl shadow-[#f7a600]/20' 
                      : 'border-[#2a2a2a]'
                  }`}>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 text-center line-clamp-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm text-center mb-2 sm:mb-3 leading-relaxed line-clamp-3">
                      {t(step.descKey)}
                    </p>
                    <p className={`text-xs text-center transition-all duration-300 line-clamp-2 ${
                      hoveredStep === step.id ? 'text-[#f7a600]' : 'text-gray-600'
                    }`}>
                      {t(step.detailsKey)}
                    </p>
                  </div>

                  {/* Animated Arrow - Only show on desktop for all 4 steps */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden lg:block absolute -right-8 xl:-right-12 top-16 text-[#f7a600] animate-pulse">
                      <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Vertical arrow for 2-column layout */}
                  {index === 1 && (
                    <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 text-[#f7a600] animate-bounce">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Flow Diagram - Mobile */}
        <div className="md:hidden space-y-6 px-4">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex flex-col items-center">
                {/* Node Circle */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#f7a600] to-[#d99000] flex items-center justify-center mb-4 shadow-lg shadow-[#f7a600]/20">
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#f7a600] flex items-center justify-center text-black font-bold text-xs shadow-lg">
                    {index + 1}
                  </div>
                  <step.icon size={36} color="black" />
                </div>

                {/* Content Card */}
                <div className="bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-xl p-5 w-full">
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm text-center mb-2 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                  <p className="text-xs text-gray-600 text-center">
                    {t(step.detailsKey)}
                  </p>
                </div>
              </div>

              {/* Vertical Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <svg className="w-7 h-7 text-[#f7a600] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
            {t('bottom_text_part1')} <span className="text-[#f7a600] font-semibold">{t('bottom_text_highlight')}</span> {t('bottom_text_part2')}
          </p>
          <button className="bg-[#f7a600] cursor-pointer text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#d99000] transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs">
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  );
}