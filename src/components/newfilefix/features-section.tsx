'use client';

import { Button } from "../Button";
import { Rocket, ShieldCheck, BarChart3, Cog } from "lucide-react";
import { useTranslations } from 'next-intl';

export const FeaturesSection = () => {
  const t = useTranslations('features');

  const featuresData = [
    {
      icon: Rocket,
      titleKey: "feature1_title",
      descKey: "feature1_desc",
    },
    {
      icon: ShieldCheck,
      titleKey: "feature2_title",
      descKey: "feature2_desc",
    },
    {
      icon: BarChart3,
      titleKey: "feature3_title",
      descKey: "feature3_desc",
    },
    {
      icon: Cog,
      titleKey: "feature4_title",
      descKey: "feature4_desc",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Bên trái - Các ô tính năng */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="bg-[#1a1a1a] p-5 sm:p-6 rounded-lg border border-gray-800 hover:border-[#f7a600] transition-all duration-300 group"
              >
                <div className="text-[#f7a600] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white line-clamp-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">{t(feature.descKey)}</p>
              </div>
            );
          })}
        </div>

        {/* Bên phải - Nội dung giới thiệu */}
        <div className="order-1 lg:order-2">
          <div className="mb-3 sm:mb-4">
            <span className="text-[#f7a600] text-xs sm:text-sm font-semibold uppercase tracking-wider">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white leading-tight">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            {t('description1')}
          </p>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            {t('description2')}
          </p>
          <Button className="border-2 border-[#f7a600] cursor-pointer bg-black text-[#f7a600] hover:bg-[#f7a600] hover:text-black transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold">
            {t('cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};