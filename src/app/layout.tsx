import type { Metadata } from 'next';

import './globals.css';

import Navbar from '@/components/common/Navbar';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
      <body className="lg:p-lg p-md flex w-full flex-col items-center overflow-x-clip antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
