import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Provider from '@/src/app/context/ClientProvider';

import { Header } from './_components/Layout/Header';
import { Footer } from './_components/Layout/Footer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import { useSession, signOut } from 'next-auth/react';

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
      <head>
        <title>Mobile-ready web app</title>
        {/* 
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-title"
          content="Mobile web app title"
        />

        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimal-ui"
        />

        <meta name="format-detection" content="telephone=no" /> */}
      </head>
      <Provider session={session}>
        <body className="flex flex-col justify-between w-full h-full items-stretch overflow-auto flex-1 gap-8">
          <Header />
          <div>
            <nav className="flex justify-around text-xl flex-wrap">
              <Link
                className="bg-yellow-500 px-2.5 rounded-md text-white"
                href="/post/read"
              >
                Read posts
              </Link>
              {session?.user && (
                <Link
                  className="bg-yellow-500 px-2.5 rounded-md text-white"
                  href="/post/write"
                >
                  Write a post
                </Link>
              )}
            </nav>
            <div className="modal-container"></div>
          </div>
          <main className="max-h-max">{children}</main>
        </body>
      </Provider>
    </html>
  );
}
