'use client';

import React from 'react';
import './styles.css';
import Image from 'next/image';
import cx from 'classnames';
interface Props {
  title: string;
  description: string;
  icon: string;
  isRight?: boolean;
}
export default function TimelineItem({
  title,
  description,
  icon,
  isRight,
}: Props) {
  return (
    <div
      className={cx('timeline-card-container z-9', {
        'timeline-card-container__right': isRight,
      })}
    >
      <div className='timeline-content-wrapper relative'>
        <div className='timeline-content gap-y-1 md:gap-y-4 p-2 md:p-6'>
          <div className='icon md:mb-5'>
            <Image src={icon} alt='title' width={64} height={64} />
          </div>
          <h2 className='text-base md:text-[28px] mb-1 md:mb-4 font-semibold text-neutral-7 dark:text-white'>
            {title}
          </h2>
          <span className='text-neutral-7 text-xs md:text-base font-normal dark:text-neutral-2'>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
