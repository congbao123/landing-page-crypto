"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    { questionKey: 'q1', answerKey: 'a1' },
    { questionKey: 'q2', answerKey: 'a2' },
    { questionKey: 'q3', answerKey: 'a3' },
    { questionKey: 'q4', answerKey: 'a4' },
    { questionKey: 'q5', answerKey: 'a5' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">{t('heading')}</h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-800 bg-[#0a0a0a] transition-all hover:border-[#f7a600]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="pr-8 text-base font-medium text-white md:text-lg">{t(faq.questionKey)}</span>
                <span className="flex-shrink-0 text-white">
                  {openIndex === index ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-[#f7a600] px-6 pb-6 pt-4">
                  <p className="text-sm leading-relaxed text-gray-300 md:text-base">{t(faq.answerKey)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}