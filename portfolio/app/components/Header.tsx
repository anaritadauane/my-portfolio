"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center py-4 px-6 mx-8 my-4'>
        <div className='font-Lato font-bold flex-shrink-0 text-brown'>
          <p>achimuco.</p>
        </div>
        <div className='hidden md:flex md:items-center md:space-x-4 font-Roboto ml-auto'>
          {/* Navigation links */}
          <a href='#about-me' className='text-black hover:underline'>
            about me
          </a>
          <a href='#portfolio' className='text-black hover:underline'>
            portfolio
          </a>
          <a href='#skills' className='text-black hover:underline'>
            skills
          </a>
          <a
            href='/docs/ANA_CHIMUCO_CV_eng.pdf'
            download
            className='text-black hover:underline '
          >
            cv
          </a>
        </div>
        <div className='flex items-center'>
          {/* Other elements on the right side */}
          <button className='text-black md:hidden' onClick={toggleMenu}>
            {/* Hamburger menu icon for mobile */}
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
          {/* Other right side elements */}
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className='fixed inset-0 bg-[#F6F3EB] bg-opacity-90 z-50'>
          <div className='absolute top-0 right-0 p-4'>
            <button className='text-black' onClick={toggleMenu}>
              {/* Close icon */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-col items-center justify-center h-full'>
            {/* Mobile navigation links */}
            <a href='#about-me' className='text-black hover:underline'>
              about me
            </a>
            <a href='#portfolio' className='text-black hover:underline'>
              portfolio
            </a>
            <a href='#skills' className='text-black hover:underline'>
              skills
            </a>
            <a href='#' className='text-black hover:underline'>
              cv
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
