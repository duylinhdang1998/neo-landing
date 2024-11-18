'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import cx from 'classnames';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const menuLinks = [
  { id: '1', label: 'Home', to: '/home' },
  { id: '2', label: 'Stream-to-Earn ', to: '#' },
  { id: '3', label: 'AI Trading ', to: '#' },
  { id: '4', label: 'Dual Earning ', to: '#' },
  { id: '5', label: 'Governance ', to: '#' },
  { id: '6', label: 'Help Center ', to: '#' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='absolute top-0 left-0 w-full z-[99]'>
      <div className='container mx-auto'>
        <nav className='flex justify-between items-center py-3 px-4 xl:px-0'>
          <Link href={'/'}>
            <Image
              src='/img/logo.png'
              width={128}
              height={40}
              alt='logo-linkneo'
              layout='intrinsic'
            />
          </Link>
          <ul className='hidden xl:flex items-center gap-x-8'>
            {menuLinks.map((item) => (
              <li key={item.id} className='px-4'>
                <Link
                  href={item.to}
                  className='font-semibold text-neutral-7 hover:text-primary dark:text-white dark:hover:text-primary'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center space-x-3'>
            <ToggleTheme />
            <Link
              className='hidden xl:block px-6 py-2 font-semibold rounded-[24px] border border-neutral-3 items-center justify-center dark:text-white'
              href='#'
            >
              Contact
            </Link>
            <button
              className='xl:hidden w-6 h-6 pr-4 dark:text-white'
              onClick={() => setOpen((prev) => !prev)}
              aria-label='close-menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path
                  d='M3 6h18M3 12h18M3 18h18'
                  stroke='currentColor'
                  strokeWidth={1.5}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>

          <div
            id='sideBar'
            className={cx(
              'xl:hidden fixed top-0 right-0 bg-black/20 h-full overflow-x-hidden duration-200 z-10',
              {
                'opacity-1 w-full': open,
                'opacity-0': !open,
              }
            )}
            onClick={() => setOpen(false)}
          >
            <div
              id='sideNav'
              className={cx(
                'fixed top-0 right-0 bg-white dark:bg-black shadow-lg h-full flex overflow-x-hidden duration-500 font-bold z-50',
                {
                  'w-[80%] ': open,
                  'w-0 ': !open,
                }
              )}
            >
              <a
                href='#'
                onClick={() => setOpen(false)}
                className='text-3xl absolute top-0 right-0 mr-3 mt-2 dark:text-white'
              >
                &times;
              </a>
              <ul className='flex flex-col gap-y-3 py-6 px-4'>
                {menuLinks.map((item) => (
                  <li key={item.id} className='px-4'>
                    <Link
                      href={item.to}
                      className='font-semibold hover:text-primary dark:text-white'
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <Link
                  className='block px-6 py-2 font-semibold rounded-[24px] border border-neutral-3 items-center justify-center dark:text-white'
                  href='#'
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
