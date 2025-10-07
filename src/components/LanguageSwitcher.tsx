'use client';

import { useRouter, useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams(); // Lấy locale từ URL
  const t = useTranslations('header');
  const [isPending, startTransition] = useTransition();
  const locales = ['en', 'vi', 'fr','zh'];

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      router.push(`/${newLocale}`);
    });
  };

  // Sử dụng locale từ params, mặc định là 'en' nếu không có
  const currentLocale = (params?.locale as string) || 'en';

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        disabled={isPending}
        className="w-full md:w-auto bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 hover:bg-gray-700 transition-all duration-300 appearance-none cursor-pointer"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} className="text-white ">
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}