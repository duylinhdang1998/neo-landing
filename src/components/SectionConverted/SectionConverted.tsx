import React from 'react';

export default function SectionConverted() {
  return (
    <section className='py-[48px] lg:py-[100px] px-4 dark:bg-bg-primary min-h-fit w-full'>
      <div className='relative lg:max-w-6xl container mx-auto '>
        <img
          src={'/img/converted.webp'}
          alt='converted'
          className='absolute top-0 left-0 w-full h-full rounded-[16px] dark:border dark:border-neutral-6'
        />
        <div className='relative z-10 px-4 py-[32px] lg:p-[64px]'>
          <div className='text-[28px] lg:text-[40px] font-semibold mb-6 text-white'>
            Vision for 2026 <br /> Connecting Worlds with Link.Neo
          </div>
          <span className='text-[#F5F5F5] text-sm lg:text-base font-normal'>
            By 2026, Link.Neo will be the leading platform for decentralized
            entertainment and dual-chain trading, bridging Neo’s world with
            Chainlink and beyond.
          </span>
          <button className='flex items-center space-x-3 py-4 px-8 bg-secondary rounded-[48px] text-neutral-8 font-semibold mt-6 lg:mt-[40px]' aria-label='Join now'>
            <span>Join now</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='10'
              viewBox='0 0 14 10'
              fill='none'
            >
              <path
                d='M12.9998 5.24707H1.11963'
                stroke='#141414'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9 1.24658L13 5.24658L9 9.24658'
                stroke='#141414'
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
