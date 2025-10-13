import { useTranslations } from 'next-intl';
import React, { useState, useEffect, useRef } from 'react';

const InvestorSlider = () => {
  const t = useTranslations('InvestorSlider');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Danh sách các công ty đầu tư
  const investors = [
    { name: 'Binance Labs', logo: 'BL' },
    { name: 'Coinbase Ventures', logo: 'CV' },
    { name: 'Sequoia Capital', logo: 'SC' },
    { name: 'Andreessen Horowitz', logo: 'A16Z' },
    { name: 'Paradigm', logo: 'PD' },
    { name: 'Pantera Capital', logo: 'PC' },
    { name: 'Digital Currency Group', logo: 'DCG' },
    { name: 'Polychain Capital', logo: 'PCC' },
  ];

  // Nhân đôi mảng để tạo hiệu ứng seamless loop
  const duplicatedInvestors = [...investors, ...investors];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 1; // Tốc độ scroll (pixels per frame)

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed;
        
        // Chiều rộng của một set items (8 items * 300px)
        const itemWidth = 300;
        const setWidth = investors.length * itemWidth;
        
        // Khi scroll hết một set, reset về 0 (seamless vì có duplicate)
        if (scrollPosition >= setWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, investors.length]);

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-[#f7a600] bg-opacity-10 px-4 py-2 rounded-full mb-4">
           
            <span className="text-black text-sm font-medium">Được tin tưởng bởi</span>
          </div> */}
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('titleBefore')}<span className=" ml-2 text-[#f7a600]">{t('titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex"
            style={{
              willChange: 'transform',
            }}
          >
            {duplicatedInvestors.map((investor, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: '300px' }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-[#f7a600] border-opacity-20 rounded-2xl p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-xl group">
                  {/* Logo Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#f7a600] bg-opacity-10 rounded-xl flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <span className="text-3xl font-bold text-black">
                      {investor.logo}
                    </span>
                  </div>
                  {/* Company Name */}
                  <h3 className="text-center text-white font-semibold text-lg">
                    {investor.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default InvestorSlider;