import React from 'react';
import CoreItem from './CoreItem';

const data = [
  {
    id: '1',
    label: 'Blockchain Development',
    img: '/img/blockchain.png',
    desc: 'Users earn NEO tokens while watching content on Link.Neo-powered platforms. \n Milestone-based rewards in LINK tokens are unlocked',
  },
  {
    id: '2',
    label: 'Oracle-Triggered Rewards',
    img: '/img/rewards.png',
    desc: 'Chainlink’s oracles ensure real-time tracking of viewership metrics and content milestones. Accurate data powers automated payments, distributing rewards fairly between users and creators in NEO and LINK.',
  },
];
export default function CoreModules() {
  return (
    <section id='corderModules'>
      <div className='container mx-auto py-[48px] lg:py-[100px] px-4 xl:px-0 lg:max-w-6xl'>
        <div className='text-center text-[28px] lg:text-[48px] font-semibold text-neutral-7'>
          Core Modules
        </div>
        <div className='grid grid-cols-12 mt-2 lg:mt-6'>
          <div className='col-span-12 lg:col-span-6 lg:col-start-4 lg:col-end-10 text-sm lg:text-base text-center text-neutral-5'>
            With S2E, users earn rewards while consuming entertainment content.
            Unlike traditional platforms, Link.Neo directly rewards users with
            NEO and LINK tokens for streaming music, videos, and other media
            content.
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
