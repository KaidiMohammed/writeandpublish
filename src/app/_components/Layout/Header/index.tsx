'use client';
import { useState, useEffect } from 'react';

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

  return (
    <header
      className={`sticky ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      } h-16 bg-white-200 transition-all duration-500 bg-white border-b-2 border-solid`}
    >
      <nav className="px-4 lg:px-6 py-2.5  text-black tracking-tight">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              Write & publish
            </span>
          </a>
          <div className="flex items-end justify-end lg:order-2">
            <a
              href="#"
              className="text-black  hover:bg-blue-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none "
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
