import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';

import { Header } from './_components/Layout/Header';
import { Footer } from './_components/Layout/Footer';

const inter = Inter({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Write and publish',
  description: 'Share knowledge ! Share what matters.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        <nav className="flex justify-around text-xl mt-7">
          <Link
            className="bg-yellow-500 px-2.5 rounded-md text-white"
            href="/post/read"
          >
            Read posts
          </Link>
          <Link
            className="bg-yellow-500 px-2.5 rounded-md text-white"
            href="/post/write"
          >
            Write a post
          </Link>
        </nav>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
