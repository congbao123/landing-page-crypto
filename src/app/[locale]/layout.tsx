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
  params: Promise<{ locale: string }> }) 
{
  const { locale } = await params;// Destructure locale từ params
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}