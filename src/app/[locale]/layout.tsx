import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Đổi từ string[] thành string
}) {
  const { locale } = await params;
  
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