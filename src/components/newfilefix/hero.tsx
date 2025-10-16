'use client';

import { Button } from "../Button";
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen lg:h-auto flex items-center pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7a600]/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#f7a600]/10 border border-[#f7a600]/20 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-[#f7a600] animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium">{t('badge')}</span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              {t('heading_part1')}{" "}
              <span className="text-[#f7a600]">{t('heading_highlight')}</span>{" "}
              {t('heading_part2')}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-10 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 justify-center lg:justify-start">
              {/* Primary CTA */}
              <Button className="group relative cursor-pointer bg-gradient-to-r from-[#f7a600] to-amber-500 text-black font-bold px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-[#f7a600]/50 hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('primary_cta')}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>

              {/* Secondary CTA */}
              <Button className="group relative cursor-pointer text-white bg-black border-2 border-[#f7a600] px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-xl hover:bg-[#f7a600] hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-[#f7a600]/30 transition-all duration-300 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t('secondary_cta')}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-[#f7a600] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-8 sm:mt-12 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                </div>
                <span className="whitespace-nowrap">{t('trust_indicator_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
                </div>
                <span className="whitespace-nowrap">{t('trust_indicator_2')}</span>
              </div>
            </div>
          </div>

          {/* Right: Hero video - Show below content on mobile, beside on desktop */}
          <div className="relative w-full order-2 lg:order-2">
            <div className="relative hidden lg:block rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video max-w-lg mx-auto lg:max-w-none">
              <video
                src="./video/videocoinblack.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-[#f7a600]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};