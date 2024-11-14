/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import './timeline.css';
import cx from 'classnames';
import { useMediaQuery } from 'usehooks-ts';
import dynamic from 'next/dynamic';

const TimelineItem = dynamic(() => import('./TimelineItem'), { ssr: false });

const timelineData = [
  {
    title: 'Neo Token',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: '/img/neo_token.png',
  },
  {
    title: 'Governance Participation',
    description:
      'Users stake NEO to vote on creator projects and platform improvements, with participants earning GAS tokens (transaction rewards).',
    img: '/img/governance.png',
  },
  {
    title: 'Digital Assets Creation',
    description:
      'NEO powers NFT minting for exclusive media content and tokenized revenue shares.',
    img: '/img/digital.png',
  },
  {
    title: 'Link Token',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: '/img/link_token.png',
  },
  {
    title: 'Oracle Fees',
    description:
      'LINK tokens are used to pay for data feeds that track content performance or verify media licenses.',
    img: '/img/oracle.png',
  },
  {
    title: 'Cross-Chain Payment',
    description:
      'LINK enables multi-chain liquidity, allowing users to swap between NEO and other assets seamlessly.',
    img: '/img/cross_chain.png',
  },
];

const SectionTimeLine = () => {
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <section className='bg-[#EFFBFF] py-12 xl:py-[100px]'>
      <div className='container mx-auto  max-w-6xl mb-[64px]'>
        <div className='text-center text-[48px] font-semibold text-neutral-7'>
          Dual Token Utility
        </div>
        <div className='grid grid-cols-12 mt-6'>
          <div className='col-span-8 col-start-3 text-center text-neutral-5'>
            NEO + LINK in the Link.Neo Ecosystem Link.Neo leverages the
            complementary strengths of both NEO and LINK to fuel decentralized
            content economies and cross-chain trading.
          </div>
        </div>
      </div>
      <VerticalTimeline className='neo-timeline '>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={item.title}
            className='xl:!my-[-40px]'
            contentStyle={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              padding: 0,
            }}
            contentArrowStyle={{ display: 'none' }}
            iconClassName='xl:!w-9 xl:!h-9 xl:!ml-[-18px] !bg-transparent !shadow-none !top-1/2 xl:!-translate-y-1/2'
            icon={
              <div className='relative'>
                <Image
                  src={index % 2 === 0 ? '/img/ball.png' : '/img/ball2.png'}
                  width={36}
                  height={36}
                  alt='ball'
                  className='relative'
                />
                <img
                  src={'/img/arrow.png'}
                  alt='arrow'
                  className={cx(
                    'absolute w-[64px] xl:w-[64px] h-auto top-1/2 rotate-180',
                    {
                      'xl:-left-full xl:right-0 -right-[60%]': index % 2 === 0,
                      'xl:-right-full xl:rotate-180 -right-[60%]':
                        index % 2 === 1,
                    }
                  )}
                />
              </div>
            }
          >
            <TimelineItem
              title={item.title}
              description={item.description}
              icon={item.img}
              isRight={!matches ? true : index % 2 === 1}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default SectionTimeLine;
