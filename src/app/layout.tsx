import type { Metadata } from 'next';

import './globals.css';

import { Montserrat, Playfair_Display } from 'next/font/google';

import Navbar from '@/components/common/Navbar';
import Head from 'next/head';

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
  description: 'a personal portfolio experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <body
        className={`${montserrat.variable} ${playfair.variable} lg:p-lg p-md flex w-screen flex-col items-center overflow-x-clip antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
