'use client';
import Image from 'next/image';
import React from 'react';
import MouseScrollDown from '../MouseScrollDown/MouseScrollDown';
import { useMediaQuery } from 'usehooks-ts';

export default function SectionHero() {
  const matches = useMediaQuery('(min-width: 1024px)');
  return (
    <section className='bg-hero relative flex lg:justify-center lg:items-center min-h-full lg:min-h-screen'>
      <div className='container mx-auto relative h-full mt-[100px] lg:mt-0'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <div className='col-span-12 lg:col-span-6'>
            <div
              className='flex flex-col justify-center h-full gap-y-2 lg:gap-y-4 px-4 xl:px-0'
              data-aos='fade-left'
            >
              <h1 className='text-[28px] lg:text-[53px] font-semibold lg:leading-[64px] text-neutral-7 dark:text-white'>
                <span className='text-primary'>Link</span>.
                <span className='text-secondary'>Neo</span> - Link You to the
                Neo World
              </h1>
              <p className='text-sm lg:text-[16px] text-neutral-7 mt-2 dark:text-white leading-[32px]'>
                {`Stream AI-powered trading insights and earn NEO rewards while you learn and trade.`}
              </p>
              <div className='p-2 inline-flex max-w-fit btn-animation relative'>
                <button className='bg-primary font-semibold text-white px-8 py-4 rounded-full transition-colors flex items-center space-x-3'>
                  Start Earning →
                </button>
              </div>
            </div>
          </div>
          <div
            className='col-span-12 lg:col-span-6 relative'
            data-aos='fade-down'
            data-aos-duration='1000'
          >
            <div className='relative'>
              <Image
                src='/img/banner.png'
                alt='hero-banner'
                width={matches ? 768 * 0.85 : 358}
                height={matches ? 632 : 306}
              />
              <div className='absolute animate-bounce top-0 left-[95px]'>
                <Image
                  src='/img/coin1.png'
                  alt='Coin'
                  width={matches ? 96 : 53}
                  height={matches ? 96 : 53}
                />
              </div>
              <div className='absolute animate-spin top-[100px] right-0'>
                <Image
                  src='/img/coin2.png'
                  alt='Coin'
                  width={matches ? 68 : 45}
                  height={matches ? 68 : 45}
                />
              </div>
            </div>
          </div>
        </div>
        <MouseScrollDown />
      </div>
    </section>
  );
}
