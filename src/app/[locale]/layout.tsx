import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import '../../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'landing-page',
  description: 'Multilingual app',
};

export default async function RootLayout(
  {children, params }: { children: React.ReactNode; 
  params: Promise<{ locale: string[] }> }) 
{
  const { locale } = await params; // Destructure locale từ params
  const localeStr = Array.isArray(locale) ? locale[0] : locale;
  return (
    <html lang={localeStr}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={localeStr}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}