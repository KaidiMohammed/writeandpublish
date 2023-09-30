import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Provider from '@/src/app/context/ClientProvider';

import { Header } from './_components/Layout/Header';
import { Footer } from './_components/Layout/Footer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'], weight: '500' });

export const metadata: Metadata = {
  title: 'Write and publish',
  description: 'Share knowledge ! Share what matters.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <Provider session={session}>
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
          <div className="modal-container"></div>

          <main>{children}</main>
          {/* <Footer /> */}
        </body>
      </Provider>
    </html>
  );
}
