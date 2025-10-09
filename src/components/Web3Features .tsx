'use client';

import { Database, Coins, ShoppingBag, Shuffle, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from './Button';

const Web3Features = () => {
  const t = useTranslations('web3');

  const features = [
    {
      icon: Database,
      color: 'text-white bg-pink-500',
      hover: 'hover:bg-pink-400/10',
      title: t('features.0.title'),
      description: t('features.0.description'),
    },
    {
      icon: Coins,
      color: 'text-white bg-green-400',
      hover: 'hover:bg-green-500/10',
      title: t('features.1.title'),
      description: t('features.1.description'),
    },
    {
      icon: ShoppingBag,
      color: 'text-white bg-blue-500',
      hover: 'hover:bg-blue-500/10',
      title: t('features.2.title'),
      description: t('features.2.description'),
    },
    {
      icon: Shuffle,
      color: 'text-white bg-orange-400',
      hover: 'hover:bg-orange-500/10',
      title: t('features.3.title'),
      description: t('features.3.description'),
    },
  ];

  return (
    <section id="web3" className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('title')} <span className="text-[#f7a600]">{t('title-mid')}</span> {t('title-end')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          {t('description')}
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group bg-black rounded-2xl p-8 min-h-[260px] hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group text-left shadow-lg ${feature.hover}`}
            >
              {/* Icon box */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-gray-900 ${feature.color}`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-12">
          <Button className="px-6 py-3 rounded-lg bg-gradient-to-r hover:text-black hover:scale-105 transition-all duration-300">
            {t('cta')} <ArrowRight className="inline-block ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Web3Features;