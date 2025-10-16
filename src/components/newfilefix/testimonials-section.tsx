'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      nameKey: "client1_name",
      roleKey: "client1_role",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=f7a600",
      rating: 5,
      contentKey: "client1_content",
    },
    {
      nameKey: "client2_name",
      roleKey: "client2_role",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=00bcd4",
      rating: 5,
      contentKey: "client2_content",
    },
    {
      nameKey: "client3_name",
      roleKey: "client3_role",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael&backgroundColor=9c27b0",
      rating: 5,
      contentKey: "client3_content",
    },
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-[#f7a600] font-semibold mb-2 tracking-wider">{t('badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('heading')}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-[#f7a600] hover:shadow-lg hover:shadow-[#f7a600]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f7a600] text-[#f7a600]" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed italic">&ldquo;{t(testimonial.contentKey)}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={t(testimonial.nameKey)}
                  className="w-12 h-12 rounded-full ring-2 ring-[#f7a600]/20"
                />
                <div>
                  <div className="font-semibold text-white">{t(testimonial.nameKey)}</div>
                  <div className="text-sm text-zinc-500">{t(testimonial.roleKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}