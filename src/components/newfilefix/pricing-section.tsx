"use client"

import { useState } from "react"
import { Rocket, Settings, Brain, TrendingUp, Wallet, Smartphone, FileCheck, Shield } from "lucide-react"
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('pricing');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredAddon, setHoveredAddon] = useState<number | null>(null)

  const plans = [
    {
      icon: Rocket,
      nameKey: "plan1_name",
      targetKey: "plan1_target",
      descKey: "plan1_desc",
      priceKey: "plan1_price",
      ctaKey: "plan1_cta",
      highlighted: false,
    },
    {
      icon: Settings,
      nameKey: "plan2_name",
      targetKey: "plan2_target",
      descKey: "plan2_desc",
      priceKey: "plan2_price",
      ctaKey: "plan2_cta",
      highlighted: true,
    },
    {
      icon: Brain,
      nameKey: "plan3_name",
      targetKey: "plan3_target",
      descKey: "plan3_desc",
      priceKey: "plan3_price",
      ctaKey: "plan3_cta",
      highlighted: false,
    },
  ]

  const addons = [
    {
      icon: TrendingUp,
      nameKey: "addon1_name",
      priceKey: "addon1_price",
      descKey: "addon1_desc",
    },
    {
      icon: Wallet,
      nameKey: "addon2_name",
      priceKey: "addon2_price",
      descKey: "addon2_desc",
    },
    {
      icon: Smartphone,
      nameKey: "addon3_name",
      priceKey: "addon3_price",
      descKey: "addon3_desc",
    },
    {
      icon: FileCheck,
      nameKey: "addon4_name",
      priceKey: "addon4_price",
      descKey: "addon4_desc",
    },
    {
      icon: Shield,
      nameKey: "addon5_name",
      priceKey: "addon5_price",
      descKey: "addon5_desc",
    },
  ]

  return (
    <section  className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#f7a600]"
                    : "bg-[#1a1a1a] border-2 border-[#2a2a2a]"
                } ${hoveredCard === index ? "transform scale-105" : ""}`}
                style={{
                  boxShadow: hoveredCard === index ? "0 0 30px rgba(247, 166, 0, 0.3)" : "none",
                }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f7a600] text-black px-4 py-1 rounded-full text-sm font-semibold">
                    {t('badge_popular')}
                  </div>
                )}

                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#f7a600] to-[#ff8800] mb-6 shadow-lg">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{t(plan.nameKey)}</h3>
                <p className="text-[#f7a600] text-sm font-semibold mb-4">{t(plan.targetKey)}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{t(plan.descKey)}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{t(plan.priceKey)}</span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg cursor-pointer font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-[#f7a600] text-black hover:bg-[#ff8800] shadow-lg"
                      : "border-2 border-[#f7a600] text-[#f7a600] hover:bg-[#f7a600] hover:text-black"
                  }`}
                >
                  {t(plan.ctaKey)}
                </button>
              </div>
            )
          })}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('addons_heading')}</h3>
            <p className="text-gray-400 text-lg">{t('addons_subheading')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {addons.map((addon, index) => {
              const IconComponent = addon.icon
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredAddon(index)}
                  onMouseLeave={() => setHoveredAddon(null)}
                  className={`bg-[#1a1a1a] rounded-xl p-6 border-2 transition-all duration-300 ${
                    hoveredAddon === index ? "border-[#f7a600] transform translate-y-[-4px]" : "border-[#2a2a2a]"
                  }`}
                  style={{
                    boxShadow: hoveredAddon === index ? "0 10px 25px rgba(247, 166, 0, 0.2)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#3a3a3a]">
                      <IconComponent className="w-6 h-6 text-[#f7a600]" />
                    </div>
                    <span className="text-[#f7a600] text-sm font-bold bg-[#2a2a2a] px-3 py-1 rounded-full">
                      {t(addon.priceKey)}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2">{t(addon.nameKey)}</h4>
                  <p className="text-gray-400 text-sm">{t(addon.descKey)}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center bg-gradient-to-r from-[#1a1a1a] to-black rounded-2xl p-12 border-2 border-[#2a2a2a]">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('bottom_heading')}
            </h3>
            <button className="bg-[#f7a600] cursor-pointer text-black text-lg px-8 py-4 rounded-lg font-semibold hover:bg-[#ff8800] transition-all duration-300 shadow-lg">
              {t('bottom_cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}