'use client';

import { useRouter, useParams } from 'next/navigation';
import { useState, useTransition, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams();
  const t = useTranslations('header'); 
  const [isPending, startTransition] = useTransition();
  
  
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref để xử lý việc click ra ngoài
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const locales = ['en', 'vi', 'fr', 'zh'];
  const currentLocale = (params?.locale as string) || 'en';

  // Hàm logic chuyển ngôn ngữ
  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      router.push(`/${newLocale}`);
    });
    setIsOpen(false); // Đóng dropdown 
  };

  // Hook để xử lý việc click ra ngoài component thì đóng dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    // Lắng nghe sự kiện click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Dọn dẹp listener khi component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 w-full md:w-auto bg-neutral-800 text-white border border-neutral-700 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600 hover:bg-neutral-700 transition-colors duration-200 cursor-pointer"
      >
        <Globe size={16} />
        <span>{currentLocale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div 
            className="absolute top-full right-0 mt-2 w-32 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg z-10 overflow-hidden"
        
            style={{ transition: 'opacity 0.2s ease, transform 0.2s ease', opacity: 1, transform: 'translateY(0)' }}
        >
          <ul className="py-1">
            {locales.map((locale) => (
              <li key={locale}>
                <button
                  onClick={() => changeLanguage(locale)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 
                    ${currentLocale === locale 
                      ? ' bg-[#f7a600] text-white' 
                      : 'text-gray-300 hover:bg-neutral-700'}
                  `}
                  disabled={isPending}
                >
                  {locale.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}