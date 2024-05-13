import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/layouts/Header'));
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The thao TV',
  description: 'xem live bóng giải trí'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gradient-to-br from-gray-900 to-gray-800 w-full min-h-screen text-white">
          <Suspense fallback={<p>...loading</p>}>
            <Header />
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
