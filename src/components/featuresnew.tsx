'use client';

import { Zap, Lock, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Zap,
      title: t('features.0.title'),
      description: t('features.0.description'),
    },
    {
      icon: Lock,
      title: t('features.1.title'),
      description: t('features.1.description'),
    },
    {
      icon: TrendingUp,
      title: t('features.2.title'),
      description: t('features.2.description'),
    },
  ];

  return (
    <div id="features" className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t('title')}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
                <feature.icon className="w-8 h-8 text-[#f7a600]" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-[#f7a600] group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}