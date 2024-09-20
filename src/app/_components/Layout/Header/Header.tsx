'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Portal from '../../Portal/Portal';
import WelcomeAuth from '../../Auth';
import React from 'react';
import Button from '../../Button/Button';
import { redirect } from 'next/navigation';

const Header = () => {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>();

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? 'down' : 'up';
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener('scroll', updateScrollDirection);
      return () => {
        window.removeEventListener('scroll', updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();

  const { data: session } = useSession();
  const [displayAuth, setDisplayAuth] = React.useState(false);
  const handleSignInClick = () => {
    setDisplayAuth(true);
  };
  const handCloseAuthModal = () => {
    setDisplayAuth(false);
  };

  const logout = async () => {
    await signOut();
    redirect('/');
  };
  return (
    <header
      className={`sticky ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      } h-16 bg-white-200 transition-all duration-500 bg-white border-b-2 border-solid`}
    >
      <nav className="px-4 lg:px-6 py-2.5  text-black tracking-tight">
        <div className="flex justify-between mx-auto ">
          <Link href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black cursor-pointer ">
              Write & publish
            </span>
          </Link>
          <div className="flex flex-wrap items-star">
            <div className="">
              {session?.user && (
                <>
                  <label className=" text-blue-500 focus:outline-none ">
                    {session?.user?.name}
                  </label>
                </>
              )}
              <>
                {session?.user && (
                  <>
                    <Button
                      info
                      rounded
                      sm
                      className="justify-center mb-5"
                      onClick={() => logout()}
                    >
                      Log out
                    </Button>
                  </>
                )}
                {!session?.user && (
                  <Button
                    info
                    sm
                    rounded
                    className="justify-center"
                    onClick={() => handleSignInClick()}
                  >
                    Log in
                  </Button>
                )}
                {displayAuth && (
                  <Portal onClose={handCloseAuthModal}>
                    <WelcomeAuth onClose={handCloseAuthModal} />
                  </Portal>
                )}
              </>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
