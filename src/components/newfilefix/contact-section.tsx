"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "../Button";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section  className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('heading')}</h2>
        <p className="text-gray-400 text-lg">
          {t('description')}
        </p>
      </div>

      <div className="bg-gradient-to-b from-[#1a1a1a] to-black border border-gray-800 rounded-2xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('label_name')} <span className="text-[#f7a600]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#f7a600] transition-colors"
                placeholder={t('placeholder_name')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('label_email')} <span className="text-[#f7a600]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#f7a600] transition-colors"
                placeholder={t('placeholder_email')}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              {t('label_company')}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#f7a600] transition-colors"
              placeholder={t('placeholder_company')}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('label_message')} <span className="text-[#f7a600]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#f7a600] transition-colors resize-none"
              placeholder={t('placeholder_message')}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button type="submit" className="w-full sm:w-auto text-black hover:scale-105 transition-transform px-8 py-4 text-lg">
              {t('cta')}
            </Button>
            <div className="text-sm text-gray-400">
              {t('alternative')} <span className="text-[#f7a600]">@cryptotcb</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};