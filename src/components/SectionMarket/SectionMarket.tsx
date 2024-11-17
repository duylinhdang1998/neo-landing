import React from 'react';
import MarketItem from './MarketItem';

const data = [
  {
    id: 1,
    label: 'Stream and Earn NEO/LINK Rewards',
    description:
      'Users provide liquidity to dual-token pools (NEO/LINK pairs), earning trading fees and staking rewards in both tokens.',
    img: '/img/reward2.png',
  },
  {
    id: 3,
    label: 'Automated Yield from Streaming Rewards',
    description:
      'Users who hold dual NEO/LINK balances benefit from automated yield boosts when streaming, giving them higher payout rates compared to single-token users.',
    img: '/img/streaming.png',
  },
];
export default function SectionMarket() {
  return (
    <section className='dark:bg-bg-primary bg-white'>
      <div className='container mx-auto py-[48px] px-4 xl:px-0 lg:py-[100px] lg:max-w-6xl'>
        <div
          className='text-center text-[28px] lg:text-[48px] font-semibold text-neutral-7 dark:text-white'
          data-aos='fade-in'
        >
          NEO + LINK Markets
        </div>
        <div className='grid grid-cols-12 mt-2 lg:mt-6' data-aos='fade-in'>
          <div className='col-span-12 text-sm lg:text-base lg:col-span-8 lg:col-start-3 text-center text-neutral-5 dark:text-neutral-4'>
            A unique aspect of Link.Neo is its dual trading model, which offers
            opportunities to trade and stake both NEO and LINK tokens for
            liquidity, governance, and yield.
          </div>
        </div>
        <div className='grid grid-cols-2 gap-12 mt-[48px]'>
          {data.map((item) => (
            <MarketItem
              key={item.id}
              img={item.img}
              description={item.description}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
