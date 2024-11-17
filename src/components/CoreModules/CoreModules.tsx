import React from 'react';
import CoreItem from './CoreItem';

const data = [
  {
    id: '1',
    label: 'Stream-to-Earn Rewards',
    img: '/img/blockchain.png',
    desc: 'Earn NEO by streaming AI-driven trading insights',
  },
  {
    id: '2',
    label: 'Oracle-Powered Data',
    img: '/img/rewards.png',
    desc: 'Real-time Chainlink data ensures trustworthy, actionable trading insights',
  },
];
export default function CoreModules() {
  return (
    <section id='corderModules' className='dark:bg-bg-primary'>
      <div className='container mx-auto py-[48px] lg:py-[100px] px-4 xl:px-0 lg:max-w-6xl'>
        <div
          className='text-center text-[28px] lg:text-[48px] font-semibold text-neutral-7 dark:text-white'
          data-aos='fade-in'
        >
          Key Features
        </div>
        <div className='grid grid-cols-12 mt-2 lg:mt-6' data-aos='fade-in'>
          <div className='col-span-12 lg:col-span-6 lg:col-start-4 lg:col-end-10 text-sm lg:text-base text-center text-neutral-5 dark:text-neutral-4'>
            Stream-to-Earn and AI-Driven Trading
          </div>
        </div>
        <div className='mt-10 flex flex-col gap-y-8'>
          {data.map((item, index) => (
            <CoreItem
              img={item.img}
              key={item.id}
              index={index}
              label={item.label}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
