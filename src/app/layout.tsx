import type { Metadata } from 'next';

import './globals.css';

import { Montserrat, Playfair_Display } from 'next/font/google';

import Navbar from '@/components/common/Navbar';

const montserrat = Montserrat({
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-mono',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Parnika Singh',
  description: 'a portfolio experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} lg:p-lg p-md flex w-screen flex-col items-center overflow-x-clip antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
