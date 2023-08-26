const Footer = () => {
  return (
    <footer className="bg-white shadow  mx-auto  bottom-0 left-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black-500 sm:text-center dark:text-black-400">
          © 2023{' '}
          <a className="hover:underline cursor-pointer">Write & publish</a>. All
          Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black-500 dark:text-black-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
