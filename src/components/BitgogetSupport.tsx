  import React from 'react';
  import { MessageCircle, Send } from 'lucide-react';
  import { Button } from './Button';
import { useTranslations } from 'next-intl';

  const BitgogetSupport = () => {
    const t = useTranslations('bitgogetSupport');
    return (
      <div id= "about" className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
            {t('title')}
          </h2>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Card - Community */}
            <div className="bg-gradient-to-br from-orange-500/5 via-gray-900 to-yellow-500/5 rounded-3xl p-8 md:p-12 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                {t('communityTitle')}
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                {t('communityDesc')}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      
                <Button className=" text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  {t('startButton')}
                </Button>

                {/*  Icons */}
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Telegram 1"
                  >
                    <Send className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Telegram 2"
                  >
                    <Send className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
                    aria-label="X/Twitter"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card - Support */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 md:p-12 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  {t('supportTitle')}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {t('supportDesc')}
                </p>

                {/* Decorative Chat Icon */}
                <div className="absolute bottom-8 right-8 opacity-10">
                  <MessageCircle className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default BitgogetSupport;