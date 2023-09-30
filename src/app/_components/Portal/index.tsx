'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// We create a portal to use modals indpendantly from page css
const WelcomePortal = ({ children, actionBar, onClose }: any) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const childrenUpdated = (
    <>
      <div>
        <div
          onClick={onClose}
          className="fixed inset-0 bg-gray-300 opacity-80"
        ></div>
        <div className="fixed inset-10 p-50  ">
          <div className="flex flex-col justify-between ">
            {children}
            <div className="flex justify-end">{actionBar}</div>
          </div>
        </div>
      </div>
    </>
  );
  return mounted
    ? //@ts-ignore
      createPortal(childrenUpdated, document.querySelector('.modal-container'))
    : null;
};

export default WelcomePortal;
