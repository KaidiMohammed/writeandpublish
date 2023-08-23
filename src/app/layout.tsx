import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './_components/layout/header/header';
import { Footer } from './_components/layout/footer/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

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
      <body>
        <Header />
        <nav className="flex justify-around text-xl mt-7">
          <Link className="bg-green-400 rounded-lg" href="/post/read">
            Read posts
          </Link>
          <Link className="bg-blue-400 rounded-lg" href="/post/write">
            Write a post
          </Link>
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
