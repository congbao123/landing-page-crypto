'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';


import BinanceLogo from '../../../public/Img/Logos/270.png';
import CoinbaseLogo from '../../../public/Img/Logos/coinbase.png';
import bitgetlogo from '../../../public/Img/Logos/bitget.png';
import BingXLogo from '../../../public/Img/Logos/BingX.png';
import KrakenLogo from '../../../public/Img/Logos/kraken.png';
import OKXLogo from '../../../public/Img/Logos/okx.png'


export const TrustedBySection = () => {
  const t = useTranslations('trusted');

  const logos = [
    { name: 'Binance', logo: BinanceLogo, color: '#F3BA2F' },
    { name: 'Coinbase', logo: CoinbaseLogo, color: '#0052FF' },
    { name: 'bitget', logo: bitgetlogo, color: '#3375BB' },
    { name: 'Bingx', logo: BingXLogo, color: '#F6851B' },
    { name: 'Kraken', logo: KrakenLogo, color: '#5741D9' },
    { name: 'OKX', logo: OKXLogo, color: '#000000' },

  ];

  // Duplicate for infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] via-black to-[#1a1a1a] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#f7a600]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('heading_part1')}{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7a600] via-amber-500 to-[#f7a600]"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s ease infinite',
              }}
            >
              {t('heading_highlight')}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            {t('description')}
          </p>
        </div>

        {/* Logos Slider Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden py-8">
            <div 
              className="flex gap-8 sm:gap-12 lg:gap-16"
              style={{
                animation: 'scroll 25s linear infinite',
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-800 hover:border-[#f7a600] transition-all duration-500 hover:shadow-2xl hover:shadow-[#f7a600]/30 hover:scale-110 w-36 h-24 sm:w-48 sm:h-32 lg:w-56 lg:h-36 flex items-center justify-center">
                    {/* Logo Image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                      <Image 
                        src={logo.logo}
                        alt={logo.name}
                        className="object-contain transition-all duration-500 group-hover:brightness-110"
                        style={{
                          filter: 'grayscale(100%) brightness(0.6)',
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'grayscale(100%) brightness(0.6)';
                        }}
                      />
                    </div>
                    
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl blur-xl"
                      style={{ 
                        background: `radial-gradient(circle at center, ${logo.color}20, transparent 70%)`
                      }}
                    ></div>
                    
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: `inset 0 0 20px ${logo.color}20, 0 0 20px ${logo.color}20`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;